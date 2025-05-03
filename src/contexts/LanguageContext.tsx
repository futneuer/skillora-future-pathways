
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

declare global {
  interface Window {
    updateDocumentLanguage: (lang: string) => void;
  }
}

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "ar";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("language", language);
    
    // Update the HTML document language
    document.documentElement.lang = language;
    
    // Update the document direction based on language
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    
    // Call the global function if it exists
    if (window.updateDocumentLanguage) {
      window.updateDocumentLanguage(language);
    }
  }, [language, isRTL]);

  const contextValue = {
    language,
    setLanguage,
    isRTL
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
