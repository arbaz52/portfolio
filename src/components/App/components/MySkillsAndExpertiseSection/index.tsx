import { FC, memo } from "react";
import Box from "components/Box";
import Typography from "components/Typography";

import {
  BoxesWrapper,
  ContentWrapper,
  Pill,
  PillIcon,
  PillsWrapper,
  Section,
  TextWrapper,
} from "../WhatIDoSection/styled.components";

const MySkillsAndExpertiseSection: FC = () => {
  return (
    <Section id="skills">
      <ContentWrapper>
        <TextWrapper>
          <h5>My Skills and Expertise</h5>
          <Typography variant="body" lead>
            I started coding when I was in 10th grade, it has been 7 years since
            and I still get excited when I learn or use something new.
          </Typography>
        </TextWrapper>

        <PillsWrapper>
          <Pill highlighted>
            <PillIcon icon="code" variant="stroke" />
            <h6>ReactJS</h6>
          </Pill>
          <Pill>
            <PillIcon icon="code" variant="stroke" />
            <h6>HTML5, CSS3, Javascript</h6>
          </Pill>
          <Pill>
            <PillIcon icon="pen" variant="stroke" />
            <h6>Figma and Adobe XD</h6>
          </Pill>
          <Pill>
            <PillIcon icon="pen" variant="stroke" />
            <h6>Wordpress</h6>
          </Pill>
        </PillsWrapper>

        <BoxesWrapper>
          <Box active title="ReactJS">
            <Typography variant="secondary">
              I have been working as a ReactJS Developer at Embrace IT Pakistan
              and is <b>actively working on new ideas.</b>
            </Typography>
          </Box>
          <Box title="HTML5, CSS3, Javascript">
            <Typography variant="secondary">
              I have developed over 2 dozen websites with and without
              frameworks.
            </Typography>
          </Box>
          <Box title="Figma and Adobe XD">
            <Typography variant="secondary">
              I have been using Figma for over 6 months now for{" "}
              <b>designing user interfaces</b> and to manipulate SVGs
            </Typography>
          </Box>
          <Box title="Wordpress">
            <Typography variant="secondary">
              During my career as a freelancer, I designed and developed
              E-commerce websites and landing pages using wordpress.
            </Typography>
          </Box>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default memo(MySkillsAndExpertiseSection);
