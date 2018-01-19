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
  }
  render() {
    return <Profile itemsData={this.props.itemsData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemsData: state.items.itemsData,
  error: state.items.error
});

export default connect(mapStateToProps)(ProfileContainer);
