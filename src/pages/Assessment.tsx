
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import AssessmentQuestion from "@/components/AssessmentQuestion";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Option {
  id: string;
  text: string;
}

interface AssessmentResult {
  timestamp: string;
  answers: Record<number, string>;
  skillScores: Record<string, number>;
  recommendedPaths: string[];
}

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

  // Sample questions data - expanded with more questions
  const questions: Question[] = [
    {
      id: 1,
      text: language === 'ar' 
        ? "عند مواجهة مشكلة معقدة، أفضل أن:"
        : "When facing a complex problem, I prefer to:",
      options: [
        { id: "a1", text: language === 'ar' ? "أحللها إلى أجزاء صغيرة وأعالج كل جزء على حدة" : "Break it down into smaller parts and address each one separately" },
        { id: "a2", text: language === 'ar' ? "أبحث عن حلول جاهزة تم تطبيقها في مشاكل مشابهة" : "Look for ready-made solutions applied to similar problems" },
        { id: "a3", text: language === 'ar' ? "أعمل مع فريق لتبادل الأفكار والوصول إلى حل" : "Work with a team to exchange ideas and reach a solution" },
        { id: "a4", text: language === 'ar' ? "أفكر بشكل إبداعي لإيجاد حلول غير تقليدية" : "Think creatively to find unconventional solutions" }
      ]
    },
    {
      id: 2,
      text: language === 'ar'
        ? "أشعر بالراحة أكثر عند العمل في:"
        : "I feel more comfortable working in:",
      options: [
        { id: "b1", text: language === 'ar' ? "بيئة منظمة وثابتة مع تعليمات واضحة" : "An organized, stable environment with clear instructions" },
        { id: "b2", text: language === 'ar' ? "بيئة مرنة تتيح لي التجربة والاستكشاف" : "A flexible environment that allows experimentation and exploration" },
        { id: "b3", text: language === 'ar' ? "بيئة تعاونية أعمل فيها ضمن فريق" : "A collaborative environment where I work within a team" },
        { id: "b4", text: language === 'ar' ? "بيئة تنافسية تدفعني لتقديم أفضل ما لدي" : "A competitive environment that pushes me to deliver my best" }
      ]
    },
    {
      id: 3,
      text: language === 'ar'
        ? "عندما أتعلم مهارة جديدة، أفضل:"
        : "When learning a new skill, I prefer:",
      options: [
        { id: "c1", text: language === 'ar' ? "التعلم من خلال القراءة والاطلاع النظري" : "Learning through reading and theoretical review" },
        { id: "c2", text: language === 'ar' ? "التعلم من خلال التجربة العملية والممارسة" : "Learning through practical experience and practice" },
        { id: "c3", text: language === 'ar' ? "التعلم من خلال مشاهدة شخص خبير" : "Learning by watching an expert" },
        { id: "c4", text: language === 'ar' ? "التعلم من خلال حل مشاكل واقعية" : "Learning by solving real problems" }
      ]
    },
    {
      id: 4,
      text: language === 'ar'
        ? "أثناء اتخاذ القرارات، غالباً ما:"
        : "When making decisions, I often:",
      options: [
        { id: "d1", text: language === 'ar' ? "أعتمد على البيانات والحقائق" : "Rely on data and facts" },
        { id: "d2", text: language === 'ar' ? "أثق في حدسي ومشاعري" : "Trust my intuition and feelings" },
        { id: "d3", text: language === 'ar' ? "أستشير الآخرين وأسعى للتوافق" : "Consult others and seek consensus" },
        { id: "d4", text: language === 'ar' ? "أقيّم جميع البدائل بعناية قبل الاختيار" : "Carefully evaluate all alternatives before choosing" }
      ]
    },
    {
      id: 5,
      text: language === 'ar'
        ? "في المشاريع الجماعية، أميل إلى أن أكون:"
        : "In group projects, I tend to be:",
      options: [
        { id: "e1", text: language === 'ar' ? "قائداً ومنظماً للعمل" : "A leader and organizer" },
        { id: "e2", text: language === 'ar' ? "مبتكراً للأفكار الجديدة" : "A generator of new ideas" },
        { id: "e3", text: language === 'ar' ? "داعماً ومشجعاً للفريق" : "Supportive and encouraging to the team" },
        { id: "e4", text: language === 'ar' ? "محللاً ومقيماً للخيارات" : "An analyst and evaluator of options" }
      ]
    },
    {
      id: 6,
      text: language === 'ar'
        ? "أي من المهارات التقنية التالية تهمك أكثر؟"
        : "Which of the following technical skills interests you most?",
      options: [
        { id: "f1", text: language === 'ar' ? "تطوير البرمجيات وتطبيقات الويب" : "Software and web application development" },
        { id: "f2", text: language === 'ar' ? "تحليل البيانات والإحصاء" : "Data analysis and statistics" },
        { id: "f3", text: language === 'ar' ? "تصميم واجهات المستخدم" : "User interface design" },
        { id: "f4", text: language === 'ar' ? "أمن المعلومات والشبكات" : "Information and network security" }
      ]
    },
    {
      id: 7,
      text: language === 'ar'
        ? "في وقت فراغك، تفضل:"
        : "In your free time, you prefer:",
      options: [
        { id: "g1", text: language === 'ar' ? "قراءة كتاب أو متابعة دورة تعليمية" : "Reading a book or taking an educational course" },
        { id: "g2", text: language === 'ar' ? "العمل على مشروع إبداعي أو هواية" : "Working on a creative project or hobby" },
        { id: "g3", text: language === 'ar' ? "قضاء الوقت مع الأصدقاء أو العائلة" : "Spending time with friends or family" },
        { id: "g4", text: language === 'ar' ? "ممارسة الرياضة أو النشاط البدني" : "Exercising or physical activity" }
      ]
    },
    {
      id: 8,
      text: language === 'ar'
        ? "أي من المجالات التالية يثير اهتمامك أكثر؟"
        : "Which of the following fields interests you most?",
      options: [
        { id: "h1", text: language === 'ar' ? "التكنولوجيا والابتكار" : "Technology and innovation" },
        { id: "h2", text: language === 'ar' ? "الأعمال والإدارة" : "Business and management" },
        { id: "h3", text: language === 'ar' ? "الصحة والرعاية" : "Health and care" },
        { id: "h4", text: language === 'ar' ? "الفنون والتصميم" : "Arts and design" }
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
      // Submit assessment
      handleSubmitAssessment();
    }
  };

  const handleSubmitAssessment = () => {
    setIsSubmitting(true);
    
    // Simulate processing the results
    setTimeout(() => {
      // Calculate mock skill scores based on answers
      const skillScores: Record<string, number> = {
        'analytical': 0,
        'creative': 0,
        'collaborative': 0,
        'technical': 0,
        'leadership': 0
      };
      
      // Very simplified algorithm - in reality would be more sophisticated
      Object.entries(selectedOptions).forEach(([questionIndex, optionId]) => {
        const qIndex = parseInt(questionIndex);
        
        // Based on first character of option ID
        const optionType = optionId.charAt(0);
        
        if (optionType === 'a' || optionType === 'd') skillScores.analytical += 10;
        if (optionType === 'b' || optionType === 'f') skillScores.technical += 10;
        if (optionType === 'c' || optionType === 'g') skillScores.collaborative += 10;
        if (optionType === 'e') skillScores.leadership += 10;
        
        // Option number (1-4)
        const optionNumber = parseInt(optionId.charAt(1));
        if (optionNumber === 4) skillScores.creative += 15;
        if (optionNumber === 3) skillScores.collaborative += 5;
        if (optionNumber === 2) skillScores.analytical += 5;
        if (optionNumber === 1) skillScores.technical += 5;
      });
      
      // Determine recommended paths based on highest scores
      const sortedSkills = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
      const topSkills = sortedSkills.slice(0, 2).map(skill => skill[0]);
      
      // Map skills to career paths
      const recommendedPaths = topSkills.map(skill => {
        switch(skill) {
          case 'analytical':
            return language === 'ar' ? 'محلل بيانات' : 'Data Analyst';
          case 'creative':
            return language === 'ar' ? 'مصمم تجربة مستخدم' : 'UX Designer';
          case 'collaborative':
            return language === 'ar' ? 'مدير مشاريع' : 'Project Manager';
          case 'technical':
            return language === 'ar' ? 'مطور برمجيات' : 'Software Developer';
          case 'leadership':
            return language === 'ar' ? 'قائد فريق تقني' : 'Technical Team Lead';
          default:
            return language === 'ar' ? 'متخصص تقني' : 'Technology Specialist';
        }
      });
      
      const assessmentResult: AssessmentResult = {
        timestamp: new Date().toISOString(),
        answers: selectedOptions,
        skillScores,
        recommendedPaths
      };
      
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
  
  const content = {
    ar: {
      title: "التقييم الذكي",
      home: "الرئيسية",
      assessmentIntro: "اكتشف مهاراتك ومستقبلك المهني",
      assessmentDesc: "سيساعدك هذا التقييم على فهم نقاط قوتك واهتماماتك، واقتراح المسارات التعليمية والمهنية التي تناسبك.",
      step1: "15 سؤال قصير لتحليل مهاراتك واهتماماتك.",
      step2: "تحليل متقدم بالذكاء الاصطناعي لتحديد نقاط قوتك.",
      step3: "توصيات مخصصة للمسارات التعليمية والمهنية.",
      startButton: "ابدأ التقييم الآن",
      estimatedTime: "الوقت المقدر: 5-7 دقائق",
      processing: "جاري معالجة إجاباتك...",
      resultTitle: "نتائج التقييم",
      yourStrengths: "نقاط قوتك",
      recommendedPaths: "المسارات الموصى بها",
      startNew: "بدء تقييم جديد",
      exploreCourses: "استكشف الدورات المناسبة"
    },
    en: {
      title: "Smart Assessment",
      home: "Home",
      assessmentIntro: "Discover Your Skills and Career Future",
      assessmentDesc: "This assessment will help you understand your strengths and interests, and suggest educational and career paths that suit you.",
      step1: "15 short questions to analyze your skills and interests.",
      step2: "Advanced AI analysis to identify your strengths.",
      step3: "Personalized recommendations for educational and career paths.",
      startButton: "Start Assessment Now",
      estimatedTime: "Estimated time: 5-7 minutes",
      processing: "Processing your answers...",
      resultTitle: "Assessment Results",
      yourStrengths: "Your Strengths",
      recommendedPaths: "Recommended Paths",
      startNew: "Start New Assessment",
      exploreCourses: "Explore Suitable Courses"
    }
  };
  
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header with back button */}
      <header className="bg-white dark:bg-gray-800 p-4 shadow-sm flex items-center">
        <Link to="/" className="text-gray-600 dark:text-gray-300">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center dark:text-white">{currentContent.title}</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </header>

      {!isStarted ? (
        <div className="p-5">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-skillora-blue dark:text-blue-400">{currentContent.assessmentIntro}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {currentContent.assessmentDesc}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                <p className="dark:text-gray-200">{currentContent.step1}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                <p className="dark:text-gray-200">{currentContent.step2}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-skillora-blue text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                <p className="dark:text-gray-200">{currentContent.step3}</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsStarted(true)}
              className="btn-primary w-full text-lg"
            >
              {currentContent.startButton}
            </button>
          </div>
          
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>{currentContent.estimatedTime}</p>
          </div>
        </div>
      ) : result ? (
        <div className="p-5">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-skillora-blue dark:text-blue-400 text-center">
              {currentContent.resultTitle}
            </h2>
            
            <h3 className="font-bold mb-3 dark:text-white">{currentContent.yourStrengths}</h3>
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
                          skill === 'technical' ? 'التقنية' : 'القيادة'
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
                          'bg-skillora-orange'
                        }`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
            
            <h3 className="font-bold mb-3 dark:text-white">{currentContent.recommendedPaths}</h3>
            <div className="space-y-2 mb-6">
              {result.recommendedPaths.map((path, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-skillora-blue' : 'bg-skillora-green'
                  }`}></div>
                  <span className="dark:text-white">{path}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={resetAssessment}>
                {currentContent.startNew}
              </Button>
              <Button as={Link} to="/courses">
                {currentContent.exploreCourses}
              </Button>
            </div>
          </div>
        </div>
      ) : isSubmitting ? (
        <div className="p-5 h-64 flex flex-col items-center justify-center">
          <LoaderCircle size={48} className="text-skillora-blue animate-spin mb-4" />
          <p className="text-gray-700 dark:text-gray-300">{currentContent.processing}</p>
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
