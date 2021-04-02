import styled from "assets/themes";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const ContentWrapper = styled.div`
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;
