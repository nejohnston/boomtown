import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import SvgIcon from "material-ui/SvgIcon";

import Logo from "../../images/boomtown-logo.svg";

import "./styles.css";

const Buttons = props => {
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
        showMenuIconButton={false}
        className="headerBar"
        style={{
          backgroundColor: "#fff"
        }}
        iconClassNameLeft={"iconClassNameLeft"}
        // iconElementLeft={
        //   <div>
        //     <div className="titleWrapper">
        //       <a href="/">
        //         <img src={Logo} alt="Boomtown" className="headerLogo" />
        //       </a>
        //       <SelectField className="headerFilter" hintText="Filter by Tag" />
        //     </div>
        //   </div>
        // }
        // iconClassNameRight={"iconClassNameLeft"}
        // iconElementRight={
        //   <div className="headerButtonWrapper">
        //     <RaisedButton
        //       className="headerButton"
        //       label="My Profile"
        //       primary={true}
        //     />
        //     <RaisedButton
        //       className="headerButton"
        //       style={{
        //         backgroundColor: "#000"
        //       }}
        //       label="Logout"
        //       primary={true}
        //     />
        //   </div>
        // }
      >
        <div>
          <div className="titleWrapper">
            <a href="/">
              <img src={Logo} alt="Boomtown" className="headerLogo" />
            </a>
            <SelectField className="headerFilter" hintText="Filter by Tag" />
          </div>
        </div>
        <div className="headerButtonWrapper">
          <RaisedButton
            className="headerButton"
            label="My Profile"
            primary={true}
            href="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2"
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
