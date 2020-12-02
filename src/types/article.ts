export interface Welcome {
  articles: Article[];
  data?: Article[];
  totalResults: number | null;
  status: string;
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date | any;
  content: null | string;
}

export interface Source {
  id: null;
  name: string;
}
