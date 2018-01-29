import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "./Profile";

import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };

  render() {
    const { loading, users } = this.props.data;
    return loading ? <p>Loading...</p> : <Profile itemsData={items} />;
  }
}
// render() {
//   return (
//     <Profile
//       itemsData={this.props.itemsData}
//       userId={this.props.match.params.userid}
//       isLoading={this.props.isLoading}
//     />
//   )
// }

export default graphql(fetchItems)(ProfileContainer);
