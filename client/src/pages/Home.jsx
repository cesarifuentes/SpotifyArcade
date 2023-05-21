import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

function Home() {
  return (
    <div class="page ">
      <div class="row">
        {/* Column 1 */}
        <div class="column">
          <div class="stack">
            {/* Logo */}
            <img
              class="logo-img immovable"
              src="/assets/images/spotify-match.png"
              alt="profile-pic"
            />
            <br />
            {/* Buttons */}
            <Link to={`create/`}>
              <button class="button medium green">
                <h5>Create Party</h5>
              </button>
            </Link>
            <br />
            <br />
            <Link to={`join/`}>
              <button class="button medium white">
                <h5>Join Party</h5>
              </button>
            </Link>
          </div>
        </div>
        {/* Line Divider */}
        <div class="divider"></div>
        {/* Column 2 */}
        <div class="column">
          <div class="stack">
            <img
              class="profile-img selector"
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
              value="Cesar"
            />
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <Link class="invisible" to={`Login/`}>
        <button class="button small white logout">
          <h5>Log Out</h5>
        </button>
      </Link>

      {/* Help Button */}
      <Link class="invisible" to={`tutorial/`}>
        <button type="button">
          <IonIcon class="info-icon" icon={informationCircle}></IonIcon>
        </button>
      </Link>
    </div>
  );
}

export default Home;
