import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import Items from "../Items/Items";
import ProfileContainer from "./ProfileContainer";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ list, item, user }) => {
  return (
    <div className="profile">
      <Paper />
      <Items list={list} />
    </div>
  );
};

export default Profile;
