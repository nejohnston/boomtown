import React, { Component } from "react";

import { connect } from "react-redux";
import store from "../../redux/store";

import Paper from "material-ui/Paper";

import Gravatar from "react-gravatar";

import "../Profile/styles.css";

const ProfileCard = ({ user }) => (
  <Paper
    style={{
      margin: "2rem auto",
      maxWidth: "800px"
    }}
  >
    <header className="profileHeader">
      <div className="profileName">
        <h2>{user.fullname} </h2>
        <p>{user.bio}</p>
      </div>
      <p>{user.shareditems.length}</p>
      <p>{user.borroweditems.length}</p>
      <div className="profileMeta">
        <Gravatar
          className="gravatarAvatar"
          email={user.email}
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
