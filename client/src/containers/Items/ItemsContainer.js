import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItemsAndUsers } from "../../redux/modules/items";
import ItemCardList from "../../components/ItemCardList";

import "./styles.css";

class ItemsContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }
  render() {
    // if (this.props.isLoading) return <Loader />;
    return (
      <ItemCardList
        isLoading={this.props.isLoading}
        itemsData={this.props.itemsData}
        itemTags={this.props.itemTags}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemsData: state.items.itemsData,
  itemTags: state.items.itemTags,
  error: state.items.error
});
export default connect(mapStateToProps)(ItemsContainer);
