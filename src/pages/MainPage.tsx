import React from "react";
import NewsContainer from "containers/NewsContainer";
import SearchContainer from "containers/SearchContainer";
const MainPage = () => {
  return (
    <div>
      <SearchContainer />
      <NewsContainer />
    </div>
  );
};

export default MainPage;
