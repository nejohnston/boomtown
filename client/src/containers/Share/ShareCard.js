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

import { connect } from "react-redux";

import { firebaseAuth } from "../../config/firebase";

import { Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";

import Gravatar from "react-gravatar";
import moment from "moment";

import "./styles.css";

const ShareCard = ({
  updateTitle,
  updateDescription,
  imageUrl
}) => (
  <div className="shareCardWrapper">
    <Card>
      <CardMedia>
        <img src={imageUrl} alt="placeholder image" />
      </CardMedia>
      <Link to={`/profile/${firebaseAuth.currentUser.uid}`}>
        <CardHeader
          subtitle={moment().fromNow()}
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

const mapStateToProps = state => ({
  imageUrl: state.share.imageUrl,
  updateTitle: state.share.updateTitle,
  updateDescription: state.share.updateDescription
});

export default connect(mapStateToProps)(ShareCard);
