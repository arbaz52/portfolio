import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

import _SocialLinks from "components/SocialLinks";

export const PortraitAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (max-width: ${breakpoints.md}) {
    align-self: flex-start;
  }
`;

export const SocialLinks = styled(_SocialLinks)`
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
