import React, { Component } from "react";
import "./Navbar.scss";

// HELPER
import showDropdrown from "../../helper/navDropdown";
import logout from "../../helper/logout";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    // ...
    return (
      <div className="navbar">
        <div className="dropdown">
          {/* IMAGE */}
          <img
            className="profile-img small dropbtn"
            onClick={showDropdrown}
            src={
              this.props.user
                ? this.props.user.images.at(0).url
                : "/assets/images/error.png"
            }
            alt="user-img"
          />
          {/* MENU */}
          <div id="myDropdown" className="dropdown-content">
            <Link to={`profile/`}>
              <div className="navigator">Settings</div>
            </Link>
            <Link
              onClick={() => {
                logout();
              }}
            >
              <div className="navigator top-separator">
                <p>Log Out</p>
              </div>
            </Link>
            {/* TODO: move to database on login */}
          </div>
          {/* END */}
        </div>
      </div>
    );
  }
}

export default Navbar; // Don’t forget to use export default!
