var path = require("path");
let expressStaticGzip = require("express-static-gzip");

var express = require("express");
var app = express();

app.set("port", process.env.PORT || 8080);

var DIST_DIR = path.join(__dirname, "/");

app.use(function(req, res, next) {
  if (!path.extname(req.path).length > 0) {
    req.url = "/index.html";
    next();
  } else {
    next();
  }
});

app.use(
  "/",
  expressStaticGzip(DIST_DIR, {
    enableBrotli: true
  })
);

app.listen(app.get("port"), function() {
  console.log("The server is listening on port", app.get("port"));
});
