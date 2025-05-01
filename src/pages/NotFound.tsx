
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-skillora-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">عذراً، الصفحة غير موجودة</p>
        <Link to="/" className="btn-primary inline-block">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
