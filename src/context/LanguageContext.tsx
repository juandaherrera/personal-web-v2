"use client";

import type React from "react";
import { createContext, useCallback, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  isEn: false,
});

function detectLanguage(): Language {
  // 1. Respect explicit user preference stored from a previous session
  const stored = localStorage.getItem("lang");
  if (stored === "es" || stored === "en") return stored;

  // 2. Infer from browser locale: es-* → Spanish (covers all Hispanic countries + Spain),
  //    everything else → English (including pt-BR for Brazil)
  return navigator.language.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => detectLanguage());

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isEn: lang === "en" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
