import React from "react";
import NewsContainer from "containers/NewsContainer";
import SearchContainer from "containers/SearchContainer";
import PageContainer from "containers/PageContainer";
const MainPage = () => {
  return (
    <div>
      <SearchContainer />
      <NewsContainer />
      <PageContainer />
    </div>
  );
};

export default MainPage;
