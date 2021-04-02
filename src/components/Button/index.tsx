import React from "react";

import { Button as ButtonEl, Icon } from "./styled.components";

import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  children,
  prefix,
  suffix,
  as,
  href,
  target,
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
