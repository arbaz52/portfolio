import { FC } from "react";
import Svg from "components/Svg";

import { PortraitAndLinksWrapper, SocialLinks } from "./styled.components";

const PortraitAndLinks: FC = () => (
  <PortraitAndLinksWrapper>
    <Svg icon="portrait" />
    <SocialLinks />
  </PortraitAndLinksWrapper>
);

export default PortraitAndLinks;
