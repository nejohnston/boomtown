import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import gql from "graphql-tag";

import { fetchItemsAndUsers } from "../../redux/modules/items";
import ItemCardList from "../../components/ItemCardList";

import "./styles.css";

class ItemsContainer extends Component {
  propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
  };

  render() {
    const { loading, items } = this.props.data;
    return;
    <ItemCardList />;
  }
}

const fetchItems = gql`
  query {
    items {
      id
      title
      imageurl
      descriptoion
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
export default graphQL(fetchItems)(ItemsContainer);
