import { FC, memo } from "react";

import Typography from "components/Typography";

import { IBoxProps } from "./types";

import { BoxWrapper, ContentWrapper, SubTitle } from "./styled.components";

const Box: FC<IBoxProps> = memo(
  ({ icon, subTitle, title, children, active, style, className }) => {
    return (
      <BoxWrapper
        className={[active ? "active" : "", className].join(" ")}
        style={style}
      >
        {icon}
        {!!subTitle && (
          <Typography variant="secondary">
            <SubTitle>{subTitle}</SubTitle>
          </Typography>
        )}
        <h6>{title}</h6>
        <ContentWrapper className="content">{children}</ContentWrapper>
      </BoxWrapper>
    );
  }
);

export default Box;
