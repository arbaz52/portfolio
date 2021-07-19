import { FC, lazy, Suspense, memo } from "react";
import { ISvgProps } from "./types";

const Svg: FC<ISvgProps> = ({ icon, ...props }) => {
  const Icon = lazy(() => import(`assets/svgs/${icon}.svg`));
  if (!Icon) return <></>;

  return (
    <Suspense fallback={<></>}>
      <Icon {...props} />
    </Suspense>
  );
};

export default memo(Svg);
