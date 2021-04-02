export interface IButtonProps {
  prefix?: string;
  suffix?: string;

  background?: string;
  contentColor?: string;

  size?: "small" | "medium";
  variation?: "filled" | "plain" | "outlined";
  onClick?: () => void;
}
