
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-skillora-blue dark:text-blue-400">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {language === 'ar' ? "عذراً، الصفحة غير موجودة" : "Sorry, page not found"}
        </p>
        <Link to="/" className="btn-primary inline-block">
          {language === 'ar' ? "العودة للرئيسية" : "Return to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
