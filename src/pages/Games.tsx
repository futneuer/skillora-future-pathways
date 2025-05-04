
import React from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import MiniGame from "@/components/MiniGame";
import { useLanguage } from "@/contexts/LanguageContext";

const Games = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          {language === 'ar' ? 'ألعاب مهارية' : 'Skill Games'}
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <MiniGame />
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Games;
