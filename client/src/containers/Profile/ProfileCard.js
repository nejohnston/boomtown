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

const ProfileCard = ({ user }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardHeader
        title={user.fullname}
        avatar={<Gravatar email={user.email} />}
      />
    </Card>
  </div>
);

export default ProfileCard;
