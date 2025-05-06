
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-sm flex items-center justify-between sticky top-0 z-40">
      <Logo className={isRTL ? 'ml-auto' : 'mr-auto'} size={isMobile ? "small" : "medium"} />
      
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md dark:text-gray-200 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      
      {/* Desktop controls or expanded mobile menu */}
      <div className={`
        ${isMobile ? 'absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 items-center' : 'flex gap-2'} 
        ${isMobile && !isMenuOpen ? 'hidden' : 'flex'}
      `}>
        {/* Search bar - new feature */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills..."
            className="py-1 px-3 pr-8 rounded-full bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-skillora-blue"
          />
          <Search size={16} className="absolute right-2.5 top-1.5 text-gray-500 dark:text-gray-400" />
        </div>
        <ThemeToggle />
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
