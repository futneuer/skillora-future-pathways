
import React from "react";

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
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>سؤال {questionNumber} من {totalQuestions}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-skillora-blue h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6">{question}</h2>
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              className={`w-full text-right p-4 rounded-lg border ${
                selectedOption === option.id
                  ? "border-skillora-blue bg-skillora-lightblue"
                  : "border-gray-300"
              } transition-colors`}
              onClick={() => onSelectOption(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <button
        className="btn-primary w-full flex items-center justify-center gap-2"
        disabled={!selectedOption}
        onClick={onNext}
      >
        <span>التالي</span>
        <span>➡️</span>
      </button>
    </div>
  );
};

export default AssessmentQuestion;
