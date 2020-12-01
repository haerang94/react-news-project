import React from "react";
import useNews from "customHooks/useNews";
import Page from "components/Page";

const PageContainer = React.memo(() => {
  const { totalResults, onPageMove } = useNews();

  return <Page totalResults={totalResults} onPageMove={onPageMove}></Page>;
});

export default PageContainer;
