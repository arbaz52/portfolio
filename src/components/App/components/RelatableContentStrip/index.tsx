import React from "react";

import { IconWithText, Stripe } from "components/App/styled.components";
import Icon from "components/Icon";
import { ContentWrapper, TitleWithNumber } from "./styled.components";

const RelatableContentStrip: React.FC = () => (
  <Stripe id="relatable">
    <IconWithText>
      <Icon icon="hashtag" variant="stroke" color="white" />
      <h5>Relatable Content.</h5>
    </IconWithText>
    <ContentWrapper>
      <TitleWithNumber>
        <IconWithText>
          <Icon icon="github" variant="stroke" />
          <h6>Repositories</h6>
        </IconWithText>
        <h2>~45</h2>
      </TitleWithNumber>
      <TitleWithNumber>
        <IconWithText>
          <Icon icon="github" variant="stroke" />
          <h6>Followers</h6>
        </IconWithText>
        <h2>~04</h2>
      </TitleWithNumber>

      <TitleWithNumber>
        <IconWithText>
          <Icon icon="medium" variant="fill" />
          <h6>Articles</h6>
        </IconWithText>
        <h2>~06</h2>
      </TitleWithNumber>
    </ContentWrapper>
  </Stripe>
);

export default RelatableContentStrip;
