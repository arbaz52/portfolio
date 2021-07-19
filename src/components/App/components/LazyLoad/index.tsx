import { FC, Suspense } from "react";
import Fallback from "./components/Fallback";

const LazyLoad: FC = ({ children }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export default LazyLoad;
