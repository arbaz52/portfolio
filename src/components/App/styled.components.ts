import { createGlobalStyle } from "assets/themes";

export const CSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  
`;

export const Headings = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
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
