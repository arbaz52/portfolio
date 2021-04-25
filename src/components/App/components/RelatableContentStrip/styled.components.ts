import styled from "assets/themes";
import breakpoints from "assets/themes/breakpoints";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const TitleWithNumber = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 800;
  }
`;
