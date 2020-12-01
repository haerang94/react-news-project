import React from "react";
import { ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" exact={true} component={MainPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
    </ThemeProvider>
  );
};

export default App;
