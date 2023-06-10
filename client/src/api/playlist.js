import { useState } from "react";
import axios from "axios";

const PlaylistHook = () => {
  const [playlist, setPlaylist] = useState("");

  const loadPlaylist = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.post("http://localhost:8000/playlists", {
        accessToken,
      });
      setPlaylist(response.data);
    } catch (error) {
      console.error("playlist error", error);
    }
  };

  return [playlist, loadPlaylist];
};

export default PlaylistHook;
