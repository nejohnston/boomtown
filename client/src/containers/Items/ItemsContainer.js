import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import CircularProgress from "material-ui/CircularProgress";

import ItemCardList from "../../components/ItemCardList";

import "./styles.css";

class ItemsContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };

  render() {
    const { loading, items } = this.props.data;
    console.log(items);
    return !loading ? (
      <ItemCardList items={items} />
    ) : (
      <div className="loadingWrapper">
        <CircularProgress color="white" />
      </div>
    );
  }
}

const fetchItems = gql`
  query {
    items {
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

// FetchItems??
export default graphql(fetchItems)(ItemsContainer);
