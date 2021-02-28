const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const apiRoutes = require("./api-routes");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

const PORT = config.get("port") || 8080;

app.get("/", (req, res) => res.send("Hello World with Express and Nodemon"));

let db = null;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    db = mongoose.connection;
    app.use("/api/", apiRoutes);
    app.listen(PORT, () => {
      console.log("Running MovieServer on port", PORT);
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
