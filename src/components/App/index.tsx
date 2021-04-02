import React from "react";

import PortraitGrey from "assets/svgs/portrait-grey.svg";

import { CSSReset, Headings } from "./styled.components";

const App: React.FC = () => (
  <>
    <CSSReset />
    <Headings />
    <PortraitGrey />
    <h1>Hello world</h1>
  </>
);

export default App;
