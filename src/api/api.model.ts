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
    updated: {
      label: Date;
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
      amount: number;
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
      "im:id": number;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: Date;
    attributes: {
      label: string;
    };
  };
}
