import React, { Component } from "react";
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
    <div>
      <ShareCard />
      <ShareStepper />
    </div>
  );
};

export default Share;
