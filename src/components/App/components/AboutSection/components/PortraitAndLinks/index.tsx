import Svg from "components/Svg";
import React from "react";

import { PortraitAndLinksWrapper, SocialLinks } from "./styled.components";

const PortraitAndLinks: React.FC = () => (
  <PortraitAndLinksWrapper>
    <Svg icon="portrait" />
    <SocialLinks />
  </PortraitAndLinksWrapper>
);

export default PortraitAndLinks;
