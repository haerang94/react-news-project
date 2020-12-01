import React, { useEffect, useState } from "react";
import NewsList from "components/NewsList";
import useNews from "customHooks/useNews";
import useBookmark from "customHooks/useBookmark";

const NewsContainer = React.memo(() => {
  const { data, loading, error, onFetchNews } = useNews();
  const { makeBookMark, mark } = useBookmark();
  useEffect(() => {
    onFetchNews();
  }, [onFetchNews]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러남</div>;
  return <NewsList data={data} makeBookMark={makeBookMark} mark={mark} />;
});

export default NewsContainer;
