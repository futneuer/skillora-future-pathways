
import { AssessmentResult } from "@/types/assessment";

export const analyzeAssessment = (
  answers: Record<number, string>,
  language: 'ar' | 'en'
): AssessmentResult => {
  // Initialize score counters for different skill categories
  const skillScores = {
    technical: 0,
    analytical: 0,
    creative: 0,
    interpersonal: 0,
    leadership: 0,
    research: 0,
    organizational: 0,
    artistic: 0,
    agricultural: 0,
    logistics: 0,
    healthcare: 0,
    legal: 0,
    business: 0,
    educational: 0,
    engineering: 0
  };

  // Analysis logic - this is simplified and would be more sophisticated in a real app
  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    const value = getAnswerValue(answer);
    
    // Technical skills
    if ([1, 6, 14].includes(qId)) {
      skillScores.technical += value;
    }
    
    // Analytical skills
    if ([2, 8, 11].includes(qId)) {
      skillScores.analytical += value;
    }
    
    // Creative skills
    if ([4, 10].includes(qId)) {
      skillScores.creative += value;
    }
    
    // Interpersonal skills
    if ([3, 7, 12].includes(qId)) {
      skillScores.interpersonal += value;
    }
    
    // Leadership skills
    if ([7, 10, 12, 26].includes(qId)) {
      skillScores.leadership += value;
    }
    
    // Research skills
    if ([5, 15].includes(qId)) {
      skillScores.research += value;
    }
    
    // Organizational skills
    if ([8, 9, 13, 20].includes(qId)) {
      skillScores.organizational += value;
    }
    
    // New categories
    // Artistic skills
    if ([4, 16, 17].includes(qId)) {
      skillScores.artistic += value;
    }
    
    // Agricultural skills
    if ([18, 19].includes(qId)) {
      skillScores.agricultural += value;
    }
    
    // Logistics skills
    if ([20, 21].includes(qId)) {
      skillScores.logistics += value;
    }
    
    // Healthcare skills
    if ([22, 23].includes(qId)) {
      skillScores.healthcare += value;
    }
    
    // Legal skills
    if ([24, 25].includes(qId)) {
      skillScores.legal += value;
    }
    
    // Business skills
    if ([26, 27].includes(qId)) {
      skillScores.business += value;
    }
    
    // Educational skills
    if ([28, 29].includes(qId)) {
      skillScores.educational += value;
    }
    
    // Engineering skills
    if ([2, 30].includes(qId)) {
      skillScores.engineering += value;
    }
  });
  
  // Normalize scores
  const maxPossibleScore = 5; // Maximum score per question
  const normalized = Object.entries(skillScores).reduce((acc, [skill, score]) => {
    const questionCount = getQuestionCountForSkill(skill);
    const normalizedScore = (score / (maxPossibleScore * questionCount)) * 100;
    acc[skill] = Math.round(normalizedScore);
    return acc;
  }, {} as Record<string, number>);
  
  // Get top skill categories
  const sortedSkills = Object.entries(normalized)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([skill]) => skill);
  
  // Recommend career paths based on top skills
  const recommendedPaths = getRecommendedPaths(sortedSkills, language);
  
  return {
    timestamp: new Date().toISOString(),
    answers,
    skillScores: normalized,
    recommendedPaths
  };
};

// Helper function to convert letter answer to numeric value
const getAnswerValue = (answer: string): number => {
  switch (answer) {
    case 'a': return 5; // Strongly agree
    case 'b': return 4; // Agree
    case 'c': return 3; // Neutral
    case 'd': return 2; // Disagree
    case 'e': return 1; // Strongly disagree
    default: return 0;
  }
};

// Helper function to determine how many questions contribute to each skill category
const getQuestionCountForSkill = (skill: string): number => {
  switch (skill) {
    case 'technical': return 3;
    case 'analytical': return 3;
    case 'creative': return 2;
    case 'interpersonal': return 3;
    case 'leadership': return 4;
    case 'research': return 2;
    case 'organizational': return 4;
    case 'artistic': return 3;
    case 'agricultural': return 2;
    case 'logistics': return 2;
    case 'healthcare': return 2;
    case 'legal': return 2;
    case 'business': return 2;
    case 'educational': return 2;
    case 'engineering': return 2;
    default: return 1;
  }
};

