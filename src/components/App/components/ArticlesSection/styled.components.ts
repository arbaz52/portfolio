import Quill from "react-quill";

import styled from "assets/themes";

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
			padding: unset;
		}
  }
	* {
		all: unset;
		font-size: 16px;
		line-height: 24px;
	}
`;
