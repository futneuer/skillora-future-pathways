
import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, LineChart, Brain, Sparkles } from "lucide-react";
import BottomNavbar from "@/components/BottomNavbar";
import ActionButton from "@/components/ActionButton";
import SkillCard from "@/components/SkillCard";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ContactSection from "@/components/ContactSection";
import Logo from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();
  const { theme } = useTheme();
  
  const content = {
    ar: {
      heroTitle: "ارسم مستقبلك بمهارات اليوم والغد!",
      heroDesc: "اكتشف المهارات المطلوبة في سوق العمل المستقبلي وطوّر خطة مسارك المهني",
      startAssessment: "ابدأ التقييم",
      exploreSkills: "استكشاف المهارات",
      planFuture: "خطط لمستقبلك",
      featuredSkills: "المهارات المميزة",
      viewAll: "عرض الكل",
      welcome: "مرحبًا بك في",
      unleashSkills: "أطلق العنان لإمكاناتك",
      discoverPath: "اكتشف مسارك المهني المثالي",
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
      welcome: "Welcome to",
      unleashSkills: "Unleash Your Potential",
      discoverPath: "Discover Your Ideal Career Path",
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
        {/* Enhanced Hero Section with Animation */}
        <section className="rounded-2xl overflow-hidden mb-8">
          <div className="relative">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-skillora-blue via-blue-600 to-purple-700 opacity-90"></div>
            
            {/* Animated Pattern Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            
            <div className="relative z-10 py-16 px-6 text-center">
              {/* Welcome Message with Animation */}
              <div className="flex flex-col items-center justify-center mb-6 animate-fade-in">
                <p className="text-white text-lg mb-2 opacity-90">{currentLanguage.welcome}</p>
                <div className="flex items-center justify-center mb-4">
                  <Logo size="large" className="text-white" />
                </div>
              </div>
              
              {/* Main Headline with Sparkles */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 text-yellow-300" />
                {currentLanguage.unleashSkills}
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </h1>
              
              <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
                {currentLanguage.discoverPath}
              </p>
              
              {/* Call to Action Button */}
              <button 
                onClick={() => navigate('/assessment')}
                className="bg-white text-skillora-blue px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                {currentLanguage.startAssessment}
              </button>
            </div>
          </div>
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
