import React from "react";

import { ThemeProvider } from "styled-components";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhatIDoSection from "./components/WhatIDoSection";
import ProjectsGallerySection from "./components/ProjectsGallerySection";

import ThemeContext from "contexts/ThemeContext";

import { lightTheme, darkTheme } from "assets/themes";

import { TTheme } from "contexts/ThemeContext/types";

import { CSSReset, Headings } from "./styled.components";
import MySkillsAndExpertiseSection from "./components/MySkillsAndExpertiseSection";
import LetsGetInTouchSection from "./components/LetsGetInTouchSection";
import WhatIUseStrip from "./components/WhatIUseStrip";
import RelatableContentStrip from "./components/RelatableContentStrip";
import Navigation from "./components/Navigation";

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
        <AboutSection />
        <WhatIDoSection />
        <WhatIUseStrip />
        <MySkillsAndExpertiseSection />
        <ProjectsGallerySection />
        <RelatableContentStrip />
        <LetsGetInTouchSection />
        <Navigation />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
