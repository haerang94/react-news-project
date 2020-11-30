import axios from "axios";
import { Welcome } from "types/article";

export const getNews = async () => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=kr`
  );
  return response.data.articles;
};
