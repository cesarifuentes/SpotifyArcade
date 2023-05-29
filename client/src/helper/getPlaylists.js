import { useEffect } from "react";
import axios from "axios";

export default function GetPlaylists(accessToken) {
  useEffect(() => {
    if (!accessToken) return; // won't work without username
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
  }, [accessToken]);

  return JSON.parse(localStorage.getItem("playlists"));
}

// setAccessToken(response.data.accessToken);
// localStorage.setItem("user", JSON.stringify(response.data));
