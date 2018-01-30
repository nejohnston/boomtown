import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import ItemCardList from "../../components/ItemCardList";
import Items from "../Items/Items";
import ItemsContainer from "../Items/ItemsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileCard from "./ProfileCard";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ itemsData, userId, isLoading, item, users }) => {
    <div className="profile">
      <ProfileCard user={users} key={users.id} />
      <div>
        <ItemCardList itemsData={itemsData} />
      </div>
    </div>
};

export default Profile;
