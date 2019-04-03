export interface Podcast {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  episodes: Episode[];
}

export interface Episode {
  id: string;
  content: string;
  contentSnippet: string;
  isoDate: string;
  duration: string;
  enclosure: {
    url: string;
    type: string;
    length: number;
  };
  link: string;
  title: string;
}
