import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Profile from "./Profile";
import CircularProgress from "material-ui/CircularProgress";

import "./styles.css";
import { fetchItemsAndUsers } from "../../redux/modules/profile";

const fetchUsers = gql`
  query singleUser($id: ID) {
    user(id: $id) {
      bio
      email
      fullname
      borroweditems {
        id
      }
      shareditems {
        id
        title
        imageurl
        description
        available
        created
        tags {
          title
        }
        borrower {
          id
          fullname
        }
        itemowner {
          id
          bio
          email
          fullname
        }
      }
    }
  }
`;

class ProfileContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    user: PropTypes.array
  };
  render() {
    const { loading, user } = this.props.data;
    console.log(user);
    return !loading ? (
      <Profile user={user} />
    ) : (
      <div className="loadingWrapper">
        <CircularProgress color="white" />
      </div>
    );
  }
}

export default graphql(fetchUsers, {
  options: props => ({
    variables: {
      id: props.match.params.userid
    }
  })
})(ProfileContainer);
