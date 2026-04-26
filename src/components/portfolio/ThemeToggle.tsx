import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative grid h-10 w-10 place-items-center rounded-full border border-border text-navy transition-all hover:border-accent hover:-translate-y-0.5",
        className,
      )}
    >
      <Sun
        className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0"
        aria-hidden
      />
      <Moon
        className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100"
        aria-hidden
      />
    </button>
  );
};
