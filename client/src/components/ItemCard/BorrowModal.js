import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
const BorrowModal = () => (
  <div>
    <Dialog title="Dialog With Actions" open modal={true}>
      Only actions can close this dialog.
    </Dialog>
  </div>
);

export default BorrowModal;
