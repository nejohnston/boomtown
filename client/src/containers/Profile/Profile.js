import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import Items from "../Items/Items";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ list }) => {
  return (
    <div className="profile">
      <Items list={list} />
    </div>
  );
};

export default Profile;
