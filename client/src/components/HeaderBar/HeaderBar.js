import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import SvgIcon from "material-ui/SvgIcon";

import Logo from "../../images/boomtown-logo.svg";

import "./styles.css";

const Buttons = () => {
  <div>
    <RaisedButton label="My Profile" primary={true} />
    <RaisedButton
      style={{
        backgroundColor: "#000"
      }}
      label="Logout"
      primary={true}
    />
  </div>;
};

export default class HeaderBar extends Component {
  render() {
    return (
      <div>
        <AppBar
          className="headerBar"
          style={{
            backgroundColor: "#fff"
          }}
          iconElementLeft={
            <div className="titleWrapper">
              <a href="/">
                <img src={Logo} alt="Boomtown" className="headerLogo" />
              </a>
              <SelectField
                className="headerFilter"
                floatingLabelText="Filter by Tag"
              />
            </div>
          }
          iconElementRight={
            <div className="headerButtonWrapper">
              <RaisedButton
                className="headerButton"
                label="My Profile"
                primary={true}
              />
              <RaisedButton
                className="headerButton"
                style={{
                  backgroundColor: "#000"
                }}
                label="Logout"
                primary={true}
              />
            </div>
          }
        />
      </div>
    );
  }
}
