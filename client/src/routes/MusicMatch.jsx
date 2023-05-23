import React from "react";
import { Link } from "react-router-dom";

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

    // alert(n);
    // document.getElementById("potatonum").value =
    // element.classList.toggle("selected");
  }

  return (
    <div class="page">
      {/* TIMER */}
      <h1 class="timer">34</h1>
      {/* LEFT SIDE */}
      {/* 1 */}
      {/* <div class="btn">Click Me 1</div> */}
      {/* <input type="checkbox"></input> */}
      <div class="user-group top-left" onClick={() => click("1")} id="1">
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
      <div class="user-group bottom-left" onClick={() => click("3")} id="3">
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
      <div class="user-group top-right" onClick={() => click("2")} id="2">
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
      <div class="user-group bottom-right" onClick={() => click("4")} id="4">
        <div class="username right">
          <h2>Bethle</h2>
        </div>
        <img
          class="profile-img medium right immovable navbar-element visible"
          src="/assets/images/profile.jpg"
          alt="spotify-logo"
        />
      </div>
      {/* COVER ART */}
      <div class="invisible">
        <img
          class="album centering immovable"
          src="/assets/images/angel.png"
          alt="spotify-logo"
        />
      </div>
      {/* LYRICS */}
      <div class="invisible">
        <h3 class="centering ">
          How can I lose if I'm already chose? Like
          <br />
          If she feelin' hot, then I make that bitch froze
        </h3>
      </div>
      {/* ARTIST */}
      <div class="invisible">
        <img
          class="banner centering immovable"
          src="/assets/images/angel.png"
          alt="spotify-logo"
        />
        <h1 class="centering ">Amaarae </h1>
      </div>
      {/* PLAYLIST NAME */}
      <div class="invisible">
        <h1 class="centering">The Flowers </h1>
      </div>
      {/* SAMPLE */}
      <div class="invisible">
        <audio controls class="centering">
          {/* <source src="horse.ogg" type="audio/ogg"> */}
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* TODO: add crowns (bronze, silver, gold) to whoever answers the quickest */}

      <div class="instructions">
        <h4>Category is</h4>
        <br />
        <h2>Album Title</h2>
      </div>

      {/* <h4 class="instructions">Which players has this in their library?</h4> */}
    </div>
  );
}

export default MusicMatch;
