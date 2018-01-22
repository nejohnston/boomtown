import React, { Component } from "react";

import Items from "../../containers/Items";
import ItemsContainer from "../../containers/Items";
import ItemCard from "../ItemCard";
import PropTypes from "prop-types";

import Masonry from "react-masonry-component";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import "./styles.css";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const ItemCardList = ({ itemsData, itemTags }) => (
  <div className="itemsWrapper">
    <Masonry options={masonryOptions}>
      {itemTags && itemTags.length
        ? itemsData
            .filter(item => item.tags.some(tag => itemTags.includes(tag)))
            .map(item => <ItemCard key={item.id} item={item} />)
        : itemsData.map(item => (
            // <div key={item.id} className="card-wrapper">
            <ItemCard key={item.id} item={item} />
            // </div>
          ))}
    </Masonry>
    <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default ItemCardList;
