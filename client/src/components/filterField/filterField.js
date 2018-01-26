import React, { Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import store from "../../redux/store";

import "./styles.css";

const tags = [
  "Electronics",
  "Household Items",
  "Musical Instruments",
  "Physical Media",
  "Recreational Equipment",
  "Sporting Goods",
  "Tools"
];

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
    className="selectFieldWrapper"
    hintText="Filter by Tag"
    autoWidth={true}
  >
    {menuItems(values)}
  </SelectField>
);

export default Filter;
