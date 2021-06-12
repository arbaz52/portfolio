import React from "react";

import Icon from "components/Icon";

import ThemeSwitcher from "./components/ThemeSwitcher";

import {
  NavigationWrapper,
  IconLink,
  LinkTitle,
  NavigationContainer,
  CloseIcon,
  OpenNavigation,
} from "./styled.components";

const Navigation: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = React.useState(false);

  const toggleNavigation = React.useCallback(() => {
    setNavigationOpen((pv) => !pv);
  }, []);

  const handleClick = React.useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault();
      const { href } = ev.currentTarget as HTMLAnchorElement;
      try {
        const el = document.getElementById(href.split("#")[1]);
        console.log(el, href.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
          setNavigationOpen(false);
        }
      } catch (ex) {
        console.error(ex);
      }
    },
    []
  );
  return (
    <>
      <OpenNavigation
        icon="burger"
        variant="stroke"
        onClick={toggleNavigation}
        highlighted
      />
      <NavigationContainer open={navigationOpen}>
        <CloseIcon onClick={toggleNavigation}>
          <Icon icon="close" variant="stroke" highlighted />
        </CloseIcon>
        <NavigationWrapper>
          <IconLink onClick={handleClick} title="Hero" href="#hero">
            <Icon icon="tv" variant="stroke" /> <LinkTitle>HERO</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="About" href="#about">
            <Icon icon="person" variant="stroke" /> <LinkTitle>ABOUT</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Articles" href="#articles">
            <Icon icon="align-left" variant="stroke" /> <LinkTitle>ARTICLES</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Work" href="#work">
            <Icon icon="briefcase" variant="stroke" />{" "}
            <LinkTitle>WHAT I DO</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Using" href="#using">
            <Icon icon="heart" variant="stroke" /> <LinkTitle>SKILLS</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Skills" href="#skills">
            <Icon icon="zap" variant="stroke" /> <LinkTitle>SKILLS</LinkTitle>
          </IconLink>

          <IconLink
            onClick={handleClick}
            title="Projects Gallery"
            href="#gallery"
          >
            <Icon icon="camera" variant="stroke" />{" "}
            <LinkTitle>GALLERY</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Numbers" href="#relatable">
            <Icon icon="hashtag" variant="stroke" />{" "}
            <LinkTitle>CONTRIBUTIONS</LinkTitle>
          </IconLink>

          <IconLink onClick={handleClick} title="Get In Touch" href="#contact">
            <Icon icon="mail" variant="stroke" />{" "}
            <LinkTitle>GET IN TOUCH</LinkTitle>
          </IconLink>
        </NavigationWrapper>
        <ThemeSwitcher />
      </NavigationContainer>
    </>
  );
};

export default React.memo(Navigation);
