import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Profile from "./Profile";
import CircularProgress from "material-ui/CircularProgress";


import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

class ProfileContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    users: PropTypes.array
  };

  render() {
    const { loading, users } = this.props.data;
    return !loading ? <Profile users={users} /> :
    <div className="loadingWrapper">
      <CircularProgress color="white" />
    </div>;
  }
}
const fetchUsers = gql`
  query {
    users {
      id
      email
      fullname
      bio
    }
  }
`;

export default graphql(fetchUsers)(ProfileContainer);
