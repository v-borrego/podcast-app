const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Parser = require("rss-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/podcast/", function(req, res) {
  const feedURL = req.query.feedURL;
  let parser = new Parser();

  (async () => {
    // res.send(await parser.parseURL(feedURL));
    try {
      res.send(mapFeedToPodcast(await parser.parseURL(feedURL)));
    } catch (e) {
      res.sendStatus(500);
    }
  })();
});

const mapItemToEpisode = item => ({
  title: item.title,
  content: item.content,
  contentSnippet: item.contentSnippet,
  link: item.link,
  enclosure: item.enclosure,
  isoDate: item.isoDate
});

const mapFeedToPodcast = feed => ({
  title: feed.title,
  description: feed.itunes.summary,
  image: feed.image.url,
  author: feed.itunes.author,
  episodes: feed.items.map(mapItemToEpisode)
});

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"));

console.log("Listening on port: " + app.get("port"));

module.exports = app;
