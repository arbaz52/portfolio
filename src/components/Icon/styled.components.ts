import styled, { css } from "assets/themes";

import Svg from "components/Svg";

import { IIconProps } from "./types";

export const Icon = styled(Svg)<IIconProps>`
  * {
    ${(props) => {
      switch (props.variant) {
        case "stroke":
          return `
            stroke: ${props.color || props.theme.colors.icon};
          `;

        case "fill":
        default:
          return `
            fill: ${props.color || props.theme.colors.icon};
          `;
      }
    }}
  }
`;
