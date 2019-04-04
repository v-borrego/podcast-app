export interface Podcast {
  image: string;
  author: string;
  title: string;
  description: string;
  episode: Episode;
}

export interface Episode {
  id: string;
  content: string;
  isoDate: string;
  duration: string;
  enclosure: {
    url: string;
  };
  title: string;
}
