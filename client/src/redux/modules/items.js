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

export const getItemTag = ({ itemTag, items }) => ({
  type: GET_ITEM_TAG,
  payload: { itemTag, items }
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

export const getItemTags = ({itemsData, itemTag}) => dispatch {
  if (itemTag.length === 0 || itemTag === [])
  {return itemsData}
  else ()
}

// REDUCER

export default (
  state = {
    isLoading: false,
    itemsData: [],
    itemTags: [],
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
    case GET_ITEM_TAG: {
      return { ...state, itemTags: action.payload };
    }
    default:
      return state;
  }
};
