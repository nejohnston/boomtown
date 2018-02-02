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

import { Link } from "react-router-dom";

import moment from "moment";
import Gravatar from "react-gravatar";

import "./styles.css";
import { toggleItemBeingBorrowed } from "../../redux/modules/borrowed";

const BorrowedButton = dispatch => {
  <RaisedButton
    secondary={true}
    className="headerButton"
    label="Borrow"
    onChange={() => dispatch(toggleItemBeingBorrowed)}
  />;
};

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
        subtitle={item.tags.map(i => i.title).join(", ")}
      />{" "}
      <CardText>{item.description}</CardText>
      <CardActions />
    </Card>
  </div>
);
// ItemCard.PropTypes = {
//   item: PropTypes.array.isRequired
// };

export default connect(mapStateToProps)(ItemCard);
