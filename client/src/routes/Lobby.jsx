import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import UserHook from "../api/user";

function Lobby() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  // Get user from Spotify
  const [user, fetchUser] = UserHook();
  useEffect(() => {
    fetchUser();
  }, []);

  const param_url = new URLSearchParams(window.location.search).get(
    "Parameters"
  );
  if (param_url) {
    console.log(JSON.parse(param_url));
    // TODO: send to server
    window.history.pushState({}, null, "/");
  }

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      <h1>Your Party</h1>
      <br />
      <br />
      <div className="user-group">
        <img
          className="profile-img medium left immovable navbar-element visible"
          src={user ? user.images.at(0).url : "/assets/images/error.png"}
          alt="spotify-logo"
        />
        <div className="username">
          <h2>{user ? user.display_name : "N/A"}</h2>
        </div>
      </div>
      <div className="user-group">
        <img
          className="profile-img medium left immovable navbar-element visible"
          src="/assets/images/error.png"
          alt="spotify-logo"
        />
        <div className="username">
          <h2>...</h2>
        </div>
      </div>
      <div className="user-group">
        <img
          className="profile-img medium left immovable navbar-element visible"
          src="/assets/images/error.png"
          alt="spotify-logo"
        />
        <div className="username">
          <h2>...</h2>
        </div>
      </div>
      <div className="user-group">
        <img
          className="profile-img medium left immovable navbar-element visible"
          src="/assets/images/error.png"
          alt="spotify-logo"
        />
        <div className="username">
          <h2>...</h2>
        </div>
      </div>
      {/* Buttons */}
      <div className="lobby-code top-right">
        <p>YOUR CODE</p>

        <Link to={`/`}>
          {/* TODO: make into copy/paste action */}
          <button className="button large white">
            <h3>IKQRQ</h3>
          </button>
        </Link>
      </div>

      {/* TODO: change button color based on lobby fullness */}
      <Link to={`musicmatch/`}>
        {/* TODO: make into submit button */}
        <button className="button large bottom-left primary">
          <h3>WAITING..</h3>
        </button>
      </Link>
      <Link to={`/`}>
        {/* TODO: make into submit button */}
        <button className="button large bottom-right secondary">
          <h3>LEAVE</h3>
        </button>
      </Link>
    </div>
  );
}

export default Lobby;
