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
            <Box
              icon={<Icon icon="code" variant="stroke" />}
              title="Develop Websites"
            >
              <Typography variant="secondary">
                Choosing a framework/platform mostly depends on two things, the
                target client is trying to achieve with the website and client’s
                technical know-how.
              </Typography>
            </Box>
          </div>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default MySkillsAndExpertiseSection;
