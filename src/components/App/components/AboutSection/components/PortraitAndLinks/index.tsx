import React from "react";

import Portrait from "assets/svgs/portrait.svg";

import { PortraitAndLinksWrapper, SocialLinks } from "./styled.components";

const PortraitAndLinks: React.FC = () => (
  <PortraitAndLinksWrapper>
    <Portrait />
    <SocialLinks />
  </PortraitAndLinksWrapper>
);

export default PortraitAndLinks;
