
import React from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot } from "lucide-react";

const ChatAI = () => {
  const { language } = useLanguage();
  
  const content = {
    ar: {
      title: "دردشة ذكية",
      notAvailable: "غير متاح للعرض التجريبي",
      comingSoon: "قريباً"
    },
    en: {
      title: "AI Chat",
      notAvailable: "Not available for Demo",
      comingSoon: "Coming Soon"
    }
  };
  
  const currentLanguage = content[language];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          {currentLanguage.title}
        </h1>
        
        <div className="flex flex-col items-center justify-center h-[60vh] bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center">
          <Bot size={64} className="text-skillora-blue dark:text-blue-400 mb-6" />
          <h2 className="text-2xl font-bold mb-2 dark:text-white">
            {currentLanguage.notAvailable}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {currentLanguage.comingSoon}
          </p>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default ChatAI;
