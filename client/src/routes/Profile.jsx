import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../helper/useAuth";
import getUser from "../helper/getUser";
import getPlaylists from "../helper/getPlaylists";
import displayPlaylists from "../helper/displayPlaylists";

// import { IonIcon } from "@ionic/react";
// import { eyeOff } from "ionoicons/icns";
//         <IonIcon className="eyeOff" icon={eyeOff}></IonIcon>;

function Profile() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  const accessToken = useAuth();
  const user = getUser(accessToken);
  const playlists = getPlaylists(accessToken);
  console.log(playlists);
  console.log(displayPlaylists(playlists));

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
        <input type="file" id="upload" hidden />
        <label for="upload">
          <div className="image-and-text">
            <img
              className="profile-img image-upload-button large left immovable
            visible"
              src={user ? user.images.at(0).url : "/assets/images/error.png"}
              alt="spotify-logo"
            />
            <div className="image-overlay-text">
              {/* <IonIcon className="" icon={pencil}> */}
              Upload Photo
              {/* </IonIcon> */}
            </div>
          </div>
        </label>

        <div className="username">
          <h2>{user ? user.display_name : "N/A"}</h2>
        </div>
      </div>

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
    </div>
  );
}

export default Profile;

// {
//   /* <li className="flex-item-profile selected3">Game 1</li>
// <li className="flex-item-profile selected3">Game 2</li>
// <li className="flex-item-profile selected3">Game 3</li> */
// }
