import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useAuth from "../helper/useAuth";
import getUser from "../helper/getUser";

const Home = ({ code }) => {
  /* -------------------------------------------------------------------------- */
  /*                                   button                                   */
  /* -------------------------------------------------------------------------- */

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    // alert("closing");
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const myFunction = (e) => {
    e.preventDefault();
    // alert("opening");
    document.getElementById("myDropdown").classList.toggle("show");
  };

  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  const accessToken = useAuth(code);
  const user = getUser(accessToken);

  /* -------------------------------------------------------------------------- */
  /*                                  FRONTEND                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="page">
      <ul className="flex-container-main horiz-center">
        <li className="flex-item-main">
          <h3>MUSIC MATCH</h3>
          {/* <p>${code}</p> */}
          <br />
          <p style={{ textAlign: "center", width: "400px" }}>
            Compete with your friends to see who knows each others music taste
            the best.
          </p>
          <br />
          <Link to={`create/`}>
            <button className="button small primary">
              <p>CREATE PARTY</p>
              {/* <h5>CREATE PARTY</h5> */}
            </button>
          </Link>
          <br />
          <Link to={`join/`}>
            <button className="button small secondary">
              <p>JOIN PARTY</p>
            </button>
          </Link>
        </li>

        {/* <li className="flex-item-main">
          <h1>ARTIST GENRE</h1>
          <p style={{ textAlign: "center", width: "400px" }}>
            Test your knowledge of the artists you follow by matching them to
            their subgenres.
          </p>
        </li> */}
      </ul>

      {/* TODO: fix spacing issue */}
      {/* TODO: move to layout.jsx */}
      <div className="navbar">
        <div className="dropdown">
          {/* IMAGE */}
          <img
            className="profile-img small dropbtn"
            onClick={myFunction}
            src={user ? user.body.images.at(0).url : "/assets/images/error"}
            alt="spotify-logo"
          />
          {/* MENU */}
          <div id="myDropdown" className="dropdown-content">
            <Link to={`profile/`}>Profile</Link>
            {/* <Link to={`/`}>Settings</Link> */}
            <Link className="top-separator" to={`/`}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// console.log(data.body.images.at(0).url);
// setUser(resp); // user.data
// setUser({ ...user, data: resp });

// const x = { body: resp };
