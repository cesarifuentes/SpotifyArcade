import { useEffect, useState } from "react";
import axios from "axios";

export default function UseAuth() {
  const code = localStorage.getItem("code");
  const local_accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    // Check for valid parameter
    if (!code) return;
    // Check if access token already requested
    if (local_accessToken) return;

    axios
      .post("http://localhost:8000/login", { code })
      .then((response) => {
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
