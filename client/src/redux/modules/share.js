const SHARE_UPDATE_TITLE = "SHARE_UPDATE_TITLE";
const SHARE_UPDATE_DESCRIPTION = "SHARE_UPDATE_DESCRIPTION";
const SHARE_UPDATE_IMAGE = "SHARE_UPDATE_IMAGE";
const SHARE_RESET_CARD_FIELDS = "SHARE_RESET_CARD_FIELDS";
const SHARE_TOGGLE_IMAGE_SELECTED =
  "SHARE_TOGGLE_IMAGE_SELECTED";

const DEFAULT_DESCRIPTION_TEXT = "Profound Item Description";
const DEFAULT_TITLE_TEXT = "Amazing Item";
const DEFAULT_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/boomtown-1622f.appspot.com/o/item-placeholder.jpg?alt=media&token=c5540f37-a6aa-4a7c-beb9-cdaa4f749e34";

export const shareUpdateImage = imageUrl => ({
  type: "SHARE_UPDATE_IMAGE",
  payload: imageUrl
});

export const shareUpdateTitle = titleUpdate => ({
  type: "SHARE_UPDATE_TITLE",
  action: titleUpdate
});

export const shareUpdateDescription = descriptionUpdate => ({
  type: "SHARE_UPDATE_DESCRIPTION",
  action: descriptionUpdate
});

export const resetShareCardFields = cardFieldReset => ({
  type: "SHARE_RESET_CARD_FIELDS",
  payload: cardFieldReset
});

export const toggleImageSelected = toggled => ({
  type: "SHARE_TOGGLE_IMAGE_SELECTED",
  payload: toggled
});

export default function(
  state = {
    titleUpdate: DEFAULT_TITLE_TEXT,
    descriptionUpdate: DEFAULT_DESCRIPTION_TEXT,
    imageUrl: DEFAULT_IMAGE,
    toggled: true
  },
  action
) {
  switch (action.type) {
    case SHARE_UPDATE_IMAGE: {
      return {
        ...state,
        imageUrl: DEFAULT_IMAGE
      };
    }
    case SHARE_UPDATE_TITLE: {
      return {
        ...state,
        titleUpdate: action.payload
          ? action.payload
          : DEFAULT_TITLE_TEXT
      };
    }
    case SHARE_UPDATE_DESCRIPTION: {
      return {
        ...state,
        descriptionUpdate: action.payload
          ? action.payload
          : DEFAULT_DESCRIPTION_TEXT
      };
    }
    case SHARE_TOGGLE_IMAGE_SELECTED: {
      return { ...state, imageSelected: action.payload };
    }
    default:
      return state;
  }
}
