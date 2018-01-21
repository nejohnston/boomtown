import React, { Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const items = [
  <MenuItem key={1} value={1} primaryText="Electronics" />,
  <MenuItem key={2} value={2} primaryText="Household Items" />,
  <MenuItem key={3} value={3} primaryText="Musical Instruments" />,
  <MenuItem key={4} value={4} primaryText="Physical Media" />,
  <MenuItem key={5} value={5} primaryText="Recreational Equipment" />,
  <MenuItem key={6} value={6} primaryText="Sporting Goods" />,
  <MenuItem key={7} value={7} primaryText="Tools" />
];

const FilterField = () => <SelectField>{items}</SelectField>;

export default FilterField;
