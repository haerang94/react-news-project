import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      test
    </ThemeProvider>
  );
};

export default App;
