import React from "react";

import Button from "components/Button";

import PortraitGrey from "assets/svgs/portrait-grey.svg";

import {
  ButtonsWrapper,
  ContentWrapper,
  Section,
  South,
} from "./styled.components";
import SocialLinks from "components/SocialLinks";

const HeroSection: React.FC = () => (
  <Section id="hero">
    <span></span>
    <ContentWrapper>
      <PortraitGrey />
      <h5>Graduate in Computer Science | 3.38 CGPA</h5>
      <h1>
        ReactJS Developer
        <br />
        UI/UX Designer
      </h1>
      <ButtonsWrapper>
        <Button
          prefix="chat-bubbles"
          as="a"
          href="https://www.linkedin.com/in/arbaz-ajaz/"
          target="_blank"
        >
          Let's Talk
        </Button>
        <Button
          prefix="download"
          variation="outlined"
          as="a"
          target="_blank"
          download
          href="/portfolio/Resume - Arbaz Ajaz.pdf"
        >
          Download My Resume
        </Button>
      </ButtonsWrapper>
    </ContentWrapper>
    <South>
      <SocialLinks />
      <Button prefix="arrow-down" variation="plain">
        Scroll to see more
      </Button>
    </South>
  </Section>
);

export default HeroSection;
