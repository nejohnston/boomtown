import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import store from "../../redux/store";

import CircularProgress from "material-ui/CircularProgress";

import ItemCardList from "../../components/ItemCardList";

import "./styles.css";

class ItemsContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
    itemTags: PropTypes.array
  };
  render() {
    const { loading, items } = this.props.data;
    console.log(items);
    return !loading ? (
      <ItemCardList
        items={items}
        itemTags={this.props.itemTags}
      />
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
        fullname
        bio
        email
      }
    }
  }
`;

const mapStateToProps = state => ({
  itemTags: state.items.itemTags
});
// FetchItems??
export default graphql(fetchItems)(
  connect(mapStateToProps)(ItemsContainer)
);
