import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

function Login() {
  return (
    <div class="page">
      {/* Login Container */}
      <div class="logo-box">
        {/* Logo */}
        <img
          class="logo-img immovable"
          src="/assets/images/Spotify_Logo_RGB_Green.png"
          alt="spotify-logo"
        />
        <br />
        <h3>GAME ROOM</h3>
        <br />
        <br />
        {/* Login Button */}
        <Link to={`/home`}>
          <button class="button medium primary">
            <p>LOG IN</p>
          </button>
        </Link>
      </div>

      {/* Help Button */}
      <Link class="invisible" to={`/tutorial`}>
        <button type="button">
          <IonIcon class="info-icon" icon={informationCircle}></IonIcon>
        </button>
      </Link>
    </div>
  );
}

export default Login;
