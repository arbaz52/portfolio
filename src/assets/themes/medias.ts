import breakpoints from "./breakpoints";

const { lg, md, sm, xl, xs, xxl } = breakpoints;

const medias = {
  xs: `(min-width: ${xs}) and (max-width: ${sm})`,
  sm: `(min-width: ${sm}) and (max-width: ${md})`,
  md: `(min-width: ${md}) and (max-width: ${lg})`,
  lg: `(min-width: ${lg}) and (max-width: ${xl})`,
  xl: `(min-width: ${xl}) and (max-width: ${xxl})`,
  xxl: `(min-width: ${xxl})`,
};

export default medias;
