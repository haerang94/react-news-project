import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk, searchNewsThunk } from "reducers/news";

export default function useNews() {
  const { data, loading, error, keyword } = useSelector((state: RootState) => ({
    data: state.news.news.data,
    loading: state.news.news.loading,
    error: state.news.news.error,
    keyword: state.news.text,
  }));
  const dispatch = useDispatch();

  const onFetchNews = useCallback(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);
  const onSubmitInput = useCallback(
    (text: string) => {
      dispatch(searchNewsThunk(text));
    },
    [dispatch]
  );

  return { data, loading, error, keyword, onFetchNews, onSubmitInput };
}
