import React from "react";

// HELPER
import { loginUrl } from "../helper/loginUrl";

// COMPONTENTS
import Button from "../components/Button/Button";

// BACKEND
import { useEffect } from "react";
import TokenHook from "../api/token";

function Login() {
  /* -------------------------------------------------------------------------- */
  /*                                   BACKEND                                  */
  /* -------------------------------------------------------------------------- */

  // Get code from url (after authorized)
  const code_url = new URLSearchParams(window.location.search).get("code");
  if (code_url) {
    localStorage.setItem("code", code_url);
    window.history.pushState({}, null, "/");
    // TODO: when left arrowed, the token stays in local storage
  }

  // TODO: keep getting token error

  // Get token from Spotify
  const [token, fetchToken] = TokenHook();
  useEffect(() => {
    fetchToken();
  }, [fetchToken]);
  console.log("token: ", token);

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
        <Button to={loginUrl} text="LOG IN" class="medium primary" />
      </div>
    </div>
  );
}

export default Login;
