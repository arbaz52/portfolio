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
  accent: "#EE5B84",
  background: "#FEF7F9",
  icon: "#757575",
  secondaryText: "#757575",
  text: "#000000",
  bodyText: "#B6B6B6",
};

export const darkTheme: ITheme = {
  accent: "#EE5B84",
  background: "#202020",
  icon: "#757575",
  secondaryText: "#757575",
  text: "#FFFFFF",
  bodyText: "#B6B6B6",
};

export const {
  createGlobalStyle,
  css,
} = (styledCompnents as unknown) as ThemedStyledComponentsModule<ITheme>;

export default styled;
