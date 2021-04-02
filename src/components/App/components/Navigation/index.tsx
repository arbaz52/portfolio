import Icon from "components/Icon";
import { IconLink } from "components/SocialLinks/styled.components";
import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { NavigationWrapper } from "./styled.components";

// const LINKS = [
//   {
//     title: "",
//     href: "",
//     icon: "",
//     iconVariant: ""
//   }
// ]
const Navigation: React.FC = () => {
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
        }
      } catch (ex) {
        console.error(ex);
      }
    },
    []
  );
  return (
    <NavigationWrapper>
      <IconLink onClick={handleClick} title="Hero" href="#hero">
        <Icon icon="tv" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="About" href="#about">
        <Icon icon="person" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Work" href="#work">
        <Icon icon="briefcase" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Using" href="#using">
        <Icon icon="heart" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Skills" href="#skills">
        <Icon icon="zap" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Projects Gallery" href="#gallery">
        <Icon icon="camera" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Numbers" href="#relatable">
        <Icon icon="hashtag" variant="stroke" highlighted />
      </IconLink>

      <IconLink onClick={handleClick} title="Get In Touch" href="#contact">
        <Icon icon="mail" variant="stroke" highlighted />
      </IconLink>
      <span></span>

      <ThemeSwitcher />
    </NavigationWrapper>
  );
};

export default Navigation;
