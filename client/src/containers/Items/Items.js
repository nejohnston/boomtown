import React, { Component } from "react";
import propTypes from "prop-types";

import Masonry from "react-masonry-component";

import ItemCard from "../../components/ItemCard/ItemCard";
import ItemsContainer from "./ItemsContainer";

import Gravatar from "react-gravatar";

import "./styles.css";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const Items = ({ itemsData }) => (
  <Masonry options={masonryOptions} className={"itemsWrapper"}>
    {itemsData.length &&
      itemsData.map(item => <ItemCard key={item.id} item={item} />)}
  </Masonry>
);

Items.propTypes = {
  itemsData: propTypes.array.isRequired
};

export default Items;
