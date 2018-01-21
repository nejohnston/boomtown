import { React, Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />
];

const FilterField = () => {
  <SelectField>{items}</SelectField>;
};

export default FilterField;
