import { useEffect } from "react";
import axios from "axios";

export default function GetUser(accessToken) {
  useEffect(() => {
    if (!accessToken) return; // won't work without accessToken
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
  }, [accessToken]);

  return JSON.parse(localStorage.getItem("user"));
}
