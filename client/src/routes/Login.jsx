import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";

function CallAPI() {}

function Login() {
  CallAPI();

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
        {/* <Link to={`/home`}> */}
        <button className="button medium primary">
          <p>LOG IN</p>
        </button>
        <h1>{message}</h1>
        {/* </Link> */}
      </div>

      {/* Help Button */}
      <Link className="invisible" to={`/tutorial`}>
        <button type="button">
          {/*  onClick={useEffect(temp, [])} */}
          <IonIcon className="info-icon" icon={informationCircle}></IonIcon>
        </button>
      </Link>
    </div>
  );
}

export default Login;
