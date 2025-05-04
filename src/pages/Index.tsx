import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, LineChart, Brain } from "lucide-react";
import BottomNavbar from "@/components/BottomNavbar";
import ActionButton from "@/components/ActionButton";
import SkillCard from "@/components/SkillCard";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = {
    ar: {
      heroTitle: "ارسم مستقبلك بمهارات اليوم والغد!",
      heroDesc: "اكتشف المهارات المطلوبة في سوق العمل المستقبلي وطوّر خطة مسارك المهني",
      startAssessment: "ابدأ التقييم",
      exploreSkills: "استكشاف المهارات",
      planFuture: "خطط لمستقبلك",
      featuredSkills: "المهارات المميزة",
      viewAll: "عرض الكل",
      skills: [
        {
          title: "التفكير النقدي",
          description: "القدرة على تحليل المعلومات وتقييمها بشكل موضوعي",
          usage: "الأبحاث، حل المشكلات، اتخاذ القرارات"
        },
        {
          title: "البرمجة الأساسية",
          description: "فهم أساسيات كتابة التعليمات البرمجية وحل المشكلات",
          usage: "تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي"
        }
      ]
    },
    en: {
      heroTitle: "Shape your future with today's and tomorrow's skills!",
      heroDesc: "Discover skills demanded by the future job market and develop your career path plan",
      startAssessment: "Start Assessment",
      exploreSkills: "Explore Skills",
      planFuture: "Plan Your Future",
      featuredSkills: "Featured Skills",
      viewAll: "View All",
      skills: [
        {
          title: "Critical Thinking",
          description: "The ability to analyze and evaluate information objectively",
          usage: "Research, problem solving, decision making"
        },
        {
          title: "Basic Programming",
          description: "Understanding fundamentals of coding and problem solving",
          usage: "Software development, data analysis, AI"
        }
      ]
    }
  };

  const currentLanguage = content[language];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="p-4 pb-24">
        {/* Hero Section */}
        <section className="px-5 py-8 bg-gradient-to-br from-skillora-blue to-blue-700 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">{currentLanguage.heroTitle}</h2>
          <p className="text-center opacity-90 mb-6">{currentLanguage.heroDesc}</p>
        </section>

        {/* Main Actions Section */}
        <section className="px-5 py-8">
          <div className="space-y-4">
            <ActionButton 
              text={currentLanguage.startAssessment} 
              to="/assessment" 
              variant="primary"
              icon={<Brain size={24} />}
            />
            <ActionButton 
              text={currentLanguage.exploreSkills} 
              to="/skills" 
              variant="accent"
              icon={<BookOpen size={24} />}
            />
            <ActionButton 
              text={currentLanguage.planFuture} 
              to="/planning" 
              variant="success"
              icon={<LineChart size={24} />}
            />
          </div>
        </section>

        {/* Featured Skills Preview */}
        <section className="px-5 py-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">{currentLanguage.featuredSkills}</h2>
            <button 
              onClick={() => navigate('/skills')}
              className="text-skillora-blue dark:text-blue-400 font-medium text-sm"
            >
              {currentLanguage.viewAll}
            </button>
          </div>
          
          <div className="space-y-4">
            {currentLanguage.skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                usage={skill.usage}
              />
            ))}
          </div>
        </section>

        {/* Add Contact Section */}
        <section className="mt-6">
          <ContactSection />
        </section>
      </main>
      
      <BottomNavbar />
    </div>
  );
};

export default Index;
