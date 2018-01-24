import React, { Component } from "react";

import { connect } from "react-redux";
import store from "../../redux/store";

import Paper from "material-ui/Paper";

import Gravatar from "react-gravatar";

import "../Profile/styles.css";

const ProfileCard = ({ item, borrowed }) => (
  <Paper
    style={{
      margin: "2rem auto",
      maxWidth: "800px"
    }}
  >
    <header className="profileHeader">
      <div className="profileName">
        <h2>{item.itemowner.fullname} </h2>
        <p>{item.itemowner.bio}</p>
      </div>
      {/* <p>{this.props.borrowed}</p> */}
      <div className="profileMeta">
        <Gravatar
          className="gravatarAvatar"
          email={item.itemowner.email}
          size={180}
        />
      </div>
    </header>
  </Paper>
);

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemsData: state.items.itemsData,
  itemTags: state.items.itemTags,
  error: state.items.error
});

export default connect(mapStateToProps)(ProfileCard);
