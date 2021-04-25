import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";
import Icon from "components/Icon";
import { transparentize } from "polished";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 48px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 700px;
  width: 100%;
`;

export const BoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  grid-gap: 24px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: row;
    margin-right: -24px;
    margin-left: -24px;
    padding-left: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const PillsWrapper = styled.div`
  gap: 4px;
  display: flex;
  flex-wrap: wrap;

  display: none;
  @media only screen and (max-width: ${breakpoints.md}) {
    display: flex;
  }
`;
export const Pill = styled.div<{ highlighted?: boolean }>`
  transform-origin: left;

  transform: scale(0.875);
  padding: 8px 24px;

  display: flex;
  gap: 12px;

  border-radius: 32px;

  border: 1px solid transparent;
  border-color: ${({ highlighted, theme }) =>
    highlighted && theme.colors.accent};

  background: ${({
    highlighted,
    theme: {
      colors: { backgroundHighlighted, secondaryText },
    },
  }) =>
    highlighted ? backgroundHighlighted : transparentize(0.875, secondaryText)};
`;

export const PillIcon = styled(Icon)`
  transform: scale(0.875);
`;
