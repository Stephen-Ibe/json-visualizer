"use client";

import { lightTheme, mantineTheme } from "@/lib";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <MantineProvider defaultColorScheme="light" theme={mantineTheme}>
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-right"
            hideProgressBar
            closeOnClick
            role="alert"
            autoClose={1500}
            closeButton={false}
            transition={Slide}
          />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </MantineProvider>
  );
};

export default AppProvider;
