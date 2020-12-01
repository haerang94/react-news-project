import React from "react";
import useNews from "customHooks/useNews";
import Page from "components/Page";

// 페이지 이동 버튼 컨테이너
const PageContainer = React.memo(() => {
  const { keyword, totalResults, onPageMove } = useNews();

  return (
    <Page
      totalResults={totalResults}
      onPageMove={onPageMove}
      keyword={keyword}
    ></Page>
  );
});

export default PageContainer;
