
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Option {
  id: string;
  text: string;
}

interface AssessmentQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Option[];
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
}

const AssessmentQuestion = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedOption,
  onSelectOption,
  onNext,
}: AssessmentQuestionProps) => {
  const { language, isRTL } = useLanguage();
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  const textAlign = isRTL ? "text-right" : "text-left";
  const nextButtonText = isRTL ? "التالي" : "Next";
  const questionText = isRTL ? 
    `سؤال ${questionNumber} من ${totalQuestions}` : 
    `Question ${questionNumber} of ${totalQuestions}`;

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span>{questionText}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-skillora-blue h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className={`text-xl font-bold mb-6 ${textAlign} dark:text-white`}>{question}</h2>
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              className={`w-full ${textAlign} p-4 rounded-lg border ${
                selectedOption === option.id
                  ? "border-skillora-blue bg-skillora-lightblue dark:bg-skillora-blue/20"
                  : "border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              } transition-colors dark:text-white`}
              onClick={() => onSelectOption(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <button
        className={`btn-primary w-full flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
        disabled={!selectedOption}
        onClick={onNext}
      >
        <span>{nextButtonText}</span>
        <span>{isRTL ? '⬅️' : '➡️'}</span>
      </button>
    </div>
  );
};

export default AssessmentQuestion;
