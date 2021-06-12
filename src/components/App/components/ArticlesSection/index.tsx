import "quill/dist/quill.snow.css";

import React from "react";

import Box from "components/Box";
import Link from "components/Link";
import Typography from "components/Typography";

import {
  Pill,
  Section,
  PillIcon,
  TextWrapper,
  PillsWrapper,
  BoxesWrapper,
  ContentWrapper,
} from "../WhatIDoSection/styled.components";
import { BoxContentWrapper, HTMLPreviewer } from "./styled.components";
import { FixedLinesTypography } from "components/Link/styled.components";

const MySkillsAndExpertiseSection: React.FC = () => {
  return (
    <Section id="skills">
      <ContentWrapper>
        <TextWrapper>
          <h5>Articles I have written recently</h5>
          <Typography variant="body" lead>
            Big fan of learnig new things, so when i solve a new problem i
            publish the solution.
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
            <BoxContentWrapper>
              <FixedLinesTypography variant="secondary">
                <HTMLPreviewer
                  readOnly
                  value={`<h3>Use useEffect hook effectively as a callback for state changes.</h3> <p>Bare with me, let me explain the scenario first.</p> <p>Imagine you need to do something, i.e. call a function when a state updates, easiest way in React would be to use React.useEffect and use the state as the dependency so the hook fires every time the state updates.</p> <p>But according to the documentation, the dependency array should contain things i.e`}
                />
              </FixedLinesTypography>
              <Link href="link to article">Read more...</Link>
            </BoxContentWrapper>
          </Box>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default MySkillsAndExpertiseSection;
