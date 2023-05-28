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
      // TODO: Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again.
      spotifyApi.setAccessToken(data.body.access_token);
      // Returning the User's AccessToken in the json formate
      res.json({
        accessToken: data.body.access_token,
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("error in app.post(/login)");
      res.sendStatus(400);
    });
});

app.post("/user", (req, res) => {
  //  setup
  let spotifyApi = new spotifyWebApi(credentials);
  spotifyApi.setAccessToken(req.body.accessToken);

  // Retrieve a user
  spotifyApi
    .getMe()
    .then((data) => {
      // Returning the User in the json formate
      res.json({
        display_name: data.body.display_name,
        images: data.body.images,
        id: data.body.id,
      });
    })
    .catch((err) => {
      console.log(err);
      console.log("error in app.post(/user)");
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
