import { FC, lazy, useMemo, useReducer } from "react";

import { ThemeProvider } from "styled-components";

import ThemeContext from "contexts/ThemeContext";

import { lightTheme, darkTheme } from "assets/themes";

import { TTheme } from "contexts/ThemeContext/types";

import { CSSReset, Headings } from "./styled.components";
import LazyLoad from "./components/LazyLoad";
import { IRSSFeedData } from "./types";
import { IArticle, IArticlesContext } from "contexts/ArticlesContext/types";
import useAxios from "hooks/useAxios";
import ArticlesContext from "contexts/ArticlesContext";

const Navigation = lazy(() => import("./components/Navigation"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const WhatIUseStrip = lazy(() => import("./components/WhatIUseStrip"));
const WhatIDoSection = lazy(() => import("./components/WhatIDoSection"));
const ArticlesSection = lazy(() => import("./components/ArticlesSection"));
const LetsGetInTouchSection = lazy(
  () => import("./components/LetsGetInTouchSection")
);
const RelatableContentStrip = lazy(
  () => import("./components/RelatableContentStrip")
);
const ProjectsGallerySection = lazy(
  () => import("./components/ProjectsGallerySection")
);
const MySkillsAndExpertiseSection = lazy(
  () => import("./components/MySkillsAndExpertiseSection")
);

const App: FC = () => {
  const [theme, toggleTheme] = useReducer(
    (_theme: TTheme) => (_theme === "Dark" ? "Light" : "Dark") as TTheme,
    "Dark"
  );

  const { data: feedData, loading } = useAxios<IRSSFeedData>(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40arbaz5256"
  );

  const articles = useMemo<IArticle[]>(() => {
    return (
      feedData?.items.map(({ title, link, description: content }) => ({
        link,
        title,
        content,
      })) ?? []
    );
  }, [feedData]);

  const currentTheme = useMemo(
    () => (theme === "Dark" ? darkTheme : lightTheme),
    [theme]
  );

  const articlesContext = useMemo<IArticlesContext>(
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
