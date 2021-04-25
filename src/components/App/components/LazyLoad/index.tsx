import React from "react";
import Fallback from "./components/Fallback";

const LazyLoad: React.FC = ({children}) => (
  <React.Suspense fallback={<Fallback />}>{children}</React.Suspense>
);

export default LazyLoad;
