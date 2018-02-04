import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import ItemCardList from "../../components/ItemCardList";
import Items from "../Items/Items";
import ItemsContainer from "../Items/ItemsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileCard from "./ProfileCard";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ item, user }) => {
  return (
    <div className="profile">
      <ProfileCard user={user} />
      <div>
        <ItemCardList list={user.shareditems} />
      </div>
    </div>
  );
};

export default Profile;
