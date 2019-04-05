const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const requestList = require("./list.js");
const requestPodcast = require("./podcast");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/podcast/", requestPodcast);
app.use("/api/top-list/", requestList);

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
