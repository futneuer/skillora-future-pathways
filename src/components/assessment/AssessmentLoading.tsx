
import React from "react";
import { LoaderCircle } from "lucide-react";

interface AssessmentLoadingProps {
  message: string;
}

const AssessmentLoading = ({ message }: AssessmentLoadingProps) => {
  return (
    <div className="p-5 h-64 flex flex-col items-center justify-center">
      <LoaderCircle size={48} className="text-skillora-blue animate-spin mb-4" />
      <p className="text-gray-700 dark:text-gray-300">{message}</p>
    </div>
  );
};

export default AssessmentLoading;
