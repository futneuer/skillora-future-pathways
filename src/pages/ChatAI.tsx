
import React from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, MessageSquare, Lock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ChatAI = () => {
  const { language } = useLanguage();
  
  const content = {
    ar: {
      title: "دردشة ذكية",
      notAvailable: "غير متاح للعرض التجريبي",
      comingSoon: "قريباً",
      features: [
        "التخطيط للمهارات والمسار المهني",
        "توصيات مخصصة للدورات التدريبية",
        "مساعدة في اتخاذ القرارات التعليمية",
        "تحليل متقدم للمهارات المطلوبة"
      ]
    },
    en: {
      title: "AI Chat",
      notAvailable: "Not available for Demo",
      comingSoon: "Coming Soon",
      features: [
        "Skills and career path planning",
        "Personalized course recommendations",
        "Educational decision-making assistance",
        "Advanced analysis of in-demand skills"
      ]
    }
  };
  
  const currentLanguage = content[language];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
          <MessageSquare className="text-skillora-blue dark:text-blue-400" size={24} />
          {currentLanguage.title}
        </h1>
        
        <div className="flex flex-col items-center justify-center h-[60vh] bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center">
          <div className="relative mb-6">
            <Bot size={64} className="text-skillora-blue dark:text-blue-400" />
            <Lock size={20} className="absolute -bottom-2 -right-2 text-orange-500 bg-white dark:bg-gray-800 rounded-full p-1" />
          </div>
          
          <h2 className="text-2xl font-bold mb-3 dark:text-white">
            {currentLanguage.notAvailable}
          </h2>
          
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
            {currentLanguage.comingSoon}
          </p>
          
          {/* Features Cards */}
          <div className="w-full max-w-md">
            <Card className="bg-gray-50 dark:bg-gray-700/50 border-none mb-4">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-500 mt-1" size={18} />
                  <div>
                    <h3 className="font-medium text-left dark:text-white text-sm mb-2">
                      {language === "en" ? "Coming Soon Features" : "الميزات القادمة قريبًا"}
                    </h3>
                    <ul className="space-y-2 text-left">
                      {currentLanguage.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-skillora-blue"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default ChatAI;
