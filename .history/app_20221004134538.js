const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const engine = require("express-handlebars");
const expbhs = require("express-handlebars");
const connectDb = require("./config/db");

//Load Config
dotenv.config({ path: "./config/config.env" });

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

//Routes
app.use("/", require("./routes/index"));

// Setting up a static public folder for work
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV}  node on PORT ${PORT}`
  )
);
