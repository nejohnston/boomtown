import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Profile from "./Profile";

import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    users: PropTypes.array
  };

  render() {
    const { loading, users } = this.props.data;
    return loading ? <p>Loading...</p> : <Profile itemsData={users} />;
  }
}
const fetchUsers = gql`
  query {
    users {
      id
      title
      imageurl
      description
      available
      tags {
        title
      }
      borrower {
        id
      }
      itemowner {
        id
      }
    }
  }
`;
// render() {
//   return (
//     <Profile
//       itemsData={this.props.itemsData}
//       userId={this.props.match.params.userid}
//       isLoading={this.props.isLoading}
//     />
//   )
// }

export default graphql(fetchUsers)(ProfileContainer);
