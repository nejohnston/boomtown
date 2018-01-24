import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import ItemCardList from "../../components/ItemCardList";
import Items from "../Items/Items";
import ItemsContainer from "../Items/ItemsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileCard from "./ProfileCard";
import CircularProgress from "material-ui/CircularProgress";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const Profile = ({ itemsData, userId, isLoading, item }) => {
  const itemsUser = itemsData.find(item => userId === item.itemowner.id);
  return !isLoading && itemsUser ? (
    <div className="profile">
      <ProfileCard item={itemsUser} key={itemsData.id} />
      {/* {itemsData &&
          itemsData.find(item => <ProfileCard key={item.id} item={item} />)} */}
      <div>
        <ItemCardList itemsData={itemsData} />
      </div>
    </div>
  ) : (
    <div className="loading-wrapper">
      <CircularProgress color="white" />
    </div>
  );
};

export default Profile;
