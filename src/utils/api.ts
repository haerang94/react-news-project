import axios from "axios";
import { Welcome } from "types/article";
//  한번에 6개 씩 가져온다
// 초기 렌더링 기사 가져오기
export const getNews = async (page: number = 1) => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=us&pageSize=6&page=${page}`
  );
  return response.data;
};
//  검색어나 페이지 버튼 이동에 따른 기사 가져오기
export const searchNews = async (text: string | null, page: number = 1) => {
  const response = await axios.get<Welcome>(
    `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&q=${text}&pageSize=6&page=${page}`
  );
  console.log(response.data);
  return response.data;
};
