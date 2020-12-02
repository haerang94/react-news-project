import { createReducer } from "typesafe-actions";
import { NewsState, NewsAction } from "reducers/news/types";
import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  SET_KEYWORD,
  SET_NEWS,
} from "reducers/news/actions";

const initialState: NewsState = {
  news: {
    loading: false,
    error: null,
    data: null,
  },
  totalResults: null,
  text: null,
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
      data: action.payload.articles,
    },
    totalResults: action.payload.totalResults,
  }),
  [GET_NEWS_ERROR]: (state, action) => ({
    ...state,
    news: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [SET_NEWS]: (state, action) => ({
    ...state,
    news: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [SET_KEYWORD]: (state, action) => {
    return {
      ...state,
      text: action.payload,
    };
  },
});

export default news;
