import React, { Component } from "react";

import Items from "./Items";
import ItemCard from "../../components/ItemCard/ItemCard";

import "./styles.css";

const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
export default class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    const items = fetch(ITEMS_URL).then(r => r.json());
    const users = fetch(USERS_URL).then(r => r.json());

    Promise.all([items, users]).then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        // for every item add a user property and set it to user
        item.itemOwner = usersList.find(user => user.id === item.itemOwner);
        // item.itemowner = { fullname, email };
        return item;
      });
      this.setState({ items: combined });
      // TODO: Merge the 2 lists together, into a single list.
      // Attach the new list to this component's state,
      // and pass that list into the Items commponent
      // The Items component should render the new list
    });
  }
  render() {
    return (
        <Items list={this.state.items} />
    );
  }
}
