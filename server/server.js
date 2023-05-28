const express = require("express"); // web server framework
const app = express(); // main app
const cors = require("cors"); // for cross-origin accessing in the browser
require("dotenv").config(); // hold our credentials
// const mongoose = require("mongoose"); // database

/* -------------------------------------------------------------------------- */
/*                                 MIDDLEWARE                                 */
/* -------------------------------------------------------------------------- */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // { origin: "http://localhost:3000" }

/* -------------------------------------------------------------------------- */
/*                                OTHER ROUTES                                */
/* -------------------------------------------------------------------------- */

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

/* -------------------------------------------------------------------------- */
/*                            AUTHORIZATION ROUTES                            */
/* -------------------------------------------------------------------------- */

const AuthRoutes = require("./routes/authRoutes.js");
app.use("/", AuthRoutes);

/* -------------------------------------------------------------------------- */
/*                                START SERVER                                */
/* -------------------------------------------------------------------------- */

// set up the website to run on port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server (express app) listening on ${PORT}`);
});
