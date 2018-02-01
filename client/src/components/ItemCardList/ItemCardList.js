import React, { Component } from "react";

import Items from "../../containers/Items";
import ItemsContainer from "../../containers/Items";
import ItemCard from "../ItemCard";
import PropTypes from "prop-types";

import Masonry from "react-masonry-component";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { Link } from "react-router-dom";

import "./styles.css";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const ItemCardList = ({ items, itemTags }) => (
  <div className="itemsWrapper">
    <Masonry options={masonryOptions}>
      {itemTags && itemTags.length
        ? items
            .filter(item =>
              item.tags.some(tag => itemTags.includes(tag.id))
            )
            .map(item => <ItemCard key={item.id} item={item} />)
        : items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
    </Masonry>
    {/* <Link exact path="/share"> */}
    <FloatingActionButton
      backgroundColor="#000"
      className="contentAddButton"
    >
      <ContentAdd />
    </FloatingActionButton>
    {/* </Link> */}
  </div>
);

export default ItemCardList;
