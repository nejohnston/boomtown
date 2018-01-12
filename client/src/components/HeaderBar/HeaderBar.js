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

export default class HeaderBar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} />
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="My Profile" primary={true} />
          <RaisedButton label="Logout" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
