import React from "react";

import Icon from "components/Icon";
import ThemeContext from "contexts/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <span onClick={toggleTheme}>
      <Icon
        icon={theme === "Dark" ? "moon" : "sun"}
        variant="stroke"
        color="white"
      />
    </span>
  );
};

export default ThemeSwitcher;
