import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class" // Adds class="light" or class="dark" to <html>
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}
