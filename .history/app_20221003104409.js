const express = require("express");
const dotenv = require("dotenv");

//Load Config
dotenv.config({ path: ",/config/config.env" });

const app = expresss();
const PORT = process.env.PORT || 5000;

app.listen(PORT);
