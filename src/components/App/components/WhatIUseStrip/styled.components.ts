import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";
import { Stripe as _Stripe } from "components/App/styled.components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Stripe = styled(_Stripe)`
  @media only screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
