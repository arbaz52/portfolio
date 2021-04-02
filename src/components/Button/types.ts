export interface IButtonProps {
  prefix?: string;
  suffix?: string;

  background?: string;
  contentColor?: string;

  ////////
  // link
  ////////
  as?: any;
  href?: string;
  target?: string;
  download?: boolean;

  size?: "small" | "medium";
  variation?: "filled" | "plain" | "outlined";
  onClick?: () => void;
}
