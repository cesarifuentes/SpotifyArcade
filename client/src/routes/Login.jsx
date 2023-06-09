import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

import { loginUrl } from "../helper/loginUrl";

import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  // Get code from url (after logged in)
  const code_url = new URLSearchParams(window.location.search).get("code");
  if (code_url) {
    // If success then store & cut the code string from the URL
    localStorage.setItem("code", code_url);
    window.history.pushState({}, null, "/");
    // TODO: when left arrowed, the token stays in local storage
  }

  // Get token from Spotify
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const code = localStorage.getItem("code");
      try {
        const response = await axios.post("http://localhost:8000/login", {
          code,
        });
        setToken(response.data.token);
        localStorage.setItem("accessToken", response.data.accessToken);
        window.location.reload(false);
      } catch (error) {
        console.error("token error", error);
      }
    };

    fetchData();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      {/* Login Container */}
      <div className="logo-box">
        {/* Logo */}
        <img
          className="logo-img immovable"
          src="/assets/images/gameroom-logo.png"
          alt="spotify-logo"
        />
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