// Helper function to get career recommendations based on top skills
const getRecommendedPaths = (topSkills: string[], language: 'ar' | 'en'): string[] => {
  const recommendations: { [key: string]: string[] } = {
    technical: language === 'ar' 
      ? ['مطور برمجيات', 'مهندس شبكات', 'محلل بيانات', 'مهندس ذكاء اصطناعي', 'مطور تطبيقات الويب والجوال']
      : ['Software Developer', 'Network Engineer', 'Data Analyst', 'AI Engineer', 'Web & Mobile App Developer'],
    
    analytical: language === 'ar'
      ? ['محلل بيانات', 'محلل أعمال', 'باحث سوق', 'مستشار استثمار', 'مهندس بحوث العمليات']
      : ['Data Analyst', 'Business Analyst', 'Market Researcher', 'Investment Consultant', 'Operations Research Engineer'],
    
    creative: language === 'ar'
      ? ['مصمم جرافيك', 'مصمم واجهات مستخدم', 'كاتب محتوى', 'منتج إبداعي', 'مصمم منتجات']
      : ['Graphic Designer', 'UI/UX Designer', 'Content Writer', 'Creative Producer', 'Product Designer'],
    
    interpersonal: language === 'ar'
      ? ['مدير علاقات عامة', 'مستشار موارد بشرية', 'مدرب تنمية بشرية', 'مندوب مبيعات', 'أخصائي تسويق']
      : ['Public Relations Manager', 'HR Consultant', 'Personal Development Coach', 'Sales Representative', 'Marketing Specialist'],
    
    leadership: language === 'ar'
      ? ['مدير مشاريع', 'مدير عمليات', 'قائد فريق', 'مدير إداري', 'استشاري أعمال']
      : ['Project Manager', 'Operations Manager', 'Team Leader', 'Administrative Director', 'Business Consultant'],
    
    research: language === 'ar'
      ? ['باحث علمي', 'باحث سوق', 'محلل سياسات', 'مطور منتجات', 'باحث في مجال الذكاء الاصطناعي']
      : ['Scientific Researcher', 'Market Researcher', 'Policy Analyst', 'Product Developer', 'AI Researcher'],
    
    organizational: language === 'ar'
      ? ['مدير إداري', 'مخطط مالي', 'محلل جودة', 'مدير مشروعات', 'مخطط استراتيجي']
      : ['Administrative Manager', 'Financial Planner', 'Quality Analyst', 'Project Manager', 'Strategic Planner'],
      
    // New categories
    artistic: language === 'ar'
      ? ['فنان تشكيلي', 'مصمم غرافيك', 'مصور فوتوغرافي', 'مصمم أزياء', 'مصمم داخلي']
      : ['Fine Artist', 'Graphic Designer', 'Photographer', 'Fashion Designer', 'Interior Designer'],
      
    agricultural: language === 'ar'
      ? ['مهندس زراعي', 'خبير بيئة', 'مدير مزرعة', 'باحث تنمية مستدامة', 'مختص تربة ومياه']
      : ['Agricultural Engineer', 'Environmental Specialist', 'Farm Manager', 'Sustainable Development Researcher', 'Soil and Water Specialist'],
      
    logistics: language === 'ar'
      ? ['مدير لوجستيات', 'مخطط سلاسل التوريد', 'محلل نقل', 'مدير عمليات الشحن', 'مشرف التوزيع']
      : ['Logistics Manager', 'Supply Chain Planner', 'Transportation Analyst', 'Shipping Operations Manager', 'Distribution Supervisor'],
      
    healthcare: language === 'ar'
      ? ['طبيب', 'ممرض', 'معالج فيزيائي', 'صيدلي', 'أخصائي تغذية']
      : ['Physician', 'Nurse', 'Physical Therapist', 'Pharmacist', 'Nutritionist'],
      
    legal: language === 'ar'
      ? ['محامي', 'مستشار قانوني', 'قاضي', 'باحث قانوني', 'كاتب عدل']
      : ['Lawyer', 'Legal Consultant', 'Judge', 'Legal Researcher', 'Notary'],
      
    business: language === 'ar'
      ? ['مدير تنفيذي', 'مدير تسويق', 'محلل مالي', 'رائد أعمال', 'مستشار أعمال']
      : ['Executive Manager', 'Marketing Director', 'Financial Analyst', 'Entrepreneur', 'Business Consultant'],
      
    educational: language === 'ar'
      ? ['معلم', 'أستاذ جامعي', 'مطور مناهج', 'مرشد تربوي', 'مدير مدرسة']
      : ['Teacher', 'University Professor', 'Curriculum Developer', 'Educational Counselor', 'School Principal'],
      
    engineering: language === 'ar'
      ? ['مهندس مدني', 'مهندس معماري', 'مهندس ميكانيكي', 'مهندس كهربائي', 'مهندس صناعي']
      : ['Civil Engineer', 'Architect', 'Mechanical Engineer', 'Electrical Engineer', 'Industrial Engineer']
  };
  
  // Collect recommendations from top skills (avoid duplicates)
  const allRecommendations = new Set<string>();
  
  topSkills.forEach(skill => {
    const skillRecs = recommendations[skill] || [];
    skillRecs.forEach(rec => allRecommendations.add(rec));
  });
  
  return Array.from(allRecommendations).slice(0, 5); // Return top 5 unique recommendations
};
