import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/CircularProgress";
import "./styles.css";
import ItemCardList from "../../components/ItemCardList";

const Items = ({ itemsData, isLoading }) => {
  return !isLoading ? (
    <ItemCardList items={itemsData} />
  ) : (
    <div className="loading-wrapper">
      <CircularProgress color="white" />
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired
};
export default Items;
