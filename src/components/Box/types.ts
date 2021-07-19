import { ReactNode, CSSProperties } from "react";
export interface IBoxProps {
  icon?: ReactNode;
  title: string;
  active?: boolean;

  style?: CSSProperties;
  className?: string;
}
