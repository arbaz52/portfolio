import styled from "assets/themes";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

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
`;

export const ContentWrapper = styled.div``;
