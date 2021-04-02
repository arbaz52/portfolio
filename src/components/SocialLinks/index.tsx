import React from "react";

import Icon from "components/Icon";

import { ISocialLinksProps } from "./types";

import { SocialLinksWrapper } from "./styled.components";

const SocialLinks: React.FC<ISocialLinksProps> = ({ className, style }) => (
  <SocialLinksWrapper style={style} className={className}>
    <Icon icon="medium" color="white" />
    <Icon icon="dribbble" variant="stroke" color="white" />
    <Icon icon="github" variant="stroke" color="white" />
    <Icon icon="linkedin" variant="stroke" color="white" />
    <Icon icon="mail" variant="stroke" color="white" />
  </SocialLinksWrapper>
);

export default SocialLinks;
