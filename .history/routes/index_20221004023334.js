const express = require("express");
const router = express.Router();

// description -->    Login/ Landing Page

router.get("/", (req, res) => {
  res.send("Login Page of Story Books");
});
