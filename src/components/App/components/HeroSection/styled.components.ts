import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  gap: 24px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const South = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  align-items: center;
  justify-content: center;

  padding-bottom: 24px;
`;

export const Tagline = styled.h5`
  gap: 8px;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${breakpoints.lg}) {
    & span:first-child {
      ::after {
        margin-left: 8px;
        content: "|";
      }
    }
  }
  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;
