import React, { Component } from "react";

import Items from "../../containers/Items";
import ItemsContainer from "../../containers/Items";

import Masonry from "react-masonry-component";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const ItemCardList = ({ itemsData }) => {
  return (
    <div>
      <div>
        <Masonry options={masonryOptions} className={"itemsWrapper"}>
          {itemsData.length &&
            itemsData.map(item => <ItemCard key={item.id} item={item} />)}
        </Masonry>
      </div>
      <div>
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

Items.propTypes = {
  itemsData: propTypes.array.isRequired
};

export default ItemCardList;
