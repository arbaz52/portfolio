import React from "react";

import Dots from "./components/Dots";

import { FallbackWrapper } from "./styled.components";

const Fallback: React.FC = () => (
  <FallbackWrapper>
    <Dots />
  </FallbackWrapper>
);

export default Fallback;
