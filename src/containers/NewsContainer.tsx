import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk } from "reducers/news";
import NewsList from "components/NewsList";
import Search from "components/Search";

const NewsContainer: React.FC = () => {
  const { data, loading, error, keyword } = useSelector((state: RootState) => ({
    data: state.news.news.data,
    loading: state.news.news.loading,
    error: state.news.news.error,
    keyword: state.news.text,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const onFetch = () => {
      dispatch(getNewsThunk());
    };
    onFetch();
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러남</div>;
  return <NewsList data={data} />;
};

export default NewsContainer;
