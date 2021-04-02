import styled from "assets/themes";

import { Section as _Section } from "../../styled.components";

export const Section = styled(_Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  align-items: center;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const South = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  align-items: center;
  justify-content: center;

  padding-bottom: 24px;
`;
