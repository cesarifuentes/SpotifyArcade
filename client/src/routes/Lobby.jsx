import React from "react";
import { Link } from "react-router-dom";

function Lobby() {
  return (
    <div class="page">
      <h1>Your Party</h1>
      <br />
      <br />
      <div class="user-group">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Cesar</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Emmanuel</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Ellie</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium left immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>...</h2>
        </div>
      </div>
      {/* Buttons */}
      <div class="lobby-code top-right">
        <p>YOUR CODE</p>

        <Link to={`/`}>
          {/* TODO: make into copy/paste action */}
          <button class="button large white">
            <h3>IKQRQ</h3>
          </button>
        </Link>
      </div>

      {/* TODO: change button color based on lobby fullness */}
      <Link to={`musicmatch/`}>
        {/* TODO: make into submit button */}
        <button class="button large bottom-left primary">
          <h3>WAITING..</h3>
        </button>
      </Link>
      <Link to={`/home`}>
        {/* TODO: make into submit button */}
        <button class="button large bottom-right secondary">
          <h3>LEAVE</h3>
        </button>
      </Link>
    </div>
  );
}

export default Lobby;
