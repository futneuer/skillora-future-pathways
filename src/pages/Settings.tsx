import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Bell, Globe, Moon, Sun, User, Lock, Eye, EyeOff, Info, Shield, Download, Trash2, Code, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import SecretCodeInput from "@/components/SecretCodeInput";
import { Toaster } from "@/components/ui/toaster";
import { useDeviceType } from "@/hooks/use-mobile";

interface SettingsData {
  notifications: {
    email: boolean;
    app: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisibility: string;
    showProgress: boolean;
  };
  security: {
    twoFactorAuth: boolean;
  };
  advanced?: {
    enableBetaFeatures?: boolean;
    debugMode?: boolean;
  };
}

const Settings = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const deviceType = useDeviceType();
  const appVersion = "1.0.1";
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [secretMessage, setSecretMessage] = useState("");
  const [settings, setSettings] = useState<SettingsData>({
    notifications: {
      email: true,
      app: true,
      marketing: false
    },
    privacy: {
      profileVisibility: "public",
      showProgress: true
    },
    security: {
      twoFactorAuth: false
    },
    advanced: {
      enableBetaFeatures: false,
      debugMode: false
    }
  });
  
  useEffect(() => {
    // Load settings from local storage
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        // Clean up settings to remove features property if it exists
        if (parsedSettings.features) {
          const { features, ...rest } = parsedSettings;
          setSettings(rest);
        } else {
          setSettings(parsedSettings);
        }
      } catch (error) {
        console.error("Error parsing settings:", error);
      }
    }
  }, []);
  
  // Save settings to local storage when they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const content = {
    ar: {
      title: "الإعدادات",
      appearance: "المظهر",
      darkMode: "الوضع الداكن",
      language: "اللغة",
      arabic: "العربية",
      english: "الإنجليزية",
      notifications: "الإشعارات",
      emailNotifications: "إشعارات البريد الإلكتروني",
      appNotifications: "إشعارات التطبيق",
      marketingEmails: "رسائل تسويقية",
      privacy: "الخصوصية",
      profileVisibility: "ظهور الملف الشخصي",
      public: "عام",
      private: "خاص",
      showProgress: "إظهار تقدمي للآخرين",
      security: "الأمان",
      changePassword: "تغيير كلمة المرور",
      currentPassword: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      updatePassword: "تحديث كلمة المرور",
      twoFactorAuth: "المصادقة الثنائية",
      accountActions: "إجراءات الحساب",
      deleteAccount: "حذف الحساب",
      downloadData: "تنزيل بياناتي",
      saveChanges: "حفظ التغييرات",
      passwordUpdated: "تم تحديث كلمة المرور بنجاح",
      secretCodes: "أدوات المطور",
      enterSecretCode: "******",
      advanced: "إعدادات متقدمة",
      enableBetaFeatures: "تمكين ميزات بيتا",
      debugMode: "وضع التصحيح",
      appInfo: "معلومات التطبيق",
      version: "الإصدار",
      deviceType: "نوع الجهاز",
      system: "النظام"
    },
    en: {
      title: "Settings",
      appearance: "Appearance",
      darkMode: "Dark Mode",
      language: "Language",
      arabic: "Arabic",
      english: "English",
      notifications: "Notifications",
      emailNotifications: "Email Notifications",
      appNotifications: "App Notifications",
      marketingEmails: "Marketing Emails",
      privacy: "Privacy",
      profileVisibility: "Profile Visibility",
      public: "Public",
      private: "Private",
      showProgress: "Show my progress to others",
      security: "Security",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      twoFactorAuth: "Two-Factor Authentication",
      accountActions: "Account Actions",
      deleteAccount: "Delete Account",
      downloadData: "Download My Data",
      saveChanges: "Save Changes",
      passwordUpdated: "Password updated successfully",
      secretCodes: "Developer Tools",
      enterSecretCode: "******",
      advanced: "Advanced Settings",
      enableBetaFeatures: "Enable Beta Features",
      debugMode: "Debug Mode",
      appInfo: "App Information",
      version: "Version",
      deviceType: "Device Type",
      system: "System"
    }
  };

  const currentLanguage = content[language];
  
  const handleSecretCodeActivated = (message: string) => {
    setSecretMessage(message);
    
    // Make the message disappear after 10 seconds
    setTimeout(() => {
      setSecretMessage("");
    }, 10000);
  };
  
  const toggleNotificationSetting = (setting: keyof typeof settings.notifications) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [setting]: !settings.notifications[setting]
      }
    });
  };
  
  const togglePrivacySetting = (setting: keyof typeof settings.privacy) => {
    if (typeof settings.privacy[setting] === 'boolean') {
      setSettings({
        ...settings,
        privacy: {
          ...settings.privacy,
          [setting]: !settings.privacy[setting]
        }
      });
    }
  };
  
  const setProfileVisibility = (value: string) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        profileVisibility: value
      }
    });
  };
  
  const toggleTwoFactorAuth = () => {
    setSettings({
      ...settings,
      security: {
        ...settings.security,
        twoFactorAuth: !settings.security.twoFactorAuth
      }
    });
  };

  const toggleAdvancedSetting = (setting: keyof NonNullable<typeof settings.advanced>) => {
    setSettings({
      ...settings,
      advanced: {
        ...settings.advanced!,
        [setting]: !settings.advanced?.[setting]
      }
    });
  };

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [passwordMessage, setPasswordMessage] = useState("");
  
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if new password and confirm password match
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMessage(language === 'ar' ? "كلمة المرور غير متطابقة" : "Passwords do not match");
      return;
    }
    
    // In a real app, you would send this to an API
    // Here we'll just simulate a successful password change
    setPasswordMessage(currentLanguage.passwordUpdated);
    
    // Clear the form
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    
    // Remove success message after 3 seconds
    setTimeout(() => {
      setPasswordMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      {secretMessage && (
        <div className="w-full bg-skillora-blue/20 dark:bg-skillora-blue/40 p-3 text-center animate-pulse">
          <h2 className="text-xl font-bold text-skillora-blue dark:text-white flex items-center justify-center gap-2">
            {secretMessage}
            <Heart className="h-5 w-5 text-red-500 animate-pulse" fill="currentColor" />
          </h2>
        </div>
      )}
      
      <div className="p-5 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">{currentLanguage.title}</h1>
        
        {/* Appearance Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">{currentLanguage.appearance}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {theme === "light" ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-400" />
                )}
                <span className="dark:text-white">{currentLanguage.darkMode}</span>
              </div>
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-skillora-blue" />
                <span className="dark:text-white">{currentLanguage.language}</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant={language === "ar" ? "default" : "outline"}
                  onClick={() => setLanguage("ar")}
                >
                  {currentLanguage.arabic}
                </Button>
                <Button 
                  size="sm"
                  variant={language === "en" ? "default" : "outline"}
                  onClick={() => setLanguage("en")}
                >
                  {currentLanguage.english}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Notifications Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">{currentLanguage.notifications}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.emailNotifications}</span>
              <Switch 
                checked={settings.notifications.email}
                onCheckedChange={() => toggleNotificationSetting("email")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.appNotifications}</span>
              <Switch 
                checked={settings.notifications.app}
                onCheckedChange={() => toggleNotificationSetting("app")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.marketingEmails}</span>
              <Switch 
                checked={settings.notifications.marketing}
                onCheckedChange={() => toggleNotificationSetting("marketing")}
              />
            </div>
          </div>
        </section>
        
        {/* Privacy Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">{currentLanguage.privacy}</h2>
          
          <div className="space-y-4">
            <div>
              <span className="block mb-2 dark:text-white">{currentLanguage.profileVisibility}</span>
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant={settings.privacy.profileVisibility === "public" ? "default" : "outline"}
                  onClick={() => setProfileVisibility("public")}
                >
                  <User className="h-4 w-4 mr-2" />
                  {currentLanguage.public}
                </Button>
                <Button 
                  size="sm"
                  variant={settings.privacy.profileVisibility === "private" ? "default" : "outline"}
                  onClick={() => setProfileVisibility("private")}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  {currentLanguage.private}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.showProgress}</span>
              <Switch 
                checked={settings.privacy.showProgress}
                onCheckedChange={() => togglePrivacySetting("showProgress")}
              />
            </div>
          </div>
        </section>
        
        {/* Security Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">{currentLanguage.security}</h2>
          
          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex justify-between w-full mb-4">
                <span>{currentLanguage.changePassword}</span>
                <span className="text-xl">+</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mb-4">
              <form onSubmit={handlePasswordChange}>
                <div className="space-y-3">
                  <div className="relative">
                    <Input
                      type={isPasswordShown ? "text" : "password"}
                      placeholder={currentLanguage.currentPassword}
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordShown(!isPasswordShown)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {isPasswordShown ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <Input
                    type="password"
                    placeholder={currentLanguage.newPassword}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                  />
                  <Input
                    type="password"
                    placeholder={currentLanguage.confirmPassword}
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  />
                  
                  {passwordMessage && (
                    <p className={`text-sm ${passwordMessage === currentLanguage.passwordUpdated ? 'text-green-500' : 'text-red-500'}`}>
                      {passwordMessage}
                    </p>
                  )}
                  
                  <Button type="submit" className="w-full">
                    {currentLanguage.updatePassword}
                  </Button>
                </div>
              </form>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex items-center justify-between">
            <span className="dark:text-white">{currentLanguage.twoFactorAuth}</span>
            <Switch 
              checked={settings.security.twoFactorAuth}
              onCheckedChange={toggleTwoFactorAuth}
            />
          </div>
        </section>
        
        {/* Advanced Settings Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white flex items-center gap-2">
            <Shield className="h-5 w-5 text-skillora-blue" />
            {currentLanguage.advanced}
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.enableBetaFeatures}</span>
              <Switch 
                checked={settings.advanced?.enableBetaFeatures || false}
                onCheckedChange={() => toggleAdvancedSetting("enableBetaFeatures")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="dark:text-white">{currentLanguage.debugMode}</span>
              <Switch 
                checked={settings.advanced?.debugMode || false}
                onCheckedChange={() => toggleAdvancedSetting("debugMode")}
              />
            </div>
          </div>
        </section>
        
        {/* App Information Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white flex items-center gap-2">
            <Info className="h-5 w-5 text-skillora-blue" />
            {currentLanguage.appInfo}
          </h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{currentLanguage.version}</span>
              <span className="font-mono dark:text-white">{appVersion}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{currentLanguage.deviceType}</span>
              <span className="font-mono dark:text-white">{deviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">{currentLanguage.system}</span>
              <span className="font-mono dark:text-white">{navigator.platform}</span>
            </div>
          </div>
        </section>
        
        {/* Secret Codes Section - Hidden in Developer Tools */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 opacity-90 hover:opacity-100">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <h2 className="text-lg font-semibold dark:text-white flex items-center gap-2">
                <Code className="h-5 w-5 text-skillora-blue" />
                {currentLanguage.secretCodes}
              </h2>
              <span className="text-gray-500">+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <SecretCodeInput onCodeActivated={handleSecretCodeActivated} />
            </CollapsibleContent>
          </Collapsible>
        </section>
        
        {/* Account Actions Section */}
        <section className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">{currentLanguage.accountActions}</h2>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              {currentLanguage.downloadData}
            </Button>
            <Button variant="destructive" className="w-full flex items-center justify-center gap-2">
              <Trash2 className="h-4 w-4" />
              {currentLanguage.deleteAccount}
            </Button>
          </div>
        </section>
      </div>
      
      <BottomNavbar />
      <Toaster />
    </div>
  );
};

export default Settings;
