import { createContext } from "react";

import { IThemeContext } from "./types";

const defaultValue: IThemeContext = {
  theme: "Dark",
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
