import React, { Component } from "react";
import PropTypes from "prop-types";

import Masonry from "react-masonry-component";

import ItemCard from "../../components/ItemCard/ItemCard";
import ItemsContainer from "./ItemsContainer";

import "./styles.css";
// export default class Items extends Component {
//   render() {
//     return <div> Items! </div>;
//   }
// }
const masonryOptions = {
  enableResizableChildren: true
};
const Items = ({ list }) => (
  <div className={"itemsWrapper"}>
    <Masonry>
      {list.length && list.map(item => <ItemCard key={item.id} item={item} />)}
    </Masonry>
  </div>
);
// export default ({ list }) => (
//   <div>
//     {list.length &&
//       list.map(item => {
//         return <ItemCard item={item.id} key={item.id} />;
//       })}
//   </div>
// );

// Items.PropTypes = {
//   list: PropTypes.array.isRequired
// };

export default Items;
