import Quill from "react-quill";

import styled from "assets/themes";
import { BoxesWrapper } from "../WhatIDoSection/styled.components";

export const BoxContentWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const HTMLPreviewer = styled(Quill)`
  .ql- {
    &toolbar {
      display: none;
    }
    &container {
      border: unset !important;
    }
    &editor {
      height: calc(24px * 3);
      overflow: hidden;
      padding: unset;
      * {
        box-sizing: border-box;
        all: unset;
        display: inline !important;
        font-size: 16px;
        line-height: 24px;
      }
      img {
        display: none !important;
      }
    }
  }
`;

export const BoxesWrapperReplaceFractions = styled(BoxesWrapper)`
  grid-template-columns: 50% 50%;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
