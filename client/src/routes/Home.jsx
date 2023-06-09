import React from "react";

// COMPONTENTS
import Navbar from "../components/Navbar/Navbar";
import Game from "../components/Game/Game";

// BACKEND
import { useState, useEffect } from "react";
import UserHook from "../api/user";

// OTHER

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
      <ul className="flex-container-main horiz-center">
        {/* MUSIC MATCH */}
        <Game
          logo="/assets/images/musicmatch-logos/2.png"
          desc="Compete with your friends to see who knows each others music taste the
          best."
          link1="create/"
          link2="join/"
          players={4}
        ></Game>
        {/* PIXEL TUNE */}
        <Game
          logo="/assets/images/error.png"
          desc="Decipher blurry music artwork."
          // link1="create/"
          // link2="join/"
          players={1}
        ></Game>
      </ul>

      {/* NAVBAR */}
      <Navbar user={user}></Navbar>
    </div>
  );
}

export default Home;
