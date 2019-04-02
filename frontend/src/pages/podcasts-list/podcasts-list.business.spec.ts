import { ApiModel } from "../../api";
import { ViewModel } from "./model";
import { filterPodcasts } from "./podcasts-list.business";
import { mapPodcastApiModelToViewModel } from "./podcasts-list.mapper";

describe("Podcasts list business tests", () => {
  it("should filter podcasts by title", () => {
    // Arrange
    const podcastsListApiModel: ViewModel.Podcast[] = apiModelMockArray.map(
      mapPodcastApiModelToViewModel
    );

    const expectedObject: ViewModel.Podcast[] = [
      {
        id: 1311004083,
        author: "Pushkin Industries",
        title:
          "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/170x170bb-85.png"
      }
    ];

    // Act
    const result = filterPodcasts(podcastsListApiModel, "broken record");

    // Assert
    expect(result).toEqual(expectedObject);
  });

  it("should filter podcasts by author", () => {
    // Arrange
    const podcastsListApiModel: ViewModel.Podcast[] = apiModelMockArray.map(
      mapPodcastApiModelToViewModel
    );

    const expectedObject: ViewModel.Podcast[] = [
      {
        id: 1311004083,
        author: "Pushkin Industries",
        title:
          "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/170x170bb-85.png"
      }
    ];

    // Act
    const result = filterPodcasts(podcastsListApiModel, "pushkin indUSTRies");

    // Assert
    expect(result).toEqual(expectedObject);
  });
});

const apiModelMockArray = [
  {
    "im:name": {
      label:
        "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam"
    },
    "im:image": [
      {
        label:
          "https://is3-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/55x55bb-85.png",
        attributes: { height: "55" }
      },
      {
        label:
          "https://is4-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/60x60bb-85.png",
        attributes: { height: "60" }
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/170x170bb-85.png",
        attributes: { height: "170" }
      }
    ],
    summary: {
      label:
        "From Rick Rubin, Malcolm Gladwell, and Bruce Headlam. The musicians you love talk about their life, inspiration, and craft. Then play."
    },
    "im:price": { label: "Get", attributes: { amount: "0", currency: "USD" } },
    "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
    rights: { label: "© 448388" },
    title: {
      label:
        "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam - Pushkin Industries"
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href:
          "https://itunes.apple.com/us/podcast/broken-record-malcolm-gladwell-rick-rubin-bruce-headlam/id1311004083?mt=2&uo=2"
      }
    },
    id: {
      label:
        "https://itunes.apple.com/us/podcast/broken-record-malcolm-gladwell-rick-rubin-bruce-headlam/id1311004083?mt=2&uo=2",
      attributes: { "im:id": "1311004083" }
    },
    "im:artist": { label: "Pushkin Industries" },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://itunes.apple.com/us/genre/podcasts-music/id1310?mt=2&uo=2",
        label: "Music"
      }
    },
    "im:releaseDate": {
      label: "2019-03-26T00:00:00-07:00",
      attributes: { label: "March 26, 2019" }
    }
  },
  {
    "im:name": { label: "All Songs Considered" },
    "im:image": [
      {
        label:
          "https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/31/a7/99/31a79968-ecc7-065f-199f-fe508204bcfc/mza_4717014932427201073.jpg/55x55bb-85.png",
        attributes: { height: "55" }
      },
      {
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/31/a7/99/31a79968-ecc7-065f-199f-fe508204bcfc/mza_4717014932427201073.jpg/60x60bb-85.png",
        attributes: { height: "60" }
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/31/a7/99/31a79968-ecc7-065f-199f-fe508204bcfc/mza_4717014932427201073.jpg/170x170bb-85.png",
        attributes: { height: "170" }
      }
    ],
    summary: {
      label:
        "Hosts/nerds Bob Boilen and Robin Hilton are your friendly music buddies with the week's best new music discoveries, including conversations with emerging artists, icons and more. Hear songs that can completely change your day, with humor, heart and (sometimes) a whole lot of noise. Directions for use: Morning commute, the gym, or alone time. (If rash persists, discontinue use.)"
    },
    "im:price": { label: "Get", attributes: { amount: "0", currency: "USD" } },
    "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
    rights: { label: "© Copyright 2011-2019 NPR - For Personal Use Only" },
    title: { label: "All Songs Considered - NPR" },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href:
          "https://itunes.apple.com/us/podcast/all-songs-considered/id79687345?mt=2&uo=2"
      }
    },
    id: {
      label:
        "https://itunes.apple.com/us/podcast/all-songs-considered/id79687345?mt=2&uo=2",
      attributes: { "im:id": "79687345" }
    },
    "im:artist": {
      label: "NPR",
      attributes: {
        href: "https://itunes.apple.com/us/artist/npr/125443881?mt=2&uo=2"
      }
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://itunes.apple.com/us/genre/podcasts-music/id1310?mt=2&uo=2",
        label: "Music"
      }
    },
    "im:releaseDate": {
      label: "2019-03-29T02:00:00-07:00",
      attributes: { label: "March 29, 2019" }
    }
  }
];
