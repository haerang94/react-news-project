import { ThunkAction } from "redux-thunk";
import { RootState } from "reducers";
import { NewsAction } from "reducers/news/types";
import { getNews, searchNews } from "utils/api";
import { getNewsAsync, setNewsKeyWord } from "reducers/news/actions";

export function getNewsThunk(
  page: number = 1
): ThunkAction<void, RootState, null, NewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = getNewsAsync;
    dispatch(request());
    try {
      const data = await getNews(page);
      dispatch(success(data));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function searchNewsThunk(
  text: string,
  page: number = 1
): ThunkAction<void, RootState, null, NewsAction> {
  return async (dispatch) => {
    const { request, success, failure } = getNewsAsync;
    dispatch(request());
    try {
      dispatch(setNewsKeyWord(text));
      const data = await searchNews(text, page);
      dispatch(success(data));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
