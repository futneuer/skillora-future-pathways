
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface SecretCodeInputProps {
  onCodeActivated: (message: string) => void;
}

const SecretCodeInput: React.FC<SecretCodeInputProps> = ({ onCodeActivated }) => {
  const [code, setCode] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  
  // Check for the secret code
  useEffect(() => {
    if (code === "hasanfv") {
      onCodeActivated("Mira And Billie Eilish");
      toast({
        title: language === 'ar' ? "تم تنشيط الرمز السري" : "Secret Code Activated",
        description: "Mira And Billie Eilish",
      });
      // Reset the code input after activation
      setCode("");
    }
  }, [code, onCodeActivated, toast, language]);

  return (
    <div className="w-full">
      <Input
        type="text"
        placeholder={language === 'ar' ? "أدخل الرمز السري" : "Enter Secret Code"}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="text-center"
      />
    </div>
  );
};

export default SecretCodeInput;
