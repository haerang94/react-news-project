import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk, searchNewsThunk, setNews } from "reducers/news";
import { Article } from "types/article";

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
  //  초기 데이터 가져오기
  const onFetchNews = useCallback(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);
  // 검색어로 데이터 가져오기
  const onSubmitInput = useCallback(
    (text: string) => {
      dispatch(searchNewsThunk(text));
    },
    [dispatch]
  );
  // 페이지 버튼 이동시 데이터 가져오기 text는 검색어 page는 현재 버튼 위치
  const onPageMove = useCallback(
    (text: string | null, page: number = 1) => {
      if (text === null) {
        dispatch(getNewsThunk(page));
      } else {
        dispatch(searchNewsThunk(text, page));
      }
    },
    [dispatch]
  );
  //  정렬 후 데이터 저장하기
  const onSetNews = useCallback(
    (sortedData: Article[]) => {
      dispatch(setNews(sortedData));
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
    onSetNews,
  };
}
