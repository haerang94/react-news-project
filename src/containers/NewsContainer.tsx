import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk } from "reducers/news";
import NewsList from "components/NewsList";
import Search from "components/Search";

const NewsContainer: React.FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const onFetch = () => {
      dispatch(getNewsThunk());
    };
    onFetch();
  }, [dispatch]);

  console.log(data);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러남</div>;
  return (
    <>
      <Search />
      <NewsList data={data} />
    </>
  );
};

export default NewsContainer;
