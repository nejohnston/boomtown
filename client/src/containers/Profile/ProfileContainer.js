import React, { Component } from "react";
import Profile from "./Profile";

import Items from "../Items";
import ItemCard from "../../components/ItemCard/ItemCard";

import "./styles.css";

const ITEMS_URL = "http://localhost:4000/items";
const USERS_URL = "http://localhost:4000/users";
export default class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      users: []
    };
  }
  componentDidMount() {
    const items = fetch(ITEMS_URL).then(r => r.json());
    const users = fetch(USERS_URL).then(r => r.json());

    Promise.all([items, users]).then(response => {
      const [itemsList, usersList] = response;

      const combined = itemsList.map(item => {
        // for every item add a user property and set it to user
        item.itemowner = usersList.find(user => user.id === item.itemowner);
        // item.itemowner = { ufullname, email };
        return item;
      });

      let items = combined.filter(item => {
        return item.itemowner.fullname === "Mandi Wise";
      });

      this.setState({ items: items });
    });
  }
  render() {
    return <Profile list={this.state.items} />;
  }
}
