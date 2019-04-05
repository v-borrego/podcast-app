import { ApiModel } from "../../api";
import * as ViewModel from "./podcasts-list.model";
import { mapPodcastApiModelToViewModel } from "./podcasts-list.mapper";

describe("Podcasts list mappers tests", () => {
  it("should map podcast model from ApiModel to ViewModel", () => {
    // Arrange
    const podcastApiModel: ApiModel.Podcast = apiModelMockArray[0];

    const expectedObject: ViewModel.Podcast = {
      id: 1311004083,
      author: "Pushkin Industries",
      title:
        "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/170x170bb-85.png"
    };

    // Act
    const result = mapPodcastApiModelToViewModel(podcastApiModel);

    // Assert
    expect(result).toEqual(expectedObject);
  });

  it("should obtain the highest resolution image", () => {
    // Arrange
    const podcastApiModel: ApiModel.Podcast = apiModelMockArray[0];

    // Exchange the positions of the images
    [podcastApiModel.images[2], podcastApiModel.images[0]] = [
      podcastApiModel.images[0],
      podcastApiModel.images[2]
    ];

    const expectedObject: ViewModel.Podcast = {
      id: 1311004083,
      author: "Pushkin Industries",
      title:
        "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts118/v4/59/e9/ec/59e9ec13-c08e-bfbc-a0e0-b4f87232e3bf/mza_7265350545278754018.jpeg/170x170bb-85.png"
    };

    // Act
    const result = mapPodcastApiModelToViewModel(podcastApiModel);

    // Assert
    expect(result).toEqual(expectedObject);
  });
});

const apiModelMockArray: ApiModel.Podcast[] = [
  {
    title: "Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam",
    images: [
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
    id: "1311004083",
    author: "Pushkin Industries"
  },
  {
    images: [
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
    title: "All Songs Considered - NPR",
    id: "79687345",
    author: "NPR"
  }
];
