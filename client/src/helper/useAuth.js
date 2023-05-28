import { useEffect, useState } from "react";
import axios from "axios";

export default function UseAuth() {
  // const [accessToken, setAccessToken] = useState(); // TODO: remove this

  const code = localStorage.getItem("code");
  const local_accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!code) return; // won't work without code
    if (local_accessToken) return; // won't replace existing accessToken
    axios
      .post("http://localhost:8000/login", { code })
      .then((response) => {
        // If success then cut the code string from the URL and execute the other thing
        // window.history.pushState({}, null, "/");

        // console.log(response.data);
        // setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        console.log("error: caught in useAuth");
        // window.location = "/";
      });
  }, [code]);

  return localStorage.getItem("accessToken");
}
