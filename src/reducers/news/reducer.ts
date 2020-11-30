import { createReducer } from "typesafe-actions";
import { NewsState, NewsAction } from "reducers/news/types";
import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
} from "reducers/news/actions";

console.log(GET_NEWS);

const initialState: NewsState = {
  news: {
    loading: false,
    error: null,
    data: "news",
  },
};

const news = createReducer<NewsState, NewsAction>(initialState, {
  [GET_NEWS]: (state) => ({
    ...state,
    news: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_NEWS_SUCCESS]: (state, action) => ({
    ...state,
    news: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_NEWS_ERROR]: (state, action) => ({
    ...state,
    news: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default news;
