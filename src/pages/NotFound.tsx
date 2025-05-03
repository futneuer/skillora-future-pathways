
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full mx-auto flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-red-500 dark:text-red-400">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold mb-3 dark:text-white">
          {language === 'ar' ? "عذراً، الصفحة غير موجودة" : "Sorry, page not found"}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {language === 'ar' 
            ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها." 
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        
        <div className="space-y-3">
          <Link to="/" className="w-full">
            <Button className="w-full flex items-center justify-center">
              <ArrowLeft size={16} className="mr-2" />
              {language === 'ar' ? "العودة للرئيسية" : "Return to Home"}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="mt-8 text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          {language === 'ar' ? "تحتاج للمساعدة؟ تواصل معنا" : "Need help? Contact us"}
        </h3>
        
        <div className="space-y-3">
          <a 
            href="mailto:6hasan.mubarak9@gmail.com" 
            className="flex items-center justify-center text-skillora-blue dark:text-blue-400"
          >
            <Mail size={18} className="mr-2" />
            <span>6hasan.mubarak9@gmail.com</span>
          </a>
          
          <a 
            href="tel:+1234567890" 
            className="flex items-center justify-center text-skillora-blue dark:text-blue-400"
          >
            <Phone size={18} className="mr-2" />
            <span>+123 456 7890</span>
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        <p>© 2025 Skillora. {language === 'ar' ? "جميع الحقوق محفوظة" : "All rights reserved"}.</p>
        <p className="mt-1">
          {language === 'ar' 
            ? "المنصة الأولى لتطوير المهارات ورسم المسار المهني" 
            : "The premier platform for skill development and career pathing"}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
