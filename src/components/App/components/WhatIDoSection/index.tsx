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

const WhatIDoSection: React.FC = () => {
  return (
    <Section id="work">
      <ContentWrapper>
        <TextWrapper>
          <h5>What I do</h5>
        </TextWrapper>
        <BoxesWrapper>
          <Box
            active
            icon={<Icon icon="pen" variant="stroke" />}
            title="Design Websites"
          >
            <Typography variant="secondary">
              I use Figma for designing, I do my research, look for fonts and
              colors that my client loves and are appreciated by the industry
              the client’s website is targeting.
            </Typography>
          </Box>
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
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default WhatIDoSection;
