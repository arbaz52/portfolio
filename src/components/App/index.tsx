import React from "react";

import { ThemeProvider } from "styled-components";

import HeroSection from "./components/HeroSection";

import ThemeContext from "contexts/ThemeContext";

import { lightTheme, darkTheme } from "assets/themes";

import { TTheme } from "contexts/ThemeContext/types";

import { CSSReset, Headings, Section } from "./styled.components";

const App: React.FC = () => {
  const [theme, toggleTheme] = React.useReducer(
    (_theme: TTheme) => (_theme === "Dark" ? "Light" : "Dark") as TTheme,
    "Dark"
  );
  const currentTheme = React.useMemo(
    () => (theme === "Dark" ? darkTheme : lightTheme),
    [theme]
  );
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CSSReset />
        <Headings />
        <HeroSection />
        <Section />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
