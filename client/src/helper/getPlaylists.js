import { useEffect } from "react";
import axios from "axios";

export default function GetPlaylists(accessToken) {
  let local_playlists = localStorage.getItem("playlists");

  useEffect(() => {
    // Check for valid parameter
    if (!accessToken) return;
    // Check if access token already requested
    if (local_playlists) return;

    axios
      .post("http://localhost:8000/playlists", { accessToken })
      .then((response) => {
        // console.log(response);
        localStorage.setItem("playlists", JSON.stringify(response.data));
      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        console.log("error: caught in getPlaylists");
        // TODO: save in local storage the ids (and boolean if showing)
        // window.location = "/";
      });
  }, [accessToken, local_playlists]);

  return JSON.parse(localStorage.getItem("playlists"));
}

// setAccessToken(response.data.accessToken);
// localStorage.setItem("user", JSON.stringify(response.data));
