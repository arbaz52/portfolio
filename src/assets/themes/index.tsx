import * as styledCompnents from "styled-components";

import baseStyled, {
  ThemedStyledInterface,
  ThemedStyledComponentsModule,
} from "styled-components";

import { ITheme } from "./types";

const styled = baseStyled as ThemedStyledInterface<ITheme>;

//////////////
// THEMES
//////////////
export const lightTheme: ITheme = {
  colors: {
    accent: "#EE5B84",
    background: "#FEF7F9",
    backgroundHighlighted: "#FBD6E0",
    icon: "#757575",
    secondaryText: "#757575",
    text: "#000000",
    bodyText: "#6B6B6B",
  },
};

export const darkTheme: ITheme = {
  colors: {
    accent: "#EE5B84",
    background: "#202020",
    backgroundHighlighted: "#000000",
    icon: "#757575",
    secondaryText: "#757575",
    text: "#FFFFFF",
    bodyText: "#B6B6B6",
  },
};

export const {
  createGlobalStyle,
  css,
} = (styledCompnents as unknown) as ThemedStyledComponentsModule<ITheme>;

export default styled;
