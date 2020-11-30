import { createReducer } from "typesafe-actions";
// import { GithubState, GithubAction } from "./types";
// import {
//   GET_USER_PROFILE,
//   GET_USER_PROFILE_SUCCESS,
//   GET_USER_PROFILE_ERROR,
// } from "./actions";

export const GET_NEWS = "news/GET_NEWS" as const;
export const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS" as const;
export const GET_NEWS_ERROR = "news/GET_NEWS_ERROR" as const;

interface NewsState {}

interface NewsAction {}

const initialState: NewsState = {
  news: {
    loading: false,
    error: null,
    data: null,
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
