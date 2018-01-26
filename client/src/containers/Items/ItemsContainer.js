import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { fetchItemsAndUsers } from "../../redux/modules/items";
import ItemCardList from "../../components/ItemCardList";

import "./styles.css";

class ItemsContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };

  render() {
    const { loading, items } = this.props.data;
    return loading ? <p>Loading...</p> : <ItemCardList itemsData={items} />;
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
        id
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
