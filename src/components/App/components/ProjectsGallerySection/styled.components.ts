import styled from "assets/themes";

import _Box from "components/Box";

export const BoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 8px;
`;

export const Box = styled(_Box)`
  width: 304px;
  &.active {
    /* box-shadow: 0 0 10px ${(props) => props.theme.colors.accent}; */
  }
`;

export const IconsWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  gap: 16px;
`;
