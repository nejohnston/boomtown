import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { updateModalState } from "../../redux/modules/borrowed";
const BorrowModal = ({ close, modalOpen }) => (
  <Dialog
    title="Borrow Item"
    actions={[
      <FlatButton
        label="Cancel"
        primary
        onClick={close(false)}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={close(false)}
      />
    ]}
    modal={false}
    open={modalOpen}
    onRequestClose={close(false)}
  >
    The actions in this window were passed in as an array of
    React objects.
  </Dialog>
);
const mapStateToProps = state => ({
  modalOpen: state.borrowed.modalOpen
});
const mapDispatchToProps = dispatch => ({
  close(modalOpen) {
    return () => {
      dispatch(updateModalState(modalOpen));
    };
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(
  BorrowModal
);
