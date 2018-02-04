import React, { Component } from "react";
import "./styles.css";

import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ShareStepper from "./ShareStepper";
import ShareCard from "./ShareCard";

const Share = () => {
  return (
    <div className="shareInnerWrapper">
      <div>
        <ShareCard />
      </div>
      <div>
        <ShareStepper />
      </div>
    </div>
  );
};

export default Share;
