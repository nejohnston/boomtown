import React, { Component } from "react";
import PropTypes from "prop-types";

import ItemCard from "../../components/ItemCard/ItemCard";
import ItemsContainer from "./ItemsContainer";

// export default class Items extends Component {
//   render() {
//     return <div> Items! </div>;
//   }
// }
const Items = ({ list }) => (
  <div>
    {list.length && list.map(item => <ItemCard key={item.id} item={item} />)}
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
