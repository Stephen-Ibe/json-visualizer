import { createTheme } from "@mantine/core";

export const mantineTheme = createTheme({
  autoContrast: true,
  fontSmoothing: false,
  respectReducedMotion: true,
  cursorType: "pointer",
});

const defaultColors = {};

const darkTheme = { ...defaultColors };

export const lightTheme = { ...defaultColors };

export const themeMode = { ...darkTheme, ...lightTheme };

export default themeMode;
