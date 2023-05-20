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
          src="/assets/images/spotify-match.png"
          alt="spotify-logo"
        />
        {/* Login Button */}
        <Link to={`home/`}>
          <button class="button medium green">
            <h5>Connect Your Account</h5>
          </button>
        </Link>
      </div>

      {/* Help Button */}
      <Link class="hidden" to={`tutorial/`}>
        <button type="button">
          <IonIcon class="info-icon" icon={informationCircle}></IonIcon>
        </button>
      </Link>
    </div>
  );
}

export default Login;
