import axios from "axios";
import { Welcome } from "types/article";

export const getNews = async () => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=us`
  );
  return response.data.articles;
};

export const searchNews = async (text: string) => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&q=${text}`
  );
  console.log(response.data);
  return response.data.articles;
};
