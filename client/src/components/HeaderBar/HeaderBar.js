import React, { Component } from "react";

import FilterField from "../FilterField/FilterField";

import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import SvgIcon from "material-ui/SvgIcon";

import Logo from "../../images/boomtown-logo.svg";

import "./styles.css";

export default class HeaderBar extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        className="headerBar"
        style={{
          backgroundColor: "#fff"
        }}
        iconClassNameLeft={"iconClassNameLeft"}
      >
        <div>
          <div className="titleWrapper">
            <a href="/">
              <img src={Logo} alt="Boomtown" className="headerLogo" />
            </a>
            <FilterField />
          </div>
        </div>
        <div className="headerButtonWrapper">
          <RaisedButton
            className="headerButton"
            label="My Profile"
            primary={true}
            href="/profile"
          />
          <RaisedButton
            className="headerButton"
            backgroundColor="black"
            label="Logout"
            primary={true}
          />
        </div>
      </AppBar>
    );
  }
}
