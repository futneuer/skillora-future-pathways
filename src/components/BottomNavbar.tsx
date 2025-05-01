
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, User, Settings } from "lucide-react";

const BottomNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-50">
      <div className="flex justify-around items-center">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Home size={24} />
          <span className="text-xs mt-1">الرئيسية</span>
        </Link>
        
        <Link to="/courses" className={`nav-item ${isActive('/courses') ? 'active' : ''}`}>
          <BookOpen size={24} />
          <span className="text-xs mt-1">الدورات</span>
        </Link>
        
        <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
          <User size={24} />
          <span className="text-xs mt-1">حسابي</span>
        </Link>
        
        <Link to="/settings" className={`nav-item ${isActive('/settings') ? 'active' : ''}`}>
          <Settings size={24} />
          <span className="text-xs mt-1">إعدادات</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
