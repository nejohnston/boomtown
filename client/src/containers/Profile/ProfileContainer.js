import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Profile from "./Profile";

import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers(this.props.match.params.userid));
    console.log(this.props.match.params.userid);
    //  const ProfileWithOwner = itemsData.map(item => {
    // const itemowner = usersList.filter(user => user.id === item.itemowner);
    // item.itemowner = itemowner[0];
    const itemowner = this.props.itemsData.find(user => {
      user.id === this.props.itemsData;
      return user;
    });
  }
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

const mapStateToProps = state => ({
  isLoading: state.profile.isLoading,
  itemsData: state.profile.itemsData,
  error: state.profile.error
});

export default connect(mapStateToProps)(ProfileContainer);
