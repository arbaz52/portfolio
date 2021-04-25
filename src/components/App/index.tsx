import React from "react";

import { ThemeProvider } from "styled-components";

import ThemeContext from "contexts/ThemeContext";

import { lightTheme, darkTheme } from "assets/themes";

import { TTheme } from "contexts/ThemeContext/types";

import { CSSReset, Headings } from "./styled.components";
import LazyLoad from "./components/LazyLoad";

const Navigation = React.lazy(() => import("./components/Navigation"));
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const WhatIUseStrip = React.lazy(() => import("./components/WhatIUseStrip"));
const WhatIDoSection = React.lazy(() => import("./components/WhatIDoSection"));
const LetsGetInTouchSection = React.lazy(
  () => import("./components/LetsGetInTouchSection")
);
const RelatableContentStrip = React.lazy(
  () => import("./components/RelatableContentStrip")
);
const ProjectsGallerySection = React.lazy(
  () => import("./components/ProjectsGallerySection")
);
const MySkillsAndExpertiseSection = React.lazy(
  () => import("./components/MySkillsAndExpertiseSection")
);

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
        <LazyLoad>
          <HeroSection />
        </LazyLoad>
        <LazyLoad>
          <AboutSection />
        </LazyLoad>
        <LazyLoad>
          <WhatIDoSection />
        </LazyLoad>
        <LazyLoad>
          <WhatIUseStrip />
        </LazyLoad>
        <LazyLoad>
          <MySkillsAndExpertiseSection />
        </LazyLoad>
        <LazyLoad>
          <ProjectsGallerySection />
        </LazyLoad>
        <LazyLoad>
          <RelatableContentStrip />
        </LazyLoad>
        <LazyLoad>
          <LetsGetInTouchSection />
        </LazyLoad>
        <LazyLoad>
          <Navigation />
        </LazyLoad>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
