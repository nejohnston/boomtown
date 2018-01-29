import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/CircularProgress";
import "./styles.css";
import ItemCardList from "../../components/ItemCardList";

const Items = ({ items }) => {
    <ItemCardList items={items} />
};

Items.propTypes = {
  items: PropTypes.array.isRequired
};
export default Items;
