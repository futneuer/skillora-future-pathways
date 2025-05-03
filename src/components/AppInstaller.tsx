
import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const AppInstaller = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  
  const content = {
    ar: {
      installApp: "تثبيت التطبيق",
      installDesc: "قم بتثبيت تطبيق سكيلورا للوصول السريع والاستخدام بدون إنترنت",
      installSuccess: "تم تثبيت التطبيق بنجاح",
      installCancelled: "تم إلغاء تثبيت التطبيق"
    },
    en: {
      installApp: "Install App",
      installDesc: "Install Skillora app for quick access and offline use",
      installSuccess: "App installed successfully",
      installCancelled: "App installation was cancelled"
    }
  };
  
  const currentLanguage = content[language];

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // Store the event for later use
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    // Show the install prompt
    installPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === "accepted") {
      toast({
        title: currentLanguage.installSuccess,
        duration: 3000,
      });
    } else {
      toast({
        title: currentLanguage.installCancelled,
        duration: 3000,
      });
    }
    
    // Clear the saved prompt as it can't be used again
    setInstallPrompt(null);
    setIsInstallable(false);
  };

  if (!isInstallable) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-skillora-blue bg-opacity-20 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
          <Download size={24} className="text-skillora-blue dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 dark:text-white">{currentLanguage.installApp}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{currentLanguage.installDesc}</p>
          <Button size="sm" onClick={handleInstallClick}>
            {currentLanguage.installApp}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppInstaller;
