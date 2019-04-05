const Axios = require("axios");

const requestList = function(req, res) {
  const url =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  Axios.get(url)
    .then(mapResultToPodcastList)
    .then(list => res.send(list));
};

const mapResultToPodcastList = result =>
  result.data.feed.entry.map(mapEntryToPodcast);

const mapEntryToPodcast = entry => ({
  id: entry.id.attributes["im:id"],
  author: entry["im:artist"].label,
  title: entry["im:name"].label,
  images: entry["im:image"]
});

module.exports = requestList;
