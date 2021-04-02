import styled, { createGlobalStyle } from "assets/themes";

export const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;

  }

  #root {
    background: ${(props) => props.theme.colors.background};
    width: 100%;
    height: 100vh;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 6px;
      &-thumb {
        border-radius: 12px;
        background: #ccc;
      }
    }
  }
  
`;

export const Headings = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }
  h1, h2, h3, h4 {
    font-weight: 400;
  }
  h5, h6 {
    font-weight: 600;
    letter-spacing: 2px;
  }
  h1 {
    font-size: 4.209rem;
    line-height: 72px;
    letter-spacing: 0;
  }
  h2 {
    font-size: 3.157rem;
    line-height: 64px;
    letter-spacing: 0;
  }
  h3 {
    font-size: 2.369rem;
    line-height: 48px;
    letter-spacing: 0;
  }
  h4 {
    font-size: 1.777rem;
    line-height: 40px;
    letter-spacing: 0;
  }
  h5 {
    font-size: 1.333rem;
    line-height: 24px;
    letter-spacing: 0;
  }
  h6 {
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0;
  }
`;

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;
`;
