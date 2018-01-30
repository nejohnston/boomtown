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

const ItemCard = ({ items, user }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia>
        <img src={items.imageurl} alt="image" />
      </CardMedia>
      <Link to={"/profile/" + items.itemowner.id}>
        <CardHeader
          title={items.itemowner.fullname}
          subtitle={moment(items.created).fromNow()}
          avatar={<Gravatar email={items.itemowner.email} />}
        />
      </Link>
      <CardTitle
        title={items.title}
        // subtitle={item.tags.map(i => i.title).join(" ")}
      />{" "}
      <CardText>{items.description}</CardText>
    </Card>
  </div>
);
// ItemCard.propTypes = {
//   item: propTypes.array.isRequired
// };

export default ItemCard;
