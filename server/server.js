const express = require("express"); // web server framework
const app = express(); // main app
const cors = require("cors"); // for cross-origin accessing in the browser
require("dotenv").config(); // hold our credentials
// const mongoose = require("mongoose"); // database
const spotifyWebApi = require("spotify-web-api-node");
const http = require("http");
const WebSocket = require("ws");

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

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
/*                                OTHER ROUTES                                */
/* -------------------------------------------------------------------------- */

app.get("/", (req, res) => {
  console.log("Hello World!");
});

/* -------------------------------------------------------------------------- */
/*                               SPOTIFY ROUTES                               */
/* -------------------------------------------------------------------------- */

// TODO: add version number 1
// TODO: refresh token

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
      console.log("Something in /login went wrong! ", err);
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
      console.log("Something in /user went wrong! ", err);
      res.sendStatus(400);
    });
});

app.post("/playlists", (req, res) => {
  //  setup
  let spotifyApi = new spotifyWebApi(credentials);
  spotifyApi.setAccessToken(req.body.accessToken);

  // const username = req.body.username;

  // Retrieve a user
  spotifyApi
    .getUserPlaylists({ limit: 10 })
    .then((data) => {
      // Returning the User in the json formate
      // href, id, images, name, tracks,
      res.json(data.body.items);
    })
    .catch((err) => {
      console.log("Something in /playlists went wrong! ", err);
      res.sendStatus(400);
    });
});

/* -------------------------------------------------------------------------- */
/*                                  WEBSOCKET                                 */
/* -------------------------------------------------------------------------- */

function onSocketError(err) {
  console.error(err);
}

// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

let socketsConnected = new Set();

wss.on("connection", function connection(ws, request, client) {
  ws.on("error", console.error);

  console.log(`A new client ${client} connected!`);
  socketsConnected.add(client);
  ws.send("Hello new client!");
  ws.send("Client total: ", socketsConnected.size);

  ws.on("close", function close() {
    console.log(`Client ${client} disconnected!`);
    socketsConnected.delete(socket.id);
  });

  // ws.on("message", function message(data) {
  //   console.log("received: %s", data);
  //   ws.send("We received your message: " + message);
  // });

  // ws.on("message", function message(data, isBinary) {
  //   // acklowledge message
  //   console.log("received: %s", data);
  //   ws.send("We received your message: " + message);
  //   // send message to all other clients
  //   wss.clients.forEach(function each(client) {
  //     if (client !== ws && client.readyState === WebSocket.OPEN) {
  //       client.send(data, { binary: isBinary });
  //     }
  //   });
  // });

  // ws.send("something");
});

// upgrade an already established connection to a different protocol
server.on("upgrade", function upgrade(request, socket, head) {
  //   socket.on("error", onSocketError);
  //   // This function is not defined on purpose. Implement it with your own logic.
  //   authenticate(request, function next(err, client) {
  //     if (err || !client) {
  //       socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
  //       socket.destroy();
  //       return;
  //     }
  //     socket.removeListener("error", onSocketError);
  //     wss.handleUpgrade(request, socket, head, function done(ws) {
  //       wss.emit("connection", ws, request, client);
  //     });
  //   });
});

/* -------------------------------------------------------------------------- */
/*                                START SERVER                                */
/* -------------------------------------------------------------------------- */

// set up the website to run on port
server.listen(PORT, () => {
  console.log(`Server (express app) listening on ${PORT}`);
});
