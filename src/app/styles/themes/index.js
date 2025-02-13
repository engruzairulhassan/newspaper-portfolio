import blueTheme from "./blueTheme";
import greenTheme from "./greenTheme";
import defaultTheme from "./defaultTheme";
import redTheme from "./redTheme";

const themes = {
  blue: blueTheme,
  green: greenTheme,
  red: redTheme,
  default: defaultTheme,
};

export const getTheme = (theme) => themes[theme] || themes.default;

