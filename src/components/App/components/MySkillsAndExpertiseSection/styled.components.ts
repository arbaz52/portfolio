import styled from "assets/themes";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 48px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 700px;
`;

export const BoxesWrapper = styled.div`
  display: flex;
  gap: 32px;
  & > * {
    flex: 1;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;
