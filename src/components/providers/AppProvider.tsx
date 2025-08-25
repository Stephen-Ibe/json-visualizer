import { lightTheme } from "@/lib";
import React from "react";
import { ThemeProvider } from "styled-components";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default AppProvider;
