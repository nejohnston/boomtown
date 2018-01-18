import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchItemsAndUsers } from "../../redux/modules/items";
import Items from "./Items";

import "./styles.css";

class ItemsContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }
  render() {
    // if (this.props.isLoading) return <Loader />;
    return <Items itemsData={this.props.itemsData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemsData: state.items.itemsData,
  error: state.items.error
});

export default connect(mapStateToProps)(ItemsContainer);
