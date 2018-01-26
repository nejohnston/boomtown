import React, { Component } from "react";
import propTypes from "prop-types";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import moment from "moment";
import Gravatar from "react-gravatar";

import "./styles.css";

const ItemCard = ({ item, user }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <Link to={"/profile/" + item.itemowner.id}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment(item.created).fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />
      </Link>
      <CardTitle
        title={item.title}
        // subtitle={item.tags.map(i => i.title).join(" ")}
      />{" "}
      <CardText>{item.description}</CardText>
    </Card>
  </div>
);
// ItemCard.propTypes = {
//   item: propTypes.array.isRequired
// };

export default ItemCard;
