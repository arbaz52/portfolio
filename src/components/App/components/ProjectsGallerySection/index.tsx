import React from "react";

import Typography from "components/Typography";

import NottaSnapShot from "assets/svgs/notta.svg";
import PlanearlySnapShot from "assets/svgs/planearly.svg";

import {
  BoxesWrapper,
  ContentWrapper,
  Section,
  TextWrapper,
} from "../WhatIDoSection/styled.components";
import { BoxContentWrapper, Box, IconsWrapper } from "./styled.components";
import Icon from "components/Icon";

const ProjectsGallerySection: React.FC = () => {
  return (
    <Section>
      <ContentWrapper>
        <TextWrapper>
          <h5>Projects Gallery</h5>
          <Typography variant="body" lead>
            Some projects I have recently designed.
          </Typography>
        </TextWrapper>
        <BoxesWrapper>
          <div>
            <Box active title="Notta">
              <BoxContentWrapper>
                <NottaSnapShot />
                <Typography variant="secondary">
                  A note keeping app design using figma.
                </Typography>
                <IconsWrapper>
                  <Icon icon="figma" variant="stroke" />
                </IconsWrapper>
              </BoxContentWrapper>
            </Box>
          </div>
          <div>
            <Box title="Planearly">
              <BoxContentWrapper>
                <PlanearlySnapShot />
                <Typography variant="secondary">
                  Task assigned during hiring process by XGrid.
                </Typography>
                <IconsWrapper>
                  <Icon icon="figma" variant="stroke" />
                  <Icon icon="github" variant="stroke" />
                </IconsWrapper>
              </BoxContentWrapper>
            </Box>
          </div>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default ProjectsGallerySection;
