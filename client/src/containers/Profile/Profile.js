import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import ItemCardList from "../../components/ItemCardList";
import Items from "../Items/Items";
import ItemsContainer from "../Items/ItemsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileCard from "./ProfileCard";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ itemsData, user }) => {
  console.log(itemsData);
  const profileUser = itemsData[0].itemowner;
  return (
    <div className="profile">
      <ProfileCard user={profileUser} />
    </div>
  );
};

export default Profile;
