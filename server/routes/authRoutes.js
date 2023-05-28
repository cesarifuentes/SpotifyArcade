// const express = require("express");
// const router = express.Router();
// const querystring = require("querystring");
// // once user log in, reaches here

// router.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!!!" });
// });

// // user logs in
// router.get("/login", async (req, res) => {
//   let scope =
//     "playlist-read-private user-follow-read user-top-read user-read-recently-played user-library-read";
//   let uri = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${scope}&show_dialog=true`;

//   //   res.redirect(`http://localhost:8000/message`);

//   res.redirect(uri);

//   //   res.json({
//   //     message: `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${scope}&show_dialog=true`,
//   //   });
// });

// router.get("/logged", async (req, res) => {
//   //   res.json({ message: "Logged done" });

//   // body to be url encoded
//   let body = {
//     grant_type: "authorization_code",
//     code: req.query.code,
//     redirect_uri: process.env.REDIRECTURI,
//     client_id: process.env.CLIENT_ID,
//     client_secret: process.env.CLIENT_SECRET,
//   };

//   const headers = {
//     Accept: "application/json", // triggers CORS preflight
//     "Content-Type": "application/x-www-form-urlencoded", // receving
//   };

//   // fetch for access and refress token for the user
//   await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: headers,
//     body: encodeFormData(body),
//   })
//     .then((res) => res.json)
//     .then((data) => {
//       let query = querystring.stringify(data);
//       res.redirect(`http://localhost:3000/home/${query}`);
//     });
// });

// module.exports = router;
