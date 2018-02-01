// ACTIONS
const GET_ITEM_TAG = "GET_ITEM_TAG";

// ACTION CREATORS
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
    itemTags: []
  },
  action
) => {
  switch (action.type) {
    case GET_ITEM_TAG: {
      return { ...state, itemTags: action.payload };
    }
    default:
      return state;
  }
};
