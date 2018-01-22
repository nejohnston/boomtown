import React, { Component } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Paper from "material-ui/Paper";

import Gravatar from "react-gravatar";

import "../Profile/styles.css";

const ProfileCard = ({ item }) => (
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

export default ProfileCard;
