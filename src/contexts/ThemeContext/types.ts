export type TTheme = "Light" | "Dark";

export interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}
