
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  usage: string;
  className?: string;
}

const SkillCard = ({ 
  title, 
  description, 
  usage,
  className = "" 
}: SkillCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-md card-hover",
      className
    )}>
      <h3 className="text-xl font-bold mb-3 text-skillora-blue">{title}</h3>
      <div className="mb-4">
        <p className="font-semibold text-gray-700 mb-1">لماذا مهم:</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-1">أين يستخدم:</p>
        <p className="text-gray-600">{usage}</p>
      </div>
      <button className="mt-4 bg-skillora-lightblue text-skillora-blue font-medium py-2 px-4 rounded-lg w-full hover:bg-blue-100 transition-colors">
        تعلم المزيد
      </button>
    </div>
  );
};

export default SkillCard;
