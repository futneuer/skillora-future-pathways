
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, User, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNavbar = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = {
    ar: [
      { path: "/", label: "الرئيسية", icon: Home },
      { path: "/courses", label: "الدورات", icon: BookOpen },
      { path: "/profile", label: "حسابي", icon: User },
      { path: "/settings", label: "إعدادات", icon: Settings }
    ],
    en: [
      { path: "/", label: "Home", icon: Home },
      { path: "/courses", label: "Courses", icon: BookOpen },
      { path: "/profile", label: "Profile", icon: User },
      { path: "/settings", label: "Settings", icon: Settings }
    ]
  };

  const currentNavItems = navItems[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-2 px-4 z-50">
      <div className="flex justify-around items-center">
        {currentNavItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`nav-item ${isActive(item.path) ? 'active' : ''} dark:text-gray-300 dark:hover:text-skillora-blue`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
