const SHARE_UPDATE_TITLE = "SHARE_UPDATE_TITLE";
const SHARE_UPDATE_DESCRIPTION = "SHARE_UPDATE_DESCRIPTION";
const SHARE_UPDATE_IMAGE = "SHARE_UPDATE_IMAGE";
const RESET_FIELDS = "RESET_FIELDS";
const TOGGLE_IMAGE_SELECTED = "TOGGLE_IMAGE_SELECTED";

const DEFAULT_DESCRIPTION_TEXT = "Profound Item Description";
const DEFAULT_TITLE_TEXT = "Amazing Item";

export const shareUpdateTitle = titleUpdate => ({
  type: "SHARE_UPDATE_TITLE",
  action: titleUpdate
});
