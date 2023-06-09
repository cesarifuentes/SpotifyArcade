import { useEffect } from "react";
import axios from "axios";

// export const UseAuth = async () => {
export default function UseAuth() {
  const code = localStorage.getItem("code");
  const local_accessToken = localStorage.getItem("accessToken");

  console.log("UseAuth...");

  useEffect(() => {
    // Check for valid parameter
    if (!code) return;
    // Check if access token already requested
    if (local_accessToken) return;

    (async () => {
      //
      let result = await axios
        .post("http://localhost:8000/login", { code })
        .then((response) => {
          // console.log("Response received from server");

          console.log("UseAuth RESPONDED");

          // console.log(response.data);
          // setAccessToken(response.data.accessToken);
          localStorage.setItem("accessToken", response.data.accessToken);
        })
        .catch(() => {
          //   If fail redirect to home page - Login page
          console.log("error: caught in useAuth");
          // window.location = "/";
        });
      //
    })();
  }, []);

  // NOTE: only running once
  // code, local_accessToken

  console.log("UseAuth completed.");

  return localStorage.getItem("accessToken");
}
