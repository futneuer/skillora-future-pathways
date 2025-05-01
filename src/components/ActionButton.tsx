
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  text: string;
  to: string;
  variant?: "primary" | "accent" | "success";
  className?: string;
  icon?: React.ReactNode;
}

const ActionButton = ({ 
  text, 
  to, 
  variant = "primary", 
  className = "",
  icon
}: ActionButtonProps) => {
  const baseClasses = "w-full flex items-center justify-center gap-2 text-lg py-4 px-6 rounded-xl font-bold transition-all shadow-md hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-skillora-blue text-white hover:bg-blue-700",
    accent: "bg-skillora-orange text-white hover:bg-orange-700",
    success: "bg-skillora-green text-white hover:bg-green-700"
  };

  return (
    <Link 
      to={to} 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </Link>
  );
};

export default ActionButton;
