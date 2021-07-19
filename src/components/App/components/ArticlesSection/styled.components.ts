import styled from "assets/themes";
import { BoxesWrapper } from "../WhatIDoSection/styled.components";

export const BoxContentWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const BoxesWrapperReplaceFractions = styled(BoxesWrapper)`
  grid-template-columns: 100%;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
