import { FC } from "react";

import Dots from "./components/Dots";

import { FallbackWrapper } from "./styled.components";

const Fallback: FC = () => (
  <FallbackWrapper>
    <Dots />
  </FallbackWrapper>
);

export default Fallback;
