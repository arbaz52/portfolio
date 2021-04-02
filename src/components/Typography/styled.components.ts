import styled, { css } from "assets/themes";
import { ITypographyProps } from "./types";

export const Typography = styled.span<ITypographyProps>`
  line-height: 24px;
  letter-spacing: 1px;
  ${(props) =>
    props.lead &&
    css`
      font-size: 1.125rem;
      line-height: 24px;
    `};

  color: ${(props) => {
    const {
      theme: {
        colors: { accent, text, secondaryText, bodyText },
      },
    } = props;
    switch (props.variant) {
      case "accent":
        return accent;

      case "highlighted":
        return text;

      case "secondary":
        return secondaryText;

      case "body":
      default:
        return bodyText;
    }
  }};
`;
