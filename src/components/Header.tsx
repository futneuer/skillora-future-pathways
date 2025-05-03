
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { isRTL } = useLanguage();
  
  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-sm flex items-center justify-between">
      <h1 className={`text-2xl font-bold text-skillora-blue dark:text-blue-400 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
        Skillora
      </h1>
      <div className="flex gap-2">
        <ThemeToggle />
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
