import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type Resolved = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Resolved;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getSystemTheme = (): Resolved =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const applyClass = (resolved: Resolved) => {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
};

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vl-theme",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<Resolved>(() => {
    if (typeof window === "undefined") return "light";
    const stored = (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme;
    return stored === "system" ? getSystemTheme() : stored;
  });

  // Apply class + react to system changes when on `system`.
  useEffect(() => {
    const next: Resolved = theme === "system" ? getSystemTheme() : theme;
    setResolvedTheme(next);
    applyClass(next);

    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const r: Resolved = e.matches ? "dark" : "light";
      setResolvedTheme(r);
      applyClass(r);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = (t: Theme) => {
    localStorage.setItem(storageKey, t);
    setThemeState(t);
  };

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
};
