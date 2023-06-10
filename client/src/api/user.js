import { useState } from "react";
import axios from "axios";

const UserHook = () => {
  const [user, setUser] = useState("");

  const loadUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.post("http://localhost:8000/user", {
        accessToken,
      });
      setUser(response.data);
    } catch (error) {
      console.error("user error", error);
    }
  };

  return [user, loadUser];
};

export default UserHook;
