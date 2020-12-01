import React from "react";
import useNews from "customHooks/useNews";
import Page from "components/Page";

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
