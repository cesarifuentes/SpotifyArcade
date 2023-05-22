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

      {/* TODO: put this on every page, layout.jsx */}
      <div class="navbar">
        <div class="dropdown">
          {/* IMAGE */}
          <img
            class="profile-img small immovables dropbtn"
            onClick={myFunction}
            src="/assets/images/profile.jpg"
            alt="spotify-logo"
          />
          {/* MENU */}
          <div id="myDropdown" class="dropdown-content">
            <Link class="" to={`/profile`}>
              Profile
            </Link>

            <Link class="" to={`/`}>
              Settings
            </Link>

            <Link class="link top-separator" to={`/`}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
