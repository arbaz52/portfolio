import React from "react";

import Icon from "components/Icon";
import ThemeContext from "contexts/ThemeContext";
import { IconLink, LinkTitle } from "../../styled.components";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <IconLink onClick={toggleTheme}>
      <Icon
        icon={theme === "Dark" ? "moon" : "sun"}
        variant="stroke"
        highlighted
      />
      <LinkTitle>{theme} Mode</LinkTitle>
    </IconLink>
  );
};

export default ThemeSwitcher;
