"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR and hydration, true on the client afterwards
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded text-ink-soft hover:text-ink"
    >
      {mounted ? (
        isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
