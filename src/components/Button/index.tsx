import { FC } from "react";

import { Button as ButtonEl, Icon } from "./styled.components";

import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
  as,
  href,
  prefix,
  suffix,
  target,
  children,
  download,
  ...props
}) => {
  return (
    <ButtonEl
      as={as}
      href={href}
      target={target}
      download={download}
      {...props}
    >
      {prefix && <Icon {...props} icon={prefix} />}
      {children}
      {suffix && <Icon {...props} icon={suffix} />}
    </ButtonEl>
  );
};

export default Button;
