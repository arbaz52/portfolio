import React from "react";

import Icon from "components/Icon";
import Button from "components/Button";
import Typography from "components/Typography";

import { ContentWrapper, Section } from "./styled.components";
import SocialLinks from "components/SocialLinks";

const LetsGetInTouchSection: React.FC = () => {
  return (
    <Section>
      <Icon icon="mail-64" variant="stroke" color="white" />
      <ContentWrapper>
        <h5>Let's Get In Touch!</h5>
        <Typography variant="body">I would love to hear from you!.</Typography>
        <Typography variant="secondary">
          If you have any questions, or would like to work with me or just want
          to leave me a message,
        </Typography>
      </ContentWrapper>
      <Button
        as="a"
        href="https://www.linkedin.com/in/arbaz-ajaz/"
        size="small"
        prefix="chat-bubbles"
        target="_blank"
      >
        Message me on LinkedIn
      </Button>
      <SocialLinks />
    </Section>
  );
};

export default LetsGetInTouchSection;
