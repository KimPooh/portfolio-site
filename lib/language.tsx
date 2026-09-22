"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { PortfolioLanguage } from "./portfolioChat";

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
  language: PortfolioLanguage;
  setLanguage: (language: PortfolioLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<PortfolioLanguage>("kr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "kr" || stored === "en") setLanguageState(stored);
    } catch {
      // localStorage unavailable (private mode, etc.) — default language stands.
    }
  }, []);

  const setLanguage = (next: PortfolioLanguage) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures
    }
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
