"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-lg text-foreground shadow-lift transition hover:scale-105 hover:border-accent hover:shadow-[0_18px_45px_rgb(15_23_42/0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-sm:bottom-4 max-sm:right-4"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
