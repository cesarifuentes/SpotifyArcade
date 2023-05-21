import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

function Home() {
  return (
    <div class="page">
      <ul class="flex-container-main horiz-center">
        <li class="flex-item-main selected3">
          <img
            class="logo-img immovable"
            src="/assets/images/spotify-match.png"
            alt="profile-pic"
          />
          <br />
          <Link to={`create/`}>
            <button class="button medium green">
              <h5>Create Party</h5>
            </button>
          </Link>
          <br />
          <Link to={`join/`}>
            <button class="button medium white">
              <h5>Join Party</h5>
            </button>
          </Link>
        </li>
      </ul>

      <div class="navbar">
        {/* Profile Picture */}
        <Link class="invisible" to={`/profile`}>
          <img
            class="profile-img small immovable navbar-element visible"
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
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

export default Home;
