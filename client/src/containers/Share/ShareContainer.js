import React, { Component } from "react";
import Share from "./Share";
import "./styles.css";

import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

export default class ShareContainer extends Component {
  render() {
    return (
      <div className="shareContainer">
        <Share />
      </div>
    );
  }
}
