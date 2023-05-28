import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../helper/useAuth";
import getUser from "../helper/getUser";

function Profile() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  const accessToken = useAuth();
  const user = getUser(accessToken);

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      <div className="title">My Profile</div>
      <br />

      {/* TODO: add image swap */}
      {/* TODO: add username swap */}
      {/* TODO: add new container */}

      <div className="selected1">
        <img
          className="profile-img large immovable navbar-element visible"
          src={user ? user.images.at(0).url : "/assets/images/error.png"}
          alt="spotify-logo"
        />
        <div className="title">{user ? user.display_name : "N/A"}</div>
      </div>

      <br />
      <br />

      <h2>My Wins</h2>
      <br />

      <h2>My Progress</h2>
      <br />
      <ul className="flex-container-profile">
        <li className="flex-item-profile selected3">Game 1</li>
        <li className="flex-item-profile selected3">Game 2</li>
        <li className="flex-item-profile selected3">Game 3</li>
      </ul>

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
