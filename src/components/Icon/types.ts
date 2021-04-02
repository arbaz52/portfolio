import { ISvgProps } from "components/Svg/types";

export interface IIconProps extends ISvgProps {
  color?: string;
  variant?: "stroke" | "fill";
}
