const UPDATE_MODAL_STATE = "UPDATE_MODAL_STATE";
const TOGGLE_BORROWED = "TOGGLE_BORROWED";

// export const updateModalState =

export const toggleItemBeingBorrowed = itemBorrowedInfo => ({
  type: TOGGLE_BORROWED,
  payload: itemBorrowedInfo
});

export default function(
  state = {
    dialoging: "BORROWED_ITEM_INFO"
  },
  action
) {
  switch (action.type) {
    case TOGGLE_BORROWED: {
      return {
        ...state,
        userLoading: action.payload
      };
    }
    default:
      return state;
  }
}
