"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { en, ro, ru } from "@/lib/i18n";
import type { Locale, Translation } from "@/lib/i18n";

const translations: Record<Locale, Translation> = { en, ro, ru };

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
