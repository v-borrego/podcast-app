export interface FeedResponse {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: Podcast[];
    upstringd: {
      label: string;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: [
      {
        attributes: {
          rel: string;
          type: string;
          href: string;
        };
      },
      {
        attributes: {
          rel: string;
          href: string;
        };
      }
    ];
    id: {
      label: string;
    };
  };
}

export interface Podcast {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];

  summary: {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releasestring"?: {
    label: string;
    attributes: {
      label: string;
    };
  };
}

export interface PodcastLookupResponse {
  results: {
    feedUrl: string;
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
  link: string;
  duration: string;
  enclosure: {
    url: string;
    type: string;
    length: number;
  };
  isoDate: string;
}
