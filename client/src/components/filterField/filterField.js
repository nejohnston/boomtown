import React, { Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import store from "../../redux/store";

// const items = [
//   <MenuItem key={1} value={1} primaryText="Electronics" />,
//   <MenuItem key={2} value={2} primaryText="Household Items" />,
//   <MenuItem key={3} value={3} primaryText="Musical Instruments" />,
//   <MenuItem key={4} value={4} primaryText="Physical Media" />,
//   <MenuItem key={5} value={5} primaryText="Recreational Equipment" />,
//   <MenuItem key={6} value={6} primaryText="Sporting Goods" />,
//   <MenuItem key={7} value={7} primaryText="Tools" />
// ];
//   <MenuItem key={1} value="Electronics" primaryText="Electronics" />,
//   <MenuItem key={2} value="Household Items" primaryText="Household Items" />,
//   <MenuItem
//     key={3}
//     value="Musical Instruments"
//     primaryText="Musical Instruments"
//   />,
// <MenuItem key={4} value="Physical Media" primaryText="Physical Media" />,
//   <MenuItem
//     key={5}
//     value={"Recreational Equipment"}
//     // primaryText="Recreational Equipment"
//   />,
//   <MenuItem key={6} value="Sporting Goods" primaryText="Sporting Goods" />,
//   <MenuItem key={7} value="Tools" primaryText="Tools" />
const tags = [
  "Electronics",
  "Household Items",
  "Musical Instruments",
  "Physical Media",
  "Recreational Equipment",
  "Sporting Goods",
  "Tools"
];

// const handleChange = tag => dispatch => this.props.dispatch(getItemTags(tag));

// const handleChange= {(event, index, tags)} => {
//                                    dispatch(getItemsFilters(tags));
//                                }}

const menuItems = values => {
  return tags.map(tag => (
    <MenuItem
      insetChildren
      key={tag}
      checked={values && values.indexOf(tag) > -1}
      value={tag}
      label={tag}
      primaryText={tag}
    />
  ));
  console.log(tags);
};

const Filter = ({ tags, handleChange, values }) => (
  <SelectField
    multiple
    value={values}
    onChange={handleChange}
    className="filter-select"
    hintText="Filter by Tag"
  >
    {menuItems(values)}
  </SelectField>
);

export default Filter;
