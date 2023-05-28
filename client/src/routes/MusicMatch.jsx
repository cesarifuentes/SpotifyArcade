import React from "react";
// import { Link } from "react-router-dom";
// import { IonIcon } from "@ionic/react";
// import { exit } from "ionicons/icons";

function MusicMatch() {
  function click(n) {
    // turn off all user-group elements
    const group = document.getElementsByClassName("user-group");
    for (var i = 0; i < group.length; ++i) {
      var user = group[i];
      user.classList.remove("selected");
    }
    // turn on clicked user-group
    var curr_user = document.getElementById(n);
    curr_user.classList.add("selected");
  }

  return (
    <div className="page-gradient">
      <div className="page">
        {/* TIMER */}
        <h1 className="timer">34</h1>
        {/* LEFT SIDE */}
        {/* 1 */}
        {/* <div className="btn">Click Me 1</div> */}
        {/* <input type="checkbox"></input> */}
        <div className="user-group top-left" onClick={() => click("1")} id="1">
          <img
            className="profile-img medium left immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
          <div className="username">
            <h2>Cesar</h2>
          </div>
        </div>
        {/* 3 */}
        <div
          className="user-group bottom-left"
          onClick={() => click("3")}
          id="3"
        >
          <img
            className="profile-img medium left immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
          <div className="username">
            <h2>Ellie</h2>
          </div>
        </div>
        {/* RIGHT SID */}
        {/* 2 */}
        <div className="user-group top-right" onClick={() => click("2")} id="2">
          <div className="username right">
            <h2>Emmanuel</h2>
          </div>
          <img
            className="profile-img medium right immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
        </div>
        {/* 4 */}
        <div
          className="user-group bottom-right"
          onClick={() => click("4")}
          id="4"
        >
          <div className="username right">
            <h2>Bethle</h2>
          </div>
          <img
            className="profile-img medium right immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
        </div>
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
    </div>
  );
}

export default MusicMatch;
