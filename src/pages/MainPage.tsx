import React from "react";
import NewsContainer from "containers/NewsContainer";
import SearchContainer from "containers/SearchContainer";
import PageContainer from "containers/PageContainer";
import HeaderContainer from "containers/HeaderContainer";
const MainPage = React.memo(() => {
  return (
    <div>
      <HeaderContainer />
      <SearchContainer />
      <NewsContainer />
      <PageContainer />
    </div>
  );
});

export default MainPage;
