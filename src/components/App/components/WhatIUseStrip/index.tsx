import { FC, memo } from "react";

import { IconWithText } from "components/App/styled.components";
import Icon from "components/Icon";
import { ContentWrapper, Stripe } from "./styled.components";

const WhatIUseStrip: FC = () => (
  <Stripe id="using">
    <IconWithText>
      <Icon icon="heart" variant="stroke" highlighted />
      <h5>Platforms, Languages and Framework</h5>
    </IconWithText>
    <ContentWrapper>
      <IconWithText>
        <Icon icon="pen" variant="stroke" />
        <h6>Figma</h6>
      </IconWithText>
      <IconWithText>
        <Icon icon="github" variant="stroke" />
        <h6>Github</h6>
      </IconWithText>

      <IconWithText>
        <Icon icon="edit" variant="stroke" />
        <h6>Notion</h6>
      </IconWithText>

      <IconWithText>
        <Icon icon="code" variant="stroke" />
        <h6>HTML5, CSS3 &amp; Javascript</h6>
      </IconWithText>

      <IconWithText>
        <Icon icon="code" variant="stroke" />
        <h6>React</h6>
      </IconWithText>
    </ContentWrapper>
  </Stripe>
);

export default memo(WhatIUseStrip);
