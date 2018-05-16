import React from "react";
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

import Gravatar from "react-gravatar";
import moment from "moment";

import "./styles.css";

const ShareCard = ({
  titleUpdate,
  descriptionUpdate,
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
      <CardTitle title={titleUpdate} subtitle="" />
      <CardText>{descriptionUpdate}</CardText>
      <CardActions />
    </Card>
  </div>
);

const mapStateToProps = state => ({
  imageUrl: state.share.imageUrl,
  titleUpdate: state.share.titleUpdate,
  descriptionUpdate: state.share.descriptionUpdate
});

export default connect(mapStateToProps)(ShareCard);
