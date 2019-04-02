import { Episode } from "../../../api/api.model";

export interface Podcast {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  episodes: Episode[];
}

export interface Episode {
  content: string;
  contentSnippet: string;
  isoDate: string;
  enclosure: {
    url: string;
    type: string;
    length: number;
  };
  link: string;
  title: string;
}
