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

import RaisedButton from "material-ui/RaisedButton";

import placholderImage from "../../images/item-placeholder.jpg";

import Gravatar from "react-gravatar";

import "./styles.css";

const ShareCard = ({ item, user }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia>
        {/* <img src={item.imageurl} alt="image" /> */}
      </CardMedia>
      <CardHeader
      //   title={item.itemowner.fullname}
      //   subtitle={moment(item.created).fromNow()}
      //   avatar={<Gravatar email={item.itemowner.email}
      />
      <CardTitle
      // title={item.title}
      // subtitle={item.tags.map(i => i.title).join(", ")}
      />
      <CardText>"item.description"</CardText>
      <CardActions />
    </Card>
  </div>
);

export default ShareCard;
