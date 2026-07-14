"use client";

import type React from "react";
import { createContext, useCallback, useContext, useState, useSyncExternalStore } from "react";

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

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getServerSnapshot(): Language {
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // useSyncExternalStore renders "es" during SSR/hydration (matching the server),
  // then React re-syncs to the real client-detected value right after hydrating —
  // no hydration mismatch, and no post-mount flash like a useEffect would cause.
  const detectedLang = useSyncExternalStore(subscribe, detectLanguage, getServerSnapshot);
  const [override, setOverride] = useState<Language | null>(null);
  const lang = override ?? detectedLang;

  const setLang = useCallback((newLang: Language) => {
    setOverride(newLang);
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
