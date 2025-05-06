
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Bolt } from "lucide-react";
import { useDeviceType } from "@/hooks/use-mobile";

type LogoSize = "small" | "medium" | "large";

const Logo = ({ className = "", size = "medium" }: { className?: string; size?: LogoSize }) => {
  const { theme } = useTheme();
  const deviceType = useDeviceType();
  
  // Adjust logo size based on device type
  const getResponsiveSize = (originalSize: LogoSize): LogoSize => {
    if (deviceType === "mobile" && originalSize === "large") {
      return "medium";
    }
    return originalSize;
  };
  
  const responsiveSize = getResponsiveSize(size);
  
  // Size mapping
  const sizeClasses = {
    small: "text-xl font-bold",
    medium: "text-2xl font-bold",
    large: "text-3xl font-bold"
  };
  
  // Dynamic SVG sizes
  const svgSizes = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10"
  };
  
  // Dynamic bolt icon sizes
  const boltSizes = {
    small: 10,
    medium: 14,
    large: 18
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative rounded-lg overflow-hidden ${svgSizes[responsiveSize]}`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" fill={theme === "dark" ? "#1a1f2c" : "#f0f4f8"} />
          <path 
            d="M30,40 Q50,20 70,40 L70,70 Q50,90 30,70 Z" 
            fill={theme === "dark" ? "#7E69AB" : "#9b87f5"} 
            stroke={theme === "dark" ? "#9b87f5" : "#7E69AB"} 
            strokeWidth="2"
          />
          <path 
            d="M40,30 L60,30 L60,60 L50,70 L40,60 Z" 
            fill={theme === "dark" ? "#33C3F0" : "#1EAEDB"} 
            stroke="none" 
          />
          <circle cx="50" cy="45" r="5" fill={theme === "dark" ? "#E5DEFF" : "#D6BCFA"} />
        </svg>
        <Bolt 
          size={boltSizes[responsiveSize]} 
          className="absolute bottom-0 right-0 text-yellow-400 drop-shadow-md" 
          strokeWidth={3}
          fill="currentColor"
        />
      </div>
      <span className={`${sizeClasses[responsiveSize]} ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        Skillora
      </span>
    </div>
  );
};

export default Logo;
