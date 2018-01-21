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
  <div className="profileCardWrapper">
    <Card>
      <CardHeader
        title={item.itemowner.fullname}
        avatar={
          <Gravatar
            className="gravatarAvatar"
            email={item.itemowner.email}
            size={180}
          />
        }
      />
    </Card>
  </div>
);

export default ProfileCard;
