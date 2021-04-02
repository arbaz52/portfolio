import React from "react";


import { Button as ButtonEl, Icon } from "./styled.components";

import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  children,
  prefix,
  suffix,
  ...props
}) => {
  return (
    <ButtonEl {...props}>
      {prefix && <Icon {...props} icon={prefix} />}
      {children}
      {suffix && <Icon {...props} icon={suffix} />}
    </ButtonEl>
  );
};

export default Button;
