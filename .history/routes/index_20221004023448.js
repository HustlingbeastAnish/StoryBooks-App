const express = require("express");
const router = express.Router();

// description -->    Login/ Landing Page
// Route  -->         Get /
router.get("/", (req, res) => {
  res.send("Login Page of Story Books");
});

// description -->    Dashboard
// Route  -->         Get /Dashboard
router.get("/dashboard", (req, res) => {
  res.send("Dashboard Story Books");
});

module.exoprts = router;
