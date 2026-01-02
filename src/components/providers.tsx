"use client";

import { Toaster } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

type ProvidesProps = {
  children: ThemeProviderProps & React.ReactNode;
};

const Providers = (props: ProvidesProps) => {
  const { children } = props;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        <Toaster
          toastOptions={{
            duration: 2500,
          }}
          visibleToasts={5}
          expand
        />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
