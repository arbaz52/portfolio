import styled from "assets/themes";
import Typography from "components/Typography";

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.accent};

  :hover {
    text-decoration: underline;
  }
`;

export const FixedLinesTypography = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;
