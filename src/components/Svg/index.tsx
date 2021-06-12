import React from "react";
import { ISvgProps } from "./types";

const Svg: React.FC<ISvgProps> = ({ icon, ...props }) => {
  const Icon = React.lazy(() => import(`assets/svgs/${icon}.svg`));
  if (!Icon) return <></>;

  return (
    <React.Suspense fallback={<></>}>
      <Icon {...props} />
    </React.Suspense>
  );
};

export default React.memo(Svg);
