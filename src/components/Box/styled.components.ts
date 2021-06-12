import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

export const BoxWrapper = styled.div`
  gap: 16px;
  padding: 16px;
  display: flex;
  height: fit-content;
  flex-direction: column;

  border: 1px solid transparent;

  /* :hover, */
  &.active {
    border-color: ${(props) => props.theme.colors.accent};
    background: ${(props) => props.theme.colors.backgroundHighlighted};

    & .content {
      * {
        color: ${(props) => props.theme.colors.bodyText};
      }
    }
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    width: 80%;
    flex: unset;
    flex-shrink: 0;
  }
`;

export const ContentWrapper = styled.div``;
