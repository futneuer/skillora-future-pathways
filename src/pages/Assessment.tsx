
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AssessmentQuestion from "@/components/AssessmentQuestion";
import BottomNavbar from "@/components/BottomNavbar";

const Assessment = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  // Sample questions data
  const questions = [
    {
      id: 1,
      text: "عند مواجهة مشكلة معقدة، أفضل أن:",
      options: [
        { id: "a1", text: "أحللها إلى أجزاء صغيرة وأعالج كل جزء على حدة" },
        { id: "a2", text: "أبحث عن حلول جاهزة تم تطبيقها في مشاكل مشابهة" },
        { id: "a3", text: "أعمل مع فريق لتبادل الأفكار والوصول إلى حل" },
        { id: "a4", text: "أفكر بشكل إبداعي لإيجاد حلول غير تقليدية" }
      ]
    },
    {
      id: 2,
      text: "أشعر بالراحة أكثر عند العمل في:",
      options: [
        { id: "b1", text: "بيئة منظمة وثابتة مع تعليمات واضحة" },
        { id: "b2", text: "بيئة مرنة تتيح لي التجربة والاستكشاف" },
        { id: "b3", text: "بيئة تعاونية أعمل فيها ضمن فريق" },
        { id: "b4", text: "بيئة تنافسية تدفعني لتقديم أفضل ما لدي" }
      ]
    },
    {
      id: 3,
      text: "عندما أتعلم مهارة جديدة، أفضل:",
      options: [
        { id: "c1", text: "التعلم من خلال القراءة والاطلاع النظري" },
        { id: "c2", text: "التعلم من خلال التجربة العملية والممارسة" },
        { id: "c3", text: "التعلم من خلال مشاهدة شخص خبير" },
        { id: "c4", text: "التعلم من خلال حل مشاكل واقعية" }
      ]
    }
  ];

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
      // Navigate to results page (to be implemented)
      console.log("Assessment completed:", selectedOptions);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with back button */}
      <header className="bg-white p-4 shadow-sm flex items-center">
        <Link to="/" className="text-gray-600">
          ← الرئيسية
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center">التقييم الذكي</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </header>

      {!isStarted ? (
        <div className="p-5">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-skillora-blue">اكتشف مهاراتك ومستقبلك المهني</h2>
            <p className="text-gray-700 mb-6">
              سيساعدك هذا التقييم على فهم نقاط قوتك واهتماماتك، واقتراح المسارات التعليمية والمهنية التي تناسبك.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                <p>15 سؤال قصير لتحليل مهاراتك واهتماماتك.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                <p>تحليل متقدم بالذكاء الاصطناعي لتحديد نقاط قوتك.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                <p>توصيات مخصصة للمسارات التعليمية والمهنية.</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsStarted(true)}
              className="btn-primary w-full text-lg"
            >
              ابدأ التقييم الآن
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>الوقت المقدر: 5-7 دقائق</p>
          </div>
        </div>
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
