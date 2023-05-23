import React from "react";
import { Link } from "react-router-dom";

function MusicMatch() {
  return (
    <div class="page selected1">
      {/* LEFT SIDE */}
      {/* 1 */}
      <div class="user-group top-left">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Cesar</h2>
        </div>
      </div>
      {/* 3 */}
      <div class="user-group bottom-left">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Ellie</h2>
        </div>
      </div>

      {/* RIGHT SID */}
      {/* 2 */}
      <div class="user-group top-right">
        <div class="username right">
          <h2>Emmanuel</h2>
        </div>
        <img
          class="profile-img medium right immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
      </div>
      {/* 4 */}
      <div class="user-group bottom-right selected">
        <div class="username right">
          <h2>Bethle</h2>
        </div>
        <img
          class="profile-img medium right immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
      </div>

      <div class="timer">
        <h1>34</h1>
      </div>
    </div>
  );
}

export default MusicMatch;
