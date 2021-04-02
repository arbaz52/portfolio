import React from "react";

import Icon from "components/Icon";

import { ISocialLinksProps } from "./types";

import { IconLink, SocialLinksWrapper } from "./styled.components";

const SocialLinks: React.FC<ISocialLinksProps> = ({ className, style }) => (
  <SocialLinksWrapper style={style} className={className}>
    <IconLink title="Medium Blog" href="https://arbaz5256.medium.com/">
      <Icon icon="medium" color="white" />
    </IconLink>

    <IconLink title="Dribbble Shots" href="https://dribbble.com/zabarsabar">
      <Icon icon="dribbble" variant="stroke" color="white" />
    </IconLink>
    <IconLink title="Github" href="https://github.com/arbaz52">
      <Icon icon="github" variant="stroke" color="white" />
    </IconLink>
    <IconLink
      title="LinkedIn Profile"
      href="https://www.linkedin.com/in/arbaz-ajaz/"
    >
      <Icon icon="linkedin" variant="stroke" color="white" />
    </IconLink>
    <IconLink title="Business Email" href="mailto:arbaz5256@gmail.com">
      <Icon icon="mail" variant="stroke" color="white" />
    </IconLink>
  </SocialLinksWrapper>
);

export default SocialLinks;
