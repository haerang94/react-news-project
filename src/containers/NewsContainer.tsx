import React, { useEffect } from "react";
import NewsList from "components/NewsList";
import useNews from "customHooks/useNews";

const NewsContainer = React.memo(() => {
  const { data, loading, error, onFetchNews } = useNews();
  useEffect(() => {
    onFetchNews();
  }, [onFetchNews]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러남</div>;
  return <NewsList data={data} />;
});

export default NewsContainer;
