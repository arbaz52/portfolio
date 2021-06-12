import Box from "components/Box";
import Icon from "components/Icon";
import Typography from "components/Typography";
import React from "react";

import {
  BoxesWrapper,
  ContentWrapper,
  Pill,
  Section,
  TextWrapper,
  PillIcon,
  PillsWrapper,
  SingleColumnBoxesWrapper,
} from "./styled.components";

const WhatIDoSection: React.FC = () => {
  return (
    <Section id="work">
      <ContentWrapper>
        <TextWrapper>
          <h5>What I do</h5>
        </TextWrapper>
        <PillsWrapper>
          <Pill highlighted>
            <PillIcon icon="figma" variant="stroke" />
            <h6>Design Websites</h6>
          </Pill>
          <Pill >
            <PillIcon icon="pen" variant="stroke" />
            <h6>Write Articles</h6>
          </Pill>
          <Pill>
            <PillIcon icon="code" variant="stroke" />
            <h6>Develop Websites</h6>
          </Pill>
        </PillsWrapper>
        <SingleColumnBoxesWrapper>
          <Box
            active
            icon={<Icon icon="figma" variant="stroke" />}
            title="Design Websites"
          >
            <Typography variant="secondary">
              I use Figma for designing, I do my research, look for fonts and
              colors that my client loves and are appreciated by the industry
              the client’s website is targeting.
            </Typography>
          </Box>
          <Box
            icon={<Icon icon="pen" variant="stroke" />}
            title="Write Articles"
          >
            <Typography variant="secondary">
              Writing about solutions for the problems I face and solve through
              reading documentations, figuring out why is it happening in the
              first place and how can we fix it.
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
        </SingleColumnBoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default React.memo(WhatIDoSection);
