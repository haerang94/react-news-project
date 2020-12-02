import React, { useEffect, useState } from "react";
import NewsList from "components/NewsList";
import useNews from "customHooks/useNews";
import useBookmark from "customHooks/useBookmark";

//  뉴스 카드 정보 컨테이너
const NewsContainer = React.memo(() => {
  const { data, loading, error, onFetchNews } = useNews();
  const { makeBookMark, mark } = useBookmark();
  useEffect(() => {
    onFetchNews();
  }, [onFetchNews]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러남</div>;
  return (
    <NewsList
      data={data}
      makeBookMark={makeBookMark}
      mark={mark}
      toggleEdit={() => {}}
    />
  );
});

export default NewsContainer;
