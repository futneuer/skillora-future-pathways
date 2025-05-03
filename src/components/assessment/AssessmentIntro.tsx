
import React from "react";
import { Button } from "@/components/ui/button";

interface AssessmentIntroProps {
  onStart: () => void;
  content: {
    assessmentIntro: string;
    assessmentDesc: string;
    step1: string;
    step2: string;
    step3: string;
    startButton: string;
    estimatedTime: string;
  };
}

const AssessmentIntro = ({ onStart, content }: AssessmentIntroProps) => {
  return (
    <div className="p-5">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-skillora-blue dark:text-blue-400">
          {content.assessmentIntro}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {content.assessmentDesc}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
            <p className="dark:text-gray-200">{content.step1}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
            <p className="dark:text-gray-200">{content.step2}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
            <p className="dark:text-gray-200">{content.step3}</p>
          </div>
        </div>
        
        <Button 
          onClick={onStart}
          className="w-full text-lg"
        >
          {content.startButton}
        </Button>
      </div>
      
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>{content.estimatedTime}</p>
      </div>
    </div>
  );
};

export default AssessmentIntro;
