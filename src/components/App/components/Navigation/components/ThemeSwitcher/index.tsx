import { FC, useContext } from "react";

import Icon from "components/Icon";
import ThemeContext from "contexts/ThemeContext";
import { IconLink, LinkTitle } from "../../styled.components";

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
