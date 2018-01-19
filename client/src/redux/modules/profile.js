// ACTIONS

const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

// ACTION CREATORS

export const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING
});

export const getProfile = itemsData => ({
  type: GET_PROFILE,
  payload: itemsData
});

export const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR
export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getPROFILELoading());

  return Promise.all(
    ["http://localhost:4000/items", "http://localhost:4000/users/"].map(url =>
      fetch(url).then(response => response.json())
    )
  )
    .then(json => {
      const [itemsData, users] = json;
      const ProfileWithOwners = itemsData.map(item => {
        const itemowner = users.filter(user => user.id === item.itemowner);
        item.itemowner = itemowner[0];
        return item;
      });

      dispatch(getProfile(ProfileWithOwners));
    })
    .catch(error => dispatch(getProfileError(error)));
};

// REDUCER

export default (
  state = {
    isLoading: false,
    itemsData: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_PROFILE: {
      return {
        ...state,
        isLoading: false,
        itemsData: action.payload,
        error: ""
      };
    }
    case GET_PROFILE_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
