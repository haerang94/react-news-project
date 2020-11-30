import { createAsyncAction } from "typesafe-actions";
import { Welcome } from "utils/api";
import { AxiosError } from "axios";

export const GET_NEWS = "news/GET_NEWS";
export const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS";
export const GET_NEWS_ERROR = "news/GET_NEWS_ERROR";

export const getNewsAsync = createAsyncAction(
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR
)<any, Welcome, AxiosError>();

// export const getNewsAsync = createAction(GET_NEWS)<Article>();

// export const getNewsAsync = (data: Article) => {
//   console.log(data);
//   return {
//     type: GET_NEWS,
//     payload: data,
//   };
// };
