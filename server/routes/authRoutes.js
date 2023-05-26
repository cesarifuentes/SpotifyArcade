const express = require("express");
const router = express.Router();
const querystring = require("querystring");
// once user log in, reaches here

// user logs in
router.get("/login", async (req, res) => {
  //   res.set("Access-Control-Allow-Origin", "*");
  let scope =
    "playlist-read-private user-follow-read user-top-read user-read-recently-played user-library-read";
  //   res.send({ msg: "Displaying the Spotify OAuth2 prompt 🎵" });
  console.log("About to redirect (1)");
  res.send(`API is working properly`);

  //   res.redirect(
  //     `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${scope}&show_dialog=true`
  //   );
});

module.exports = router;
