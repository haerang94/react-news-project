import { createAsyncAction, createAction } from "typesafe-actions";
import { Article, Welcome } from "types/article";
import { AxiosError } from "axios";

export const GET_NEWS = "news/GET_NEWS";
export const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS";
export const GET_NEWS_ERROR = "news/GET_NEWS_ERROR";
export const SET_NEWS = "news/SET_NEWS";

export const SET_KEYWORD = "news/SET_KEYWORD";
export const SET_KEYWORD_SUCCESS = "news/SET_KEYWORD_SUCCESS";
export const SET_KEYWORD_ERROR = "news/SET_KEYWORD_ERROR";

export const setNewsKeyWord = createAction(SET_KEYWORD)<string | null>();

export const setNews = createAction(SET_NEWS, (data) => data)<Article[]>();

export const getNewsAsync = createAsyncAction(
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR
)<undefined, Welcome, AxiosError>();
