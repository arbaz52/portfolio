import React from "react";

import AboutMe from "./components/AboutMe";
import PortraitAndLinks from "./components/PortraitAndLinks";

import { Section } from "./styled.components";

const AboutSection: React.FC = () => {
  return (
    <Section>
      <PortraitAndLinks />
      <AboutMe />
    </Section>
  );
};

export default AboutSection;