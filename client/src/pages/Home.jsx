import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="row">
      <div class="column left">
        <div class="center">
          <img
            class="logo selector"
            src="/assets/images/spotify-match.png"
            alt="profile-pic"
          />
          <br />
          <br />
          <Link to={`start/`}>
            <button class="button green">
              <h5>Start Party</h5>
            </button>
          </Link>
          <br />
          <Link to={`join/`}>
            <button class="button white">
              <h5>Join Party</h5>
            </button>
          </Link>
        </div>
      </div>
      <div class="column right">
        <div class="center">
          <img
            class="profile-pic selector"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
          <br />
          <br />

          <input
            class="textbox"
            type="text"
            id="username"
            name="username"
            maxlength="10"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
