import React from "react";
import { Link } from "react-router-dom";

function Home() {
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

  return (
    <div class="page">
      <ul class="flex-container-main horiz-center">
        <li class="flex-item-main">
          <h3>MUSIC MATCH</h3>
          <br />
          <p style={{ textAlign: "center", width: "400px" }}>
            Compete with your friends to see who knows each others music taste
            the best.
          </p>
          <br />
          <Link to={`create/`}>
            <button class="button small primary">
              <p>CREATE PARTY</p>
              {/* <h5>CREATE PARTY</h5> */}
            </button>
          </Link>
          <br />
          <Link to={`join/`}>
            <button class="button small secondary">
              <p>JOIN PARTY</p>
            </button>
          </Link>
        </li>

        {/* <li class="flex-item-main">
          <h1>ARTIST GENRE</h1>
          <p style={{ textAlign: "center", width: "400px" }}>
            Test your knowledge of the artists you follow by matching them to
            their subgenres.
          </p>
        </li> */}
      </ul>

      {/* TODO: fix spacing issue */}
      {/* TODO: put this on every page, layout.jsx */}
      <div class="navbar">
        <div class="dropdown">
          {/* IMAGE */}
          <img
            class="profile-img small dropbtn"
            onClick={myFunction}
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
          {/* MENU */}
          <div id="myDropdown" class="dropdown-content">
            <Link to={`profile/`}>Profile</Link>
            {/* <Link to={`/`}>Settings</Link> */}
            <Link class="top-separator" to={`/`}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
