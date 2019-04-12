const express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");

const requestList = require("./list.js");
const requestPodcast = require("./podcast");

var DIST_DIR = path.join(__dirname, "/");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  "/",
  expressStaticGzip(DIST_DIR, {
    enableBrotli: true
  })
);

app.use("/api/podcast/", requestPodcast);
app.use("/api/top-list/", requestList);

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
