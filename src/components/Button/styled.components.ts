import styled, { css } from "assets/themes";
import Svg from "components/Svg";
import { ISvgProps } from "components/Svg/types";

import { IButtonProps } from "./types";

export const Button = styled.button<IButtonProps>`
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 400;
  letter-spacing: 2px;
  /* text-transform: uppercase; */
  border: 1px solid transparent;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: 12px;
  align-items: center;
  ${(props) => {
    switch (props.size) {
      case "small":
        console.log("SMLALL");
        return css`
          font-size: 0.875rem;
          line-height: 16px;
          padding: 8px 16px;
        `;
      case "medium":
      default:
        return css`
          font-size: 1rem;
          line-height: 24px;
          padding: 16px 32px;
        `;
    }
  }}
  ${(props) => {
    switch (props.variation) {
      case "outlined":
        return css`
          background: transparent;
          border-color: ${(props) => props.theme.colors.accent};
          color: ${(props) => props.theme.colors.accent};
        `;
      case "plain":
        return css`
          color: ${(props) => props.theme.colors.accent};
        `;
      case "filled":
      default:
        return css`
          background: ${(props) => props.theme.colors.accent};
          border-color: ${(props) => props.theme.colors.accent};
          color: white;
        `;
    }
  }};
  background: ${(props) => props.background};
  color: ${(props) => props.contentColor};
`;

export const Icon = styled(Svg)<IButtonProps & ISvgProps>`
  * {
    fill: ${(props) => props.contentColor || props.theme.colors.text};
    ${(props) => {
      switch (props.variation) {
        case "outlined":
        case "plain":
          return css`
            fill: ${(props) => props.theme.colors.accent};
          `;

        case "filled":
        default:
          return css`
            fill: white;
          `;
      }
    }};
  }
`;