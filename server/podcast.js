const Axios = require("axios");
const Parser = require("rss-parser");

const requestPodcast = function(req, res) {
  const url = `https://itunes.apple.com/lookup?id=${req.query.id}`;

  Axios.get(url).then(response => {
    // res.send(response.data.results[0].feedUrl);
    requestPodcastFeed(res, response.data.results[0].feedUrl);
  });
};

const requestPodcastFeed = function(res, feedUrl) {
  let parser = new Parser();

  (async () => {
    try {
      res.send(mapFeedToPodcast(await parser.parseURL(feedUrl)));
    } catch (e) {
      res.sendStatus(500);
    }
  })();
};

const mapItemToEpisode = item => ({
  id: item.guid,
  title: item.title,
  content: item.content,
  contentSnippet: item.contentSnippet,
  link: item.link,
  enclosure: item.enclosure,
  duration: item.itunes.duration,
  isoDate: item.isoDate
});

const mapFeedToPodcast = feed => ({
  title: feed.title,
  description: feed.itunes.summary,
  image: feed.image.url,
  author: feed.itunes.author,
  episodes: feed.items.map(mapItemToEpisode)
});

module.exports = requestPodcast;
