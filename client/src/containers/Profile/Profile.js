import React, { Component } from "react";

import ItemCard from "../../components/ItemCard";
import ItemCardList from "../../components/ItemCardList";
import Items from "../Items/Items";
import ItemsContainer from "../Items/ItemsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileCard from "./ProfileCard";

import Masonry from "react-masonry-component";

import Paper from "material-ui/Paper";

import "../Profile/styles.css";

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 2000
};

const Profile = ({ item, user }) => {
  return (
    <div className="profile">
      <ProfileCard user={user} />
      <div>
        <Masonry options={masonryOptions}>
          {user.shareditems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Profile;
