import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>
        <Link to={`tutorial/`}>Tutorial</Link>
      </div>
      <div class="center-abs">
        <img
          class="logo selector"
          src="/assets/images/spotify-match.png"
          alt="spotify-logo"
        />
        <br />
        <br />
        <Link to={`home/`}>
          <button class="button green">
            <h5>Connect Your Account</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
