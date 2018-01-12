import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import RaisedButton from "material-ui/RaisedButton";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import SelectField from "material-ui/SelectField";

import Logo from "../../images/boomtown-logo.svg";

import "./styles.css";

const boomtownLogo = () => {};

export default class HeaderBar extends Component {
  render() {
    return (
      <AppBar
        className="headerBar"
        style={{
          backgroundColor: "#fff"
        }}
        // iconElementLeft={{ boomtownLogo }}
      >
        <a href="/">
          <img src={Logo} href={"/"} className="headerLogo" />
        </a>
        <SelectField floatingLabelText="Filter by Tag" />
        <RaisedButton label="My Profile" primary={true} />
        <RaisedButton
          style={{
            backgroundColor: "#000"
          }}
          label="Logout"
          primary={true}
        />
      </AppBar>
    );
  }
}
