import React from "react";

// COMPONTENTS
import Navbar from "../components/Navbar/Navbar";

// BACKEND
import { useState, useEffect } from "react";
import UserHook from "../api/user";

// OTHER
import { IonIcon } from "@ionic/react";
import { person, people } from "ionicons/icons";
import Button from "../components/Button/Button";

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

  return (
    <div className="page">
      {/* <p>{data}</p> */}

      <ul className="flex-container-main horiz-center">
        {/* <li className="flex-item-main side">
          <p style={{ textAlign: "center", width: "400px" }}>Coming soon...</p>
        </li> */}

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
          <Button to={`create/`} text="CREATE PARTY" class="small primary" />
          {/* JOIN BUTTON */}
          <Button to={`join/`} text="JOIN PARTY" class="small secondary" />
          {/* PLAYERS */}
          <div className="player-count bottom-right">
            <IonIcon icon={4 > 2 ? people : person}></IonIcon>
            <span>&nbsp;4</span>
          </div>
          {/* END */}
        </li>
      </ul>

      {/* NAVBAR */}
      <Navbar user={user}></Navbar>
    </div>
  );
}

export default Home;
