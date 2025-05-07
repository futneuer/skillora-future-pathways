
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

interface SecretCodeInputProps {
  onCodeActivated: (message: string) => void;
}

const SecretCodeInput: React.FC<SecretCodeInputProps> = ({ onCodeActivated }) => {
  const [code, setCode] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  
  // Check for the secret code
  useEffect(() => {
    if (code === "hasanlovesbe") {
      onCodeActivated("mnbe");
      toast({
        title: language === 'ar' ? "تم تنشيط الرمز السري" : "Secret Code Activated",
        description: (
          <div className="flex items-center gap-1">
            mnbe <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
          </div>
        ),
      });
      // Reset the code input after activation
      setCode("");
    }
  }, [code, onCodeActivated, toast, language]);

  return (
    <div className="w-full">
      <Input
        type="password"
        placeholder={language === 'ar' ? "******" : "******"}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="text-center bg-transparent border-dashed"
      />
    </div>
  );
};

export default SecretCodeInput;
