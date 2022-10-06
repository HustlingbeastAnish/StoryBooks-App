const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan ");
const connectDb = require("./config/db");

//Load Config
dotenv.config({ path: "./config/config.env" });

// Connecting the backend to the database
connectDb();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV}  node on PORT ${PORT}`
  )
);
