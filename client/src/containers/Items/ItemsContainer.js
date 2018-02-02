import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import store from "../../redux/store";

import CircularProgress from "material-ui/CircularProgress";

import ItemCardList from "../../components/ItemCardList";
import BorrowModal from "../../components/ItemCard/BorrowModal";
// import updateModalState from "../../redux/modules/";

import "./styles.css";
import { updateModalState } from "../../redux/modules/borrowed";

class ItemsContainer extends Component {
  PropTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array,
    itemTags: PropTypes.array
  };
  render() {
    const { loading, items } = this.props.data;
    return loading ? (
      <div className="loadingWrapper">
        <CircularProgress color="white" />
      </div>
    ) : (
      <div className="itemsWrapper">
        {this.props.modalOpen && <BorrowModal />}
        <ItemCardList
          items={items}
          itemTags={this.props.itemTags}
        />
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
  itemTags: state.items.itemTags,
  modalOpen: state.borrowed.modalOpen
});
// FetchItems??
export default compose(
  graphql(fetchItems),
  connect(mapStateToProps)
)(ItemsContainer);
