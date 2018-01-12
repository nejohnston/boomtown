import React, { Component } from "react";

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

export default class HeaderBar extends Component {
  render() {
    return (
      <Toolbar
        style={{
          backgroundColor: "#fff"
        }}
      >
        <ToolbarGroup firstChild={true} />
        <ToolbarGroup>
          <img src={Logo} className="headerLogo" />
          <SelectField />
        </ToolbarGroup>
        <ToolbarGroup lastChild={false}>
          <FontIcon className="muidocs-icon-custom-sort" />
          <RaisedButton label="My Profile" primary={true} />
          <RaisedButton
            style={{
              backgroundColor: "#000"
            }}
            label="Logout"
            primary={true}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
