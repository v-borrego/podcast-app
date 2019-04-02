import { ApiModel } from "../../api";
import { ViewModel } from "./model";

const emptyImage = {
  label: "",
  attributes: {
    height: "0"
  }
};

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.PodcastDetail
): ViewModel.Podcast => ({
  id: podcast.trackId,
  author: podcast.artistName,
  title: podcast.collectionName,
  description: podcast.collectionName,
  image: podcast.artworkUrl100
});

const fake = {
  wrapperType: "track",
  kind: "podcast",
  artistId: 125443881,
  collectionId: 79687345,
  trackId: 79687345,
  artistName: "NPR",
  collectionName: "All Songs Considered",
  trackName: "All Songs Considered",
  collectionCensoredName: "All Songs Considered",
  trackCensoredName: "All Songs Considered",
  artistViewUrl: "https://itunes.apple.com/us/artist/npr/125443881?mt=2&uo=4",
  collectionViewUrl:
    "https://itunes.apple.com/us/podcast/all-songs-considered/id79687345?mt=2&uo=4",
  feedUrl: "https://www.npr.org/rss/podcast.php?id=510019",
  trackViewUrl:
    "https://itunes.apple.com/us/podcast/all-songs-considered/id79687345?mt=2&uo=4",
  artworkUrl30:
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/68/42/21684278-f07f-8f32-6d21-bd89e5c1ba28/source/30x30bb.jpg",
  artworkUrl60:
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/68/42/21684278-f07f-8f32-6d21-bd89e5c1ba28/source/60x60bb.jpg",
  artworkUrl100:
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/68/42/21684278-f07f-8f32-6d21-bd89e5c1ba28/source/100x100bb.jpg",
  collectionPrice: 0.0,
  trackPrice: 0.0,
  trackRentalPrice: 0,
  collectionHdPrice: 0,
  trackHdPrice: 0,
  trackHdRentalPrice: 0,
  releaseDate: "2019-03-29T09:00:00Z",
  collectionExplicitness: "notExplicit",
  trackExplicitness: "notExplicit",
  trackCount: 300,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Music",
  artworkUrl600:
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/68/42/21684278-f07f-8f32-6d21-bd89e5c1ba28/source/600x600bb.jpg",
  genreIds: ["1310", "26"],
  genres: ["Music", "Podcasts"]
};
