import React from "react";

import Icon from "components/Icon";

import { ISocialLinksProps } from "./types";

import { IconLink, SocialLinksWrapper } from "./styled.components";

const SocialLinks: React.FC<ISocialLinksProps> = ({ className, style }) => (
  <SocialLinksWrapper style={style} className={className}>
    <IconLink
      target="_blank"
      title="Medium Blog"
      href="https://arbaz5256.medium.com/"
    >
      <Icon icon="medium" highlighted />
    </IconLink>

    <IconLink
      target="_blank"
      title="Dribbble Shots"
      href="https://dribbble.com/zabarsabar"
    >
      <Icon icon="dribbble" variant="stroke" highlighted />
    </IconLink>
    <IconLink target="_blank" title="Github" href="https://github.com/arbaz52">
      <Icon icon="github" variant="stroke" highlighted />
    </IconLink>
    <IconLink
      target="_blank"
      title="LinkedIn Profile"
      href="https://www.linkedin.com/in/arbaz-ajaz/"
    >
      <Icon icon="linkedin" variant="stroke" highlighted />
    </IconLink>
    <IconLink
      target="_blank"
      title="Business Email"
      href="mailto:arbaz5256@gmail.com"
    >
      <Icon icon="mail" variant="stroke" highlighted />
    </IconLink>
  </SocialLinksWrapper>
);

export default SocialLinks;
