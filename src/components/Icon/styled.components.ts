import styled from "assets/themes";

import Svg from "components/Svg";

import { IIconProps } from "./types";

export const Icon = styled(Svg)<IIconProps>`
  * {
    ${(props) => {
      switch (props.variant) {
        case "stroke":
          return `
            stroke: ${
              props.highlighted
                ? props.theme.colors.text
                : props.theme.colors.icon
            };
          `;

        case "fill":
        default:
          return `
            fill: ${
              props.highlighted
                ? props.theme.colors.text
                : props.theme.colors.icon
            };
          `;
      }
    }}
  }
`;
