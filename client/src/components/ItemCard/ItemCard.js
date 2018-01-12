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

import moment from "moment";
import Gravatar from "react-gravatar";

import "./styles.css";

const ItemCard = ({ item, user }) => (
  <div className="itemCardWrapper">
    <Card>
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <CardHeader
        title={item.itemowner.fullname}
        subtitle={moment(item.created).fromNow()}
        avatar={<Gravatar email={item.itemowner.email} />}
      />
      <CardTitle title={item.title} subtitle={item.tags[0]} />{" "}
      <CardText>{item.description}</CardText>
      {/* <CardActions>
        <button className="borrow-button" label="Borrow">
          Borrow
        </button>
        <button className="borrow-button" label="rm -fr *">
          rm -fr *
        </button>
      </CardActions> */}
    </Card>
  </div>
);
// ItemCard.propTypes = {
//   item: propTypes.array.isRequired
// };

export default ItemCard;
