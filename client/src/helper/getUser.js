import { useEffect } from "react";
import axios from "axios";

export default function GetUser(accessToken) {
  let local_user = localStorage.getItem("user");

  useEffect(() => {
    // Check for valid parameter
    if (!accessToken) return;
    // Check if access token already requested
    if (local_user) return;

    axios
      .post("http://localhost:8000/user", { accessToken })
      .then((response) => {
        // setAccessToken(response.data.accessToken);
        // console.log("HELLO");

        localStorage.setItem("user", JSON.stringify(response.data));
        //
      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        console.log("error: caught in getUser");
        // window.location = "/";
      });
  }, [accessToken, local_user]);

  return JSON.parse(localStorage.getItem("user"));
}
