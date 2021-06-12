import styled from "assets/themes";

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.accent} !important;

  :hover {
    text-decoration: underline;
  }
`;
