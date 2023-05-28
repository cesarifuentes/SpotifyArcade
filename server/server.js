const express = require("express"); // web server framework
const app = express(); // main app
const cors = require("cors"); // for cross-origin accessing in the browser
require("dotenv").config(); // hold our credentials
// const mongoose = require("mongoose"); // database
const spotifyWebApi = require("spotify-web-api-node");

/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

const PORT = process.env.PORT;

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
};

/* -------------------------------------------------------------------------- */
/*                                 MIDDLEWARE                                 */
/* -------------------------------------------------------------------------- */

app.use(cors()); // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

/* -------------------------------------------------------------------------- */
/*                                     ...                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                OTHER ROUTES                                */
/* -------------------------------------------------------------------------- */

app.get("/", (req, res) => {
  console.log("Hello World!");
});

/* -------------------------------------------------------------------------- */
/*                            AUTHORIZATION ROUTES                            */
/* -------------------------------------------------------------------------- */

app.post("/login", (req, res) => {
  //  setup
  let spotifyApi = new spotifyWebApi(credentials);

  //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api
  const code = req.body.code;

  // Retrieve an access token
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      // Returning the User's AccessToken in the json formate
      res.json({
        accessToken: data.body.access_token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

/* -------------------------------------------------------------------------- */
/*                                START SERVER                                */
/* -------------------------------------------------------------------------- */

// set up the website to run on port
app.listen(PORT, () => {
  console.log(`Server (express app) listening on ${PORT}`);
});
