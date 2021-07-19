import { FC, memo } from "react";

import AboutMe from "./components/AboutMe";
import PortraitAndLinks from "./components/PortraitAndLinks";

import { Section } from "./styled.components";

const AboutSection: FC = () => {
  return (
    <Section id="about">
      <PortraitAndLinks />
      <AboutMe />
    </Section>
  );
};

export default memo(AboutSection);
