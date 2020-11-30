import axios from "axios";

export const getNews = async () => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=kr`
  );
  console.log(response.data);
  return response.data.articles;
};
export interface Welcome {
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
