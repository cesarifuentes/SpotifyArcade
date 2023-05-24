const express = require("express"); // web server framework
const app = express(); // main app
const PORT = process.env.PORT || 3001;
const queryString = require("node:querystring");
const axios = require("axios");

// SPOTIFY CREDENTIALS
const CLIENT_ID = "0e10132158354330a41de8afaf122210";
const REDIRECT_URI = "http://localhost:3001/account";
const CLIENT_SECRET = "288a432f88b74e628a83af682e24a27d";
const BASE64_AUTHORIZATION =
  "MGUxMDEzMjE1ODM1NDMzMGE0MWRlOGFmYWYxMjIyMTA6Mjg4YTQzMmY4OGI3NGU2MjhhODNhZjY4MmUyNGEyN2Q="; // USED THIS WEBSITE () ON "CLIENT_ID:CLIENT_SECRET"

app.get("/", (req, res) => {
  var x = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;
  res.send(`<a href=${x}>Sign in</a>`);
});

app.get("/account", async (req, res) => {
  console.log("spotify response code is " + req.query.code);
  res.send("account page");

  const spotifyResponse = await axios.post(
    "https://accounts.spotify.com/api/token",
    queryString.stringify({
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: REDIRECT_URI,
    }),
    {
      headers: {
        Authorization: "Basic " + BASE64_AUTHORIZATION,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const ACCESS_TOKEN = spotifyResponse.data["access_token"];

  // get the user’s top tracks
  const data = await axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=50",
    {
      headers: {
        Authorization: "Bearer " + ACCESS_TOKEN,
      },
    }
  );
  console.log(data.data);
});

// TODO: potentially send cookies back to the browser with this access token so that users won't have to continuously sign in to get data
// TODO: turn into env vars

// set up the website to run on port
app.listen(PORT, () => {
  console.log(`Server (express app) listening on ${PORT}`);
});
