import styled, { css } from "assets/themes";
import breakpoints from "assets/themes/breakpoints";
import Icon from "components/Icon";
import { IconLink as _IconLink } from "components/SocialLinks/styled.components";

export const NavigationContainer = styled.div<{ open: boolean }>`
  top: 50%;
  left: 24px;
  position: fixed;
  padding: 16px 8px;
  transform: translateY(-50%);
  gap: 32px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.sm}) {
    top: 0px;
    left: 0px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: unset;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.backgroundHighlighted};
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    ${({ open }) =>
      !open &&
      css`
        display: none;
      `}
  }
`;

export const NavigationWrapper = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
`;

export const IconLink = styled(_IconLink)`
  gap: 16px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  @media only screen and (max-width: ${breakpoints.sm}) {
    justify-content: flex-end;
  }
`;

export const LinkTitle = styled.h6`
  display: none;
  @media only screen and (max-width: ${breakpoints.sm}) {
    display: block;
  }
`;

export const CloseIcon = styled(IconLink)`
  margin-right: -16px;
  display: none;
  align-self: flex-end;
  @media only screen and (max-width: ${breakpoints.sm}) {
    display: block;
  }
`;

export const OpenNavigation = styled(Icon)`
  display: none;
  @media only screen and (max-width: ${breakpoints.sm}) {
    display: block;
  }

  top: 24px;
  right: 24px;
  position: fixed;
  * {
    fill: ${({
      theme: {
        colors: { bodyText: fill },
      },
    }) => fill};
  }
`;
