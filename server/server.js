const express = require("express"); // web server framework
const app = express(); // main app
const PORT = process.env.PORT || 3001;

// // defined a root route for our website
// // when a GET request is made to the root of our website, the callback function we specified within the get() method will be invoked
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// set up the website to run on port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// nodemon server/app.js
// cd client; npm start
