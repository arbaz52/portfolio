import React from "react";

import { ThemeProvider } from "styled-components";

import ThemeContext from "contexts/ThemeContext";

import { lightTheme, darkTheme } from "assets/themes";

import { TTheme } from "contexts/ThemeContext/types";

import { CSSReset, Headings } from "./styled.components";
import LazyLoad from "./components/LazyLoad";
import axios from "axios";
import { IRSSFeedData } from "./types";
import { IArticle, IArticlesContext } from "contexts/ArticlesContext/types";
import useAxios from "hooks/useAxios";
import ArticlesContext from "contexts/ArticlesContext";

const Navigation = React.lazy(() => import("./components/Navigation"));
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const WhatIUseStrip = React.lazy(() => import("./components/WhatIUseStrip"));
const WhatIDoSection = React.lazy(() => import("./components/WhatIDoSection"));
const ArticlesSection = React.lazy(
  () => import("./components/ArticlesSection")
);
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

  const {
    data: feedData,
    loading,
    error,
  } = useAxios<IRSSFeedData>(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40arbaz5256"
  );

  const articles = React.useMemo<IArticle[]>(() => {
    return (
      feedData?.items
        .map(({ title, link, description: content }) => ({
          link,
          title,
          content,
        }))
        .slice(0, 5) ?? []
    );
  }, [feedData]);

  const currentTheme = React.useMemo(
    () => (theme === "Dark" ? darkTheme : lightTheme),
    [theme]
  );

  const articlesContext = React.useMemo<IArticlesContext>(
    () => ({
      articles,
      loading,
    }),
    [articles, loading]
  );

  return (
    <ArticlesContext.Provider value={articlesContext}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={currentTheme}>
          <CSSReset />
          <Headings />
          <LazyLoad>
            <HeroSection />
          </LazyLoad>{" "}
          <LazyLoad>
            <AboutSection />
          </LazyLoad>
          <LazyLoad>
            <ArticlesSection />
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
    </ArticlesContext.Provider>
  );
};

export default App;
