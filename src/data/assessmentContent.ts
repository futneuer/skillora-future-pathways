
export const getAssessmentContent = (language: 'ar' | 'en') => {
  const content = {
    ar: {
      title: "التقييم الذكي",
      home: "الرئيسية",
      assessmentIntro: "اكتشف مهاراتك ومستقبلك المهني",
      assessmentDesc: "سيساعدك هذا التقييم على فهم نقاط قوتك واهتماماتك، واقتراح المسارات التعليمية والمهنية التي تناسبك.",
      step1: "35 سؤال قصير لتحليل مهاراتك واهتماماتك.",
      step2: "تحليل متقدم بالذكاء الاصطناعي لتحديد نقاط قوتك.",
      step3: "توصيات مخصصة للمسارات التعليمية والمهنية.",
      startButton: "ابدأ التقييم الآن",
      estimatedTime: "الوقت المقدر: 10-15 دقيقة",
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
      step1: "35 short questions to analyze your skills and interests.",
      step2: "Advanced AI analysis to identify your strengths.",
      step3: "Personalized recommendations for educational and career paths.",
      startButton: "Start Assessment Now",
      estimatedTime: "Estimated time: 10-15 minutes",
      processing: "Processing your answers...",
      resultTitle: "Assessment Results",
      yourStrengths: "Your Strengths",
      recommendedPaths: "Recommended Paths",
      startNew: "Start New Assessment",
      exploreCourses: "Explore Suitable Courses"
    }
  };
  
  return content[language];
};
