export interface Podcast {
  id: string;
  author: string;
  title: string;
  images: {
    label: string;
    attributes: {
      height: string;
    };
  }[];
}

export interface PodcastDetail {
  title: string;
  author: string;
  description: string;
  image: string;
  episodes: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  content: string;
  contentSnippet: string;
  duration: string;
  enclosure: {
    url: string;
    type: string;
    length: string;
  };
  isoDate: string;
}
