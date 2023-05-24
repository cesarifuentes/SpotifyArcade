const express = require("express"); // web server framework
const app = express(); // main app
const PORT = process.env.PORT || 3001;

// SPOTIFY CREDENTIALS
const CLIENT_ID = "0e10132158354330a41de8afaf122210";
const REDIRECT_URI = "http://localhost:3001/account";
const CLIENT_SECRET = "288a432f88b74e628a83af682e24a27d";
const BASE64_AUTHORIZATION = "MGUxMDEzMjE1ODM1NDMzMGE0MWRlOGFmYWYxMjIyMTAyODhhNDMyZjg4Yjc0ZTYyOGE4M2FmNjgyZTI0YTI3ZA==

app.get("/", (req, res) => {
  var x = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;
  res.send(`<a href=${x}>Sign in</a>`);
});

// MGUxMDEzMjE1ODM1NDMzMGE0MWRlOGFmYWYxMjIyMTA6Mjg4YTQzMmY4OGI3NGU2MjhhODNhZjY4MmUyNGEyN2Q=


const queryString = require("node:querystring");
const axios = require("axios");



app.get("/account", async (req, res) => {
  console.log("spotify response code is " + req.query.code);
  res.send("account page");

  //   const y = queryString.stringify({
  //   grant_type: "authorization_code",
  //   code: req.query.code,
  //   redirect_uri: REDIRECT_URI,
  // });

  // const z = {
  //   headers: {
  //     Authorization: "Basic " + BASE64_AUTHORIZATION,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // };

  //   const spotifyResponse = await axios.post(
//     "https://accounts.spotify.com/api/token",
//     y,
//     z
//   );


});

// app.get("/account", async (req, res) => {


//   // console.log(spotifyResponse.data);
// });


// set up the website to run on port
app.listen(PORT, () => {
  console.log(`Server (express app) listening on ${PORT}`);
});
