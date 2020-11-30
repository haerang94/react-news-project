export interface Welcome {
  articles: Article[];
  data?: Article[];
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: null | string;
}

export interface Source {
  id: null;
  name: string;
}
