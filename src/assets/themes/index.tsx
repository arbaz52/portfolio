import * as styledCompnents from "styled-components";

import baseStyled, {
  ThemedStyledInterface,
  ThemedStyledComponentsModule,
} from "styled-components";

const styled = baseStyled as ThemedStyledInterface<{}>;

export const {
  createGlobalStyle,
  css,
} = styledCompnents as ThemedStyledComponentsModule<{}>;

export default styled;
