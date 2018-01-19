// ACTIONS

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";

// ACTION CREATORS

export const getItemsLoading = () => ({
  type: GET_ITEMS_LOADING
});

export const getItems = itemsData => ({
  type: GET_ITEMS,
  payload: itemsData
});

export const getItemsError = error => ({
  type: GET_ITEMS_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR
export const fetchItemsAndUsers = () => dispatch => {
  dispatch(getItemsLoading());

  return Promise.all(
    ["http://localhost:4000/items", "http://localhost:4000/users/"].map(url =>
      fetch(url).then(response => response.json())
    )
  )
    .then(json => {
      const [itemsData, users] = json;
      const itemsWithOwners = itemsData.map(item => {
        const itemowner = users.filter(user => user.id === item.itemowner);
        item.itemowner = itemowner[0];
        return item;
      });

      dispatch(getItems(itemsWithOwners));
    })
    .catch(error => dispatch(getItemsError(error)));
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
    case GET_ITEMS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_ITEMS: {
      return {
        ...state,
        isLoading: false,
        itemsData: action.payload,
        error: ""
      };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};