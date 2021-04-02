import React from "react";

import { SocialLinksWrapper } from "./styled.components";
import Icon from "components/Icon";

const SocialLinks: React.FC = () => (
  <SocialLinksWrapper>
    <Icon icon="medium" color="white" />
    <Icon icon="dribbble" variant="stroke" color="white" />
    <Icon icon="github" variant="stroke" color="white" />
    <Icon icon="linkedin" variant="stroke" color="white" />
    <Icon icon="mail" variant="stroke" color="white" />
  </SocialLinksWrapper>
);

export default SocialLinks;
