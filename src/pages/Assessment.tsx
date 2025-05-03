
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNavbar from "@/components/BottomNavbar";
import AssessmentQuestion from "@/components/AssessmentQuestion";
import AssessmentIntro from "@/components/assessment/AssessmentIntro";
import AssessmentLoading from "@/components/assessment/AssessmentLoading";
import AssessmentResultView from "@/components/assessment/AssessmentResult";
import { getAssessmentQuestions } from "@/data/assessmentQuestions";
import { getAssessmentContent } from "@/data/assessmentContent";
import { analyzeAssessment } from "@/utils/assessmentAnalyzer";
import { AssessmentResult } from "@/types/assessment";

const Assessment = () => {
  const { language } = useLanguage();
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    // Load previous assessment progress from local storage
    const savedProgress = localStorage.getItem('assessmentProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setSelectedOptions(progress.selectedOptions || {});
      setCurrentQuestionIndex(progress.currentQuestionIndex || 0);
      if (progress.isStarted) setIsStarted(true);
    }

    // Load previous result if exists
    const savedResult = localStorage.getItem('assessmentResult');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  // Save progress to local storage whenever it changes
  useEffect(() => {
    if (isStarted) {
      localStorage.setItem('assessmentProgress', JSON.stringify({
        selectedOptions,
        currentQuestionIndex,
        isStarted
      }));
    }
  }, [selectedOptions, currentQuestionIndex, isStarted]);

  const questions = getAssessmentQuestions(language);
  const content = getAssessmentContent(language);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Submit assessment
      handleSubmitAssessment();
    }
  };

  const handleSubmitAssessment = () => {
    setIsSubmitting(true);
    
    // Simulate processing the results
    setTimeout(() => {
      const assessmentResult = analyzeAssessment(selectedOptions, language);
      
      // Save result to local storage
      localStorage.setItem('assessmentResult', JSON.stringify(assessmentResult));
      setResult(assessmentResult);
      setIsSubmitting(false);
    }, 2000);
  };

  const resetAssessment = () => {
    setResult(null);
    setSelectedOptions({});
    setCurrentQuestionIndex(0);
    localStorage.removeItem('assessmentResult');
    localStorage.removeItem('assessmentProgress');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header with back button */}
      <header className="bg-white dark:bg-gray-800 p-4 shadow-sm flex items-center">
        <Link to="/" className="text-gray-600 dark:text-gray-300">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center dark:text-white">{content.title}</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </header>

      {!isStarted ? (
        <AssessmentIntro onStart={() => setIsStarted(true)} content={content} />
      ) : result ? (
        <AssessmentResultView result={result} onReset={resetAssessment} content={content} language={language} />
      ) : isSubmitting ? (
        <AssessmentLoading message={content.processing} />
      ) : (
        <AssessmentQuestion 
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          question={currentQuestion.text}
          options={currentQuestion.options}
          selectedOption={selectedOptions[currentQuestionIndex] || null}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
        />
      )}
      
      <BottomNavbar />
    </div>
  );
};

export default Assessment;
