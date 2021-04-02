import Box from "components/Box";
import Icon from "components/Icon";
import Typography from "components/Typography";
import React from "react";

import {
  BoxesWrapper,
  ContentWrapper,
  Section,
  TextWrapper,
} from "./styled.components";

const MySkillsAndExpertiseSection: React.FC = () => {
  return (
    <Section>
      <ContentWrapper>
        <TextWrapper>
          <h5>My Skills and Expertise</h5>
          <Typography variant="highlighted" lead>
            I started coding when I was in 10th grade, it has been 7 years since
            and I still get excited when I learn or use something new.
          </Typography>
        </TextWrapper>
        <BoxesWrapper>
          <div>
            <Box active title="ReactJS">
              <Typography variant="secondary">
                I have been working as a ReactJS Developer at Embrace IT
                Pakistan and is <b>actively working on new ideas.</b>
              </Typography>
            </Box>
          </div>
          <div>
            <Box title="HTML5, CSS3, Javascript">
              <Typography variant="secondary">
                I have developed over 2 dozen websites with and without
                frameworks.
              </Typography>
            </Box>
          </div>
        </BoxesWrapper>
        <BoxesWrapper>
          <div>
            <Box title="Figma and Adobe XD">
              <Typography variant="secondary">
                I have been using Figma for over 6 months now for{" "}
                <b>designing user interfaces</b> and to manipulate SVGs
              </Typography>
            </Box>
          </div>
          <div>
            <Box title="Wordpress">
              <Typography variant="secondary">
                During my career as a freelancer, I designed and developed
                E-commerce websites and landing pages using wordpress.
              </Typography>
            </Box>
          </div>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default MySkillsAndExpertiseSection;
