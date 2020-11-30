import axios from "axios";

export const getNews = () => {
  const response = axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&country=kr`
  );
  return response;
};
export interface Welcome {
  status: string;
  totalResults: number;
  articles: Article[];
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
