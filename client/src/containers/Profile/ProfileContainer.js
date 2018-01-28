import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "./Profile";

import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  render() {
    return (
      <Profile
        itemsData={this.props.itemsData}
        userId={this.props.match.params.userid}
        isLoading={this.props.isLoading}
      />
    );
  }
}

export default connect(mapStateToProps)(ProfileContainer);
