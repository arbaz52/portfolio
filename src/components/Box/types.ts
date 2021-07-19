import { ReactNode, CSSProperties } from "react";
export interface IBoxProps {
  title: string;

  icon?: ReactNode;
  active?: boolean;
  subTitle?: string;
  className?: string;
  style?: CSSProperties;
}
