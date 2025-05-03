
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      aria-label="Switch language"
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      </span>
    </Button>
  );
};

export default LanguageSwitch;
