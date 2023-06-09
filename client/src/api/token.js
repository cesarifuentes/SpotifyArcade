import { useState, useEffect } from "react";
import axios from "axios";

const TokenHook = () => {
  const [token, setToken] = useState("");

  const loadToken = async () => {
    const code = localStorage.getItem("code");
    try {
      const response = await axios.post("http://localhost:8000/login", {
        code,
      });
      setToken(response.data.token);
      localStorage.setItem("accessToken", response.data.accessToken);
      window.location.reload(false);
    } catch (error) {
      console.error("token error", error);
    }
  };

  return [token, loadToken];
};

export default TokenHook;
