import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../helper/useAuth";
// import getUser from "../helper/getUser";
import getPlaylists from "../helper/getPlaylists";
import displayPlaylists from "../helper/displayPlaylists";

import { useState, useEffect } from "react";
import axios from "axios";

// import { IonIcon } from "@ionic/react";
// import { eyeOff } from "ionoicons/icns";
//         <IonIcon className="eyeOff" icon={eyeOff}></IonIcon>;

function saveToProfile() {
  console.log("Saving to profile...");
  const image = document.getElementById("upload-image");
  console.log(image.src);
  // const text = document.getElementById("upload-text");

  // elem.style.color = newColor;
  // elem.style.color = newColor;
}

// TODO: chance image src on upload

// function loadFile(event) {
// console.log("Changing photo...");
// var image = document.getElementById("profile-img");
// console.log(image.src);
// image.src = URL.createObjectURL(event.target.files[0]);
// }

function Profile() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  const accessToken = localStorage.getItem("accessToken");

  // Get user from Spotify
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8000/user", { accessToken })
      .then((response) => {
        console.log("GetUser RESPONDED");
        setUser(response.data);
        // localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch(() => {
        console.log("error: caught in getUser");
      });
  }, []);

  // const playlists = getPlaylists(accessToken);
  const playlists = null;

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      <h1>Settings</h1>
      <br />
      <br />
      {/* TODO: add image swap */}
      {/* TODO: add username swap */}
      {/* TODO: add new container */}

      <h2>My Profile</h2>
      <p>Changes made here will not reflect in Spotify</p>
      <br />
      <div className="user-tag">
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={(event) => {
            // this.loadFile(event);
            console.log("Changing photo...");
            console.log(event.target);
            localStorage.setItem(
              "image",
              URL.createObjectURL(event.target.files[0])
            );
            console.log(URL.createObjectURL(event.target.files[0]));
            // var image = document.getElementById("profile-img");
            // image.src = URL.createObjectURL(event.target.files[0]);
            // console.log(image);
          }}
          hidden
        />
        <label htmlFor="upload">
          <div className="image-and-text">
            <img
              className="profile-img image-upload-button large left immovable
            visible"
              src={user ? user.images.at(0).url : "/assets/images/error.png"}
              // TODO: user.images.at(0).url
              alt="spotify-logo"
              id="upload-image"
            />
            <div className="image-overlay-text">
              {/* <IonIcon className="" icon={pencil}> */}
              Upload Photo
              {/* </IonIcon> */}
            </div>
          </div>
        </label>

        <div className="username large">
          {/* <h2>{user ? user.display_name : "N/A"}</h2> */}
          <input
            type="text"
            id="upload-text"
            className="profile-text-input"
            defaultValue={user ? user.display_name : "N/A"}
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <h2>My Progress</h2>
      <p>12 Wins</p>
      <br />
      <br />
      <br /> */}
      {/* <ul className="flex-container-profile">
        <li className="flex-item-profile selected3">Game 1</li>
        <li className="flex-item-profile selected3">Game 2</li>
        <li className="flex-item-profile selected3">Game 3</li>
      </ul> */}
      {/* TODO: store this and keep track */}
      <h2>My Playlists</h2>
      <p>Visible to other players</p>
      {/* TODO: add buttons to show public/private playlists */}
      <br />
      <ul className="flex-container-profile">
        {playlists ? (
          displayPlaylists(playlists)
        ) : (
          <li className="flex-item-profile">Loading</li>
        )}
      </ul>
      {/* // TODO: add clicking on and off */}
      {/* Return Button */}
      <Link to={`/`}>
        <button className="button large bottom-right secondary">
          <h3>HOME</h3>
        </button>
      </Link>
      {/*  */}

      {/* Button */}
      {/* <Link to={`lobby/`}> */}
      {/* TODO: make into submit button */}
      <button
        className="button large bottom-left primary"
        onClick={saveToProfile}
      >
        <h3>SAVE</h3>
      </button>
      {/* </Link> */}
    </div>
  );
}

export default Profile;

// {
//   /* <li className="flex-item-profile selected3">Game 1</li>
// <li className="flex-item-profile selected3">Game 2</li>
// <li className="flex-item-profile selected3">Game 3</li> */
// }
