
import { AssessmentResult } from "@/types/assessment";

export const analyzeAssessment = (
  selectedOptions: Record<number, string>,
  language: 'ar' | 'en'
): AssessmentResult => {
  // Calculate skill scores based on answers
  const skillScores: Record<string, number> = {
    'analytical': 0,
    'creative': 0,
    'collaborative': 0,
    'technical': 0,
    'leadership': 0,
    'business': 0,
    'design': 0,
    'communication': 0
  };
  
  // Enhanced algorithm to process the expanded question set
  Object.entries(selectedOptions).forEach(([questionIndex, optionId]) => {
    // First character of option ID gives skill category
    const optionType = optionId.charAt(0);
    
    // Technical skills
    if (['a', 'd', 'm', 'q', 'x'].includes(optionType)) skillScores.technical += 5;
    
    // Analytical skills
    if (['a', 'd', 'k', 'dd', 'ff'].includes(optionType)) skillScores.analytical += 5;
    
    // Creative skills
    if (['r', 't', 'v', 'cc', 'ee'].includes(optionType)) skillScores.creative += 5;
    
    // Collaborative skills
    if (['c', 'g', 'j', 'w', 'ee'].includes(optionType)) skillScores.collaborative += 5;
    
    // Leadership skills
    if (['e', 'j', 'p', 'gg', 'hh'].includes(optionType)) skillScores.leadership += 5;
    
    // Business skills
    if (['h', 'n', 'q', 'aa', 'ii'].includes(optionType)) skillScores.business += 5;
    
    // Design skills
    if (['f', 'q', 't', 'u', 'aa'].includes(optionType)) skillScores.design += 5;
    
    // Communication skills
    if (['p', 'v', 'w', 'ff', 'gg'].includes(optionType)) skillScores.communication += 5;
    
    // Option number (1-4) adds additional points to specific skills
    const optionNumber = parseInt(optionId.substring(1));
    if (optionNumber === 1) {
      skillScores.analytical += 3;
      skillScores.technical += 2;
    }
    if (optionNumber === 2) {
      skillScores.creative += 3;
      skillScores.business += 2;
    }
    if (optionNumber === 3) {
      skillScores.collaborative += 3;
      skillScores.communication += 2;
    }
    if (optionNumber === 4) {
      skillScores.leadership += 3;
      skillScores.design += 2;
    }
  });
  
  // Normalize scores to percentages
  const questionCount = 35;
  Object.keys(skillScores).forEach(skill => {
    const raw = skillScores[skill];
    // Maximum possible score would be questionCount * (base points + bonus points)
    const normalizedScore = Math.min(Math.round((raw / (questionCount * 8)) * 100), 100);
    skillScores[skill] = normalizedScore;
  });
  
  // Determine recommended paths based on highest scores
  const sortedSkills = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
  const topSkills = sortedSkills.slice(0, 3).map(skill => skill[0]);
  
  // Map skills to expanded career paths
  const recommendedPaths = topSkills.map(skill => {
    switch(skill) {
      case 'analytical':
        return language === 'ar' ? 'محلل بيانات / باحث / مخطط استراتيجي' : 'Data Analyst / Researcher / Strategic Planner';
      case 'creative':
        return language === 'ar' ? 'مصمم تجربة مستخدم / مدير إبداعي / مبتكر منتجات' : 'UX Designer / Creative Director / Product Innovator';
      case 'collaborative':
        return language === 'ar' ? 'مدير مشاريع / منسق فرق / مستشار موارد بشرية' : 'Project Manager / Team Coordinator / HR Consultant';
      case 'technical':
        return language === 'ar' ? 'مطور برمجيات / مهندس بيانات / محلل نظم' : 'Software Developer / Data Engineer / Systems Analyst';
      case 'leadership':
        return language === 'ar' ? 'مدير تنفيذي / قائد فريق تقني / مدير مشاريع' : 'Executive Manager / Technical Team Lead / Project Director';
      case 'business':
        return language === 'ar' ? 'محلل أعمال / مدير تسويق / مطور أعمال' : 'Business Analyst / Marketing Manager / Business Developer';
      case 'design':
        return language === 'ar' ? 'مصمم واجهات / مدير فني / مصمم منتجات' : 'UI Designer / Art Director / Product Designer';
      case 'communication':
        return language === 'ar' ? 'مدير علاقات عامة / مسؤول تواصل / مدرب مهني' : 'PR Manager / Communications Officer / Professional Trainer';
      default:
        return language === 'ar' ? 'متخصص تقني' : 'Technology Specialist';
    }
  });

  return {
    timestamp: new Date().toISOString(),
    answers: selectedOptions,
    skillScores,
    recommendedPaths
  };
};
