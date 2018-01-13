import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";

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
      <AppBar
        className="headerBar"
        style={{
          backgroundColor: "#fff"
        }}
        iconElementLeft={
          <div>
            <a href="/">
              <img src={Logo} href={"/"} className="headerLogo" />
            </a>
            <SelectField floatingLabelText="Filter by Tag" />
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
        // iconElementRight={<Buttons />}
      />
    );
  }
}
