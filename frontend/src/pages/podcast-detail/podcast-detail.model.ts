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
  isoDate: string;
  duration: string;
  title: string;
}
