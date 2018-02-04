import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

import { firebaseAuth } from "../../config/firebase";

import { Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";

import placeholderImage from "../../images/item-placeholder.jpg";

import Gravatar from "react-gravatar";

import "./styles.css";

const ShareCard = ({ item, user }) => (
  <div className="shareCardWrapper">
    <Card>
      <CardMedia>
        <img src={placeholderImage} alt="placeholder image" />
      </CardMedia>
      <Link to={`/profile/${firebaseAuth.currentUser.uid}`}>
        <CardHeader
          subtitle="A few seconds ago" // {moment(item.created).fromNow()}
          avatar={
            <Gravatar email={firebaseAuth.currentUser.email} />
          }
        />
      </Link>
      <CardTitle
        title="Amazing Item Title" // {item.title}
        // subtitle={item.tags.map(i => i.title).join(", ")}
      />
      <CardText>Profound item description.</CardText>
      <CardActions />
    </Card>
  </div>
);

export default ShareCard;
