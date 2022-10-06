const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const expbhs = require("express-handlebars");
const session = require("express-session");
const connectDb = require("./config/db");

//Load Config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport.js");
passport;

// Connecting the backend to the database
connectDb();
const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", expbhs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

// Setting up a static public folder for work
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV}  node on PORT ${PORT}`
  )
);
