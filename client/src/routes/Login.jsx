import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

import { loginUrl } from "../helper/loginUrl";

function Login() {
  return (
    <div className="page">
      {/* Login Container */}
      <div className="logo-box">
        {/* Logo */}
        <img
          className="logo-img immovable"
          src="/assets/images/Spotify_Logo_RGB_Green.png"
          alt="spotify-logo"
        />
        <br />
        <h3>GAME ROOM</h3>
        <br />
        <br />
        {/* Login Button */}
        <Link to={loginUrl}>
          <button className="button medium primary">
            <p>LOG IN</p>
          </button>
          <br />
          {/* <p>{JSON.stringify(data, null, 4)}</p> */}
        </Link>
      </div>

      {/* Help Button */}
      <Link className="invisible" to={`/tutorial`}>
        <button type="button">
          <IonIcon className="info-icon" icon={informationCircle}></IonIcon>
        </button>
      </Link>
    </div>
  );
}

export default Login;
