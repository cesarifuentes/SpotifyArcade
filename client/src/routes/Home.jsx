import React from "react";
import { Link } from "react-router-dom";
import showDropdrown from "../helper/navDropdown";

import { IonIcon } from "@ionic/react";
import { person, people } from "ionicons/icons";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import UserHook from "../api/user";

// import fetchToken from "../components/fetchToken";

function logout() {
  console.log("button clicked");
  window.localStorage.clear();
  window.location = "/";
}

function Home() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  // Get user from Spotify
  const [user, fetchUser] = UserHook();
  useEffect(() => {
    fetchUser();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  // if (!accessToken) {
  //   return (
  //     <div className="page">
  //       <Button></Button>
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div className="page">
      {/* <p>{data}</p> */}

      <ul className="flex-container-main horiz-center">
        <li className="flex-item-main side">
          {/* DESCRIPTION */}
          <p style={{ textAlign: "center", width: "400px" }}>Coming soon...</p>
          {/* END */}
        </li>

        <li className="flex-item-main side">
          {/* DESCRIPTION */}
          <p style={{ textAlign: "center", width: "400px" }}>Coming soon...</p>
          {/* END */}
        </li>

        <li className="flex-item-main">
          {/* LOGO */}
          <img
            className="game-logo immovable"
            src="/assets/images/musicmatch-logos/2.png"
            alt="musicmatch-logo"
          />
          {/* DESCRIPTION */}
          <p style={{ textAlign: "center", width: "400px" }}>
            Compete with your friends to see who knows each others music taste
            the best.
          </p>
          <br />
          {/* CREATE BUTTON */}
          <Link to={`create/`}>
            <button className="button small primary">
              <p>CREATE PARTY</p>
            </button>
          </Link>
          <br />
          {/* JOIN BUTTON */}
          <Link to={`join/`}>
            <button className="button small secondary">
              <p>JOIN PARTY</p>
            </button>
          </Link>
          {/* PLAYERS */}
          <div className="player-count bottom-right">
            <IonIcon icon={4 > 2 ? people : person}></IonIcon>
            <span>&nbsp;4</span>
          </div>
          {/* END */}
        </li>
        <li className="flex-item-main side">
          {/* DESCRIPTION */}
          <p style={{ textAlign: "center", width: "400px" }}>Coming soon...</p>
          {/* END */}
        </li>

        <li className="flex-item-main side">
          {/* DESCRIPTION */}
          <p style={{ textAlign: "center", width: "400px" }}>Coming soon...</p>
          {/* END */}
        </li>
      </ul>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="dropdown">
          {/* IMAGE */}
          <img
            className="profile-img small dropbtn"
            onClick={showDropdrown}
            src={user ? user.images.at(0).url : "/assets/images/error.png"}
            alt="user-img"
          />
          {/* MENU */}
          <div id="myDropdown" className="dropdown-content">
            <Link to={`profile/`}>
              <div className="navigator">Settings</div>
            </Link>
            <Link
              onClick={() => {
                logout();
              }}
            >
              <div className="navigator top-separator">
                <p>Log Out</p>
              </div>
            </Link>
            {/* TODO: move to database on login */}
          </div>
          {/* END */}
        </div>
      </div>
    </div>
  );
}

export default Home;
