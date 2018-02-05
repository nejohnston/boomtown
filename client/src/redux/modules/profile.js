// ACTIONS

const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

// ACTION CREATORS

export const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING
});

export const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error
});

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
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
