import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div class="page">
      <div class="title">My Profile</div>
      <br />

      {/* TODO: add image swap */}
      {/* TODO: add username swap */}
      {/* TODO: add new container */}

      <div class="selected1">
        <img
          class="profile-img large immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="title">Cesar</div>
      </div>

      <br />
      <br />

      <h2>My Wins</h2>
      <br />

      <h2>My Progress</h2>
      <br />
      <ul class="flex-container-profile">
        <li class="flex-item-profile selected3">Game 1</li>
        <li class="flex-item-profile selected3">Game 2</li>
        <li class="flex-item-profile selected3">Game 3</li>
      </ul>

      <div class="navbar">
        {/* Profile Picture */}
        <Link class="invisible" to={`profile/`}>
          <img
            class="profile-img small immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
        </Link>
      </div>

      {/* Return Button */}
      <Link to={`/home`}>
        <button class="button large bottom-right secondary">
          <h3>HOME</h3>
        </button>
      </Link>

      {/*  */}
    </div>
  );
}

export default Profile;
