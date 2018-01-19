import React, { Component } from "react";

import Items from "../../containers/Items";
import ItemsContainer from "../../containers/Items";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const ItemCardList = () => {
  return (
    <div>
      <div>
        <ItemsContainer />
      </div>
      <div>
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

export default ItemCardList;
