import React from "react";

import { IBoxProps } from "./types";

import { BoxWrapper, ContentWrapper } from "./styled.components";

const Box: React.FC<IBoxProps> = ({ icon, title, children, active }) => {
  return (
    <BoxWrapper className={active ? "active" : ""}>
      {icon}
      <h6>{title}</h6>
      <ContentWrapper className="content">{children}</ContentWrapper>
    </BoxWrapper>
  );
};

export default Box;
