import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

import _SocialLinks from "components/SocialLinks";

export const PortraitAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (max-width: ${breakpoints.md}) {
    align-self: flex-start;

    max-width: 450px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const SocialLinks = styled(_SocialLinks)`
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
