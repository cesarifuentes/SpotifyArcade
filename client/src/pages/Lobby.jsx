import React from "react";
import { Link } from "react-router-dom";

function Lobby() {
  return (
    <div class="page">
      <div class="title">Your Party</div>
      <br />
      <br />
      <div class="user-group">
        <img
          class="profile-img medium immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Cesar</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Emmanuel</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
        <div class="username">
          <h2>Ellie</h2>
        </div>
      </div>
      <div class="user-group">
        <img
          class="profile-img medium immovable navbar-element visible"
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
            <h5>IKQRQ</h5>
          </button>
        </Link>
      </div>

      <Link to={`/`}>
        {/* TODO: make into submit button */}
        <button class="button large bottom-left green">
          <h5>Waiting...</h5>
        </button>
      </Link>
      <Link to={`/`}>
        {/* TODO: make into submit button */}
        <button class="button large bottom-right red">
          <h5>Leave</h5>
        </button>
      </Link>
    </div>
  );
}

export default Lobby;
