
import React from "react";
import { Link } from "react-router-dom";
import { AssessmentResult } from "@/types/assessment";
import { Button } from "@/components/ui/button";

interface AssessmentResultProps {
  result: AssessmentResult;
  onReset: () => void;
  content: {
    resultTitle: string;
    yourStrengths: string;
    recommendedPaths: string;
    startNew: string;
    exploreCourses: string;
  };
  language: 'ar' | 'en';
}

const AssessmentResultView = ({ result, onReset, content, language }: AssessmentResultProps) => {
  return (
    <div className="p-5">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-skillora-blue dark:text-blue-400 text-center">
          {content.resultTitle}
        </h2>
        
        <h3 className="font-bold mb-3 dark:text-white">{content.yourStrengths}</h3>
        <div className="space-y-3 mb-6">
          {Object.entries(result.skillScores)
            .sort(([, a], [, b]) => b - a)
            .map(([skill, score], index) => (
              <div key={skill} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {language === 'ar' ? 
                      skill === 'analytical' ? 'التحليلية' : 
                      skill === 'creative' ? 'الإبداع' : 
                      skill === 'collaborative' ? 'التعاون' : 
                      skill === 'technical' ? 'التقنية' : 
                      skill === 'leadership' ? 'القيادة' :
                      skill === 'business' ? 'الأعمال' :
                      skill === 'design' ? 'التصميم' : 'التواصل'
                      : 
                      skill}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-skillora-blue' : 
                      index === 1 ? 'bg-skillora-green' : 
                      index === 2 ? 'bg-skillora-orange' :
                      'bg-blue-400'
                    }`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        
        <h3 className="font-bold mb-3 dark:text-white">{content.recommendedPaths}</h3>
        <div className="space-y-2 mb-6">
          {result.recommendedPaths.map((path, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                index === 0 ? 'bg-skillora-blue' : 
                index === 1 ? 'bg-skillora-green' : 
                'bg-skillora-orange'
              }`}></div>
              <span className="dark:text-white">{path}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <Button variant="outline" onClick={onReset}>
            {content.startNew}
          </Button>
          <Link to="/courses" className="w-full">
            <Button className="w-full">
              {content.exploreCourses}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResultView;
