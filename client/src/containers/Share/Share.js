import React, { Component } from "react";
import "./styles.css";

import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ShareStepper from "./ShareStepper";
import ShareCard from "./ShareCard";

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareComponentLeft">
        <ShareCard />
      </div>
      <div className="shareComponentRight">
        <ShareStepper />
      </div>
    </div>
  );
};

export default Share;
