// ACTIONS

const GET_ITEMS_LOADING = "GET_ITEMS_LOADING";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEMS_ERROR = "GET_ITEMS_ERROR";
const GET_ITEM_TAG = "GET_ITEM_TAG";

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

// Actions are payloads of information that send data from your
// application to your store. They are the only source of information
// for the store. You send them to the store using store.dispatch().

export const getItemTags = tag => ({
  type: GET_ITEM_TAG,
  payload: tag
});

// REDUCER

export default (
  state = {
    itemTags: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_ITEMS_LOADING: {
      return { ...state };
    }
    case GET_ITEMS: {
      return {
        ...state,
        error: ""
      };
    }
    case GET_ITEMS_ERROR: {
      return { ...state };
    }
    case GET_ITEM_TAG: {
      return { ...state, itemTags: action.payload };
    }
    default:
      return state;
  }
};
