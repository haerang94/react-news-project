import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk, searchNewsThunk } from "reducers/news";

export default function useNews() {
  const { data, loading, error, keyword, totalResults } = useSelector(
    (state: RootState) => ({
      data: state.news.news.data,
      loading: state.news.news.loading,
      error: state.news.news.error,
      keyword: state.news.text,
      totalResults: state.news.totalResults,
    })
  );
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
  const onPageMove = useCallback(
    (page: number = 1) => {
      dispatch(searchNewsThunk(page));
    },
    [dispatch]
  );

  return {
    data,
    loading,
    error,
    keyword,
    totalResults,
    onFetchNews,
    onSubmitInput,
    onPageMove,
  };
}
