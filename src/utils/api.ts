import axios from "axios";
import { Welcome } from "types/article";

export const getNews = async (page: number = 1) => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=us&pageSize=6&page=${page}`
  );
  return response.data;
};

export const searchNews = async (text: string | null, page: number = 1) => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&q=${text}&pageSize=6&page=${page}`
  );
  console.log(response.data);
  return response.data;
};
