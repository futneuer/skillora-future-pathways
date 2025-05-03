
import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  usage: string;
}

const SkillCard = ({ title, description, usage }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 card-hover">
      <h3 className="font-bold text-lg mb-2 text-skillora-blue dark:text-blue-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">{description}</p>
      <div className="mt-3">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">استخدامات:</span>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{usage}</p>
      </div>
    </div>
  );
};

export default SkillCard;
