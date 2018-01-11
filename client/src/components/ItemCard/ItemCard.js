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
import "./styles.css";

const ItemCard = ({ item }) => (
  <div>
    <Card>
      <CardMedia>
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <CardTitle title={item.title} subtitle={item.tags[0]} />{" "}
      <CardHeader
        title={item.itemowner.fullname}
        subtitle={item.created.substring(0, 10)}
        avatar={item.imageurl}
      />
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

ItemCard.propTypes = {
  item: propTypes.array.isRequired
};

export default ItemCard;
