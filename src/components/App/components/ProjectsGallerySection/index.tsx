import { FC, memo } from "react";

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
import { IconLink } from "components/SocialLinks/styled.components";
import { ButtonsWrapper } from "../HeroSection/styled.components";
import Button from "components/Button";

const ProjectsGallerySection: FC = () => {
  return (
    <Section id="gallery">
      <ContentWrapper>
        <TextWrapper>
          <h5>Projects Gallery</h5>
          <Typography variant="body" lead>
            Some projects I have recently designed.
          </Typography>
          <ButtonsWrapper>
            <Button
              as="a"
              href="https://github.com/arbaz52"
              target="_blank"
              size="small"
              variation="outlined"
            >
              Github Projects
            </Button>
            <Button
              as="a"
              href="https://dribbble.com/zabarsabar"
              target="_blank"
              size="small"
              variation="outlined"
            >
              Dribbble Shots
            </Button>
            <Button
              as="a"
              href="https://arbaz5256.medium.com/"
              target="_blank"
              size="small"
              variation="outlined"
            >
              Medium Articles
            </Button>
          </ButtonsWrapper>
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
                  <IconLink
                    target="_blank"
                    href="https://www.figma.com/file/bqzsYDStp4e6bYW5sVhKen/notta.?node-id=0%3A1"
                  >
                    <Icon icon="figma" variant="stroke" />
                  </IconLink>
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
                  <IconLink
                    target="_blank"
                    href="https://www.figma.com/file/wTUYPJ5kAnotTTfzvo2MKj/Flight-Planner?node-id=0%3A1"
                  >
                    <Icon icon="figma" variant="stroke" />
                  </IconLink>

                  <IconLink
                    target="_blank"
                    href="https://github.com/arbaz52/planearly"
                  >
                    <Icon icon="github" variant="stroke" />
                  </IconLink>
                </IconsWrapper>
              </BoxContentWrapper>
            </Box>
          </div>
        </BoxesWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default memo(ProjectsGallerySection);
