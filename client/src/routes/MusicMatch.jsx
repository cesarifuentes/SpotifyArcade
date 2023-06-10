import React from "react";
// import { Link } from "react-router-dom";
// import { IonIcon } from "@ionic/react";
// import { exit } from "ionicons/icons";

// COMPONTENTS
import UserCard from "../components/UserCard/UserCard";

// BACKEND
import { useEffect } from "react";
import UserHook from "../api/user";

function MusicMatch() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  // Get user from Spotify
  const [user, fetchUser] = UserHook();
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      {/* TIMER */}
      <h1 className="timer">34</h1>

      <UserCard user={user} id="1" position="top-left" align="left"></UserCard>
      <UserCard
        user={user}
        id="2"
        position="top-right"
        align="right"
      ></UserCard>
      <UserCard
        user={user}
        id="3"
        position="bottom-left"
        align="left"
      ></UserCard>
      <UserCard
        user={user}
        id="4"
        position="bottom-right"
        align="right"
      ></UserCard>

      {/* COVER ART */}
      <div className="invisible">
        <img
          className="album centering immovable"
          src="/assets/images/angel.png"
          alt="spotify-logo"
        />
      </div>
      {/* LYRICS */}
      <div className="invisible">
        <h3 className="centering ">
          How can I lose if I'm already chose? Like
          <br />
          If she feelin' hot, then I make that bitch froze
        </h3>
      </div>
      {/* ARTIST */}
      <div className="invisible">
        <img
          className="banner centering immovable"
          src="/assets/images/angel.png"
          alt="spotify-logo"
        />
        <h1 className="centering ">Amaarae </h1>
      </div>
      {/* PLAYLIST NAME */}
      <div className="invisible">
        <h1 className="centering">The Flowers </h1>
      </div>
      {/* SAMPLE */}
      <div className="invisible">
        <audio controls className="centering">
          {/* <source src="horse.ogg" type="audio/ogg"> */}
          Your browser does not support the audio element.
        </audio>
      </div>
      {/* TODO: add crowns (bronze, silver, gold) to whoever answers the quickest */}
      <div className="instructions">
        <h4>Category is</h4>
        <br />
        <h2>Album Title</h2>
        {/* Exit Button */}
        {/* <Link className="invisible" to={`/`}>
          <button type="button">
            <IonIcon className="leave-icon" icon={exit}></IonIcon>
          </button>
        </Link> */}
      </div>
      {/* <h4 className="instructions">Which players has this in their library?</h4> */}
    </div>
  );
}

export default MusicMatch;
