const UPDATE_MODAL_STATE = "UPDATE_MODAL_STATE";
const TOGGLED_ITEM = "TOGGLE_ITEM";

export const updateModalState = modalOpen => ({
  type: TOGGLED_ITEM,
  payload: modalOpen
});

// export const toggleItemBeingBorrowed = itemBorrowedInfo => ({
//   type: TOGGLE_BORROWED,
//   payload: itemBorrowedInfo
// });

export default function(
  state = {
    // dialoging: "BORROWED_ITEM_INFO"
    modalOpen: false
  },
  action
) {
  switch (action.type) {
    case TOGGLED_ITEM: {
      return {
        ...state,
        modalOpen: action.payload
        // ...state,
        // itemBorrowedInfo: action.payload
      };
    }
    default:
      return state;
  }
}
