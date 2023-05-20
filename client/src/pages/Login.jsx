import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

function Login() {
  return (
    <div id="login" class="page">
      {/* <div>
        <Link to={`tutorial/`}>Tutorial</Link>
      </div> */}
      <IonIcon class="info-icon" icon={informationCircle}>
        <Link to={`tutorial/`}>Tutorial</Link>
      </IonIcon>

      <div class="center-abs">
        <img
          class="logo selector"
          src="/assets/images/spotify-match.png"
          alt="spotify-logo"
        />

        <br />
        <br />
        <Link to={`home/`}>
          <button class="button green">
            <h5>Connect Your Account</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
