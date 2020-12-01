import React from "react";
import styled from "styled-components";
import NewsContainer from "containers/NewsContainer";
import SearchContainer from "containers/SearchContainer";
import PageContainer from "containers/PageContainer";
import HeaderContainer from "containers/HeaderContainer";

const PageWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = React.memo(() => {
  return (
    <PageWrapper>
      <HeaderContainer />
      <SearchContainer />
      <NewsContainer />
      <PageContainer />
    </PageWrapper>
  );
});

export default MainPage;
