import React from "react";
import { ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" exact={true} component={MainPage}></Route>
      <Route path="/detail/:idx" component={DetailPage}></Route>
    </ThemeProvider>
  );
};

export default App;
