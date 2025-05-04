
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Header = () => {
  const { isRTL } = useLanguage();
  
  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-sm flex items-center justify-between">
      <Logo className={isRTL ? 'ml-auto' : 'mr-auto'} />
      <div className="flex gap-2">
        <ThemeToggle />
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
