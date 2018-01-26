import React, { Component } from "react";

import { connect } from "react-redux";
import { getItemTags } from "../../redux/modules/items";

import Filter from "../FilterField/filterField";

import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import SvgIcon from "material-ui/SvgIcon";

import Logo from "../../images/boomtown-logo.svg";

import { Link, Route } from "react-router-dom";

import "./styles.css";

const HeaderButtons = () => (
  <div className="headerButtonWrapper">
    <RaisedButton
      className="headerButton"
      label="My Profile"
      primary={true}
      href="/profile/k721A4pRNggCx7b6ryEE8vx1VIi1"
    />
    <RaisedButton
      primary={true}
      className="headerButton"
      label="Logout"
      backgroundColor={"#000"}
    />
  </div>
);

const HeaderBar = ({ isLoading, itemTags, dispatch }) => {
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
          <Route
            exact
            path="/"
            render={() => (
              <Filter
                handleChange={(event, index, tags) => {
                  dispatch(getItemTags(tags));
                }}
                isLoading={isLoading}
                values={itemTags}
              />
            )}
          />
        </div>
      </div>
      <HeaderButtons />
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemTags: state.items.itemTags
});

export default connect(mapStateToProps)(HeaderBar);
