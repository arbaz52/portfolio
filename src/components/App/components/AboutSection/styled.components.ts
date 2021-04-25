import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  gap: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;
