import axios from "axios";

export const getNews = async () => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=09309de8c1bc4bda8cac59f36deb633c&country=kr`
  );
  console.log(response.data);
  return response.data;
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
