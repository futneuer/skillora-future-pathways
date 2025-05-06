
import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, LineChart, Brain, Sparkles, Lightbulb, Award, BarChart } from "lucide-react";
import BottomNavbar from "@/components/BottomNavbar";
import ActionButton from "@/components/ActionButton";
import SkillCard from "@/components/SkillCard";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ContactSection from "@/components/ContactSection";
import Logo from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";

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
      trendingNow: "الاتجاهات الحالية",
      featuredCourses: "الدورات المميزة",
      stats: "إحصائيات سوق العمل",
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
        },
        {
          title: "الذكاء العاطفي",
          description: "القدرة على فهم وإدارة العواطف الخاصة بك وعواطف الآخرين",
          usage: "القيادة، العمل الجماعي، خدمة العملاء"
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
      trendingNow: "Trending Now",
      featuredCourses: "Featured Courses",
      stats: "Job Market Stats",
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
        },
        {
          title: "Emotional Intelligence",
          description: "The ability to understand and manage your emotions and those of others",
          usage: "Leadership, teamwork, customer service"
        }
      ]
    }
  };

  const currentLanguage = content[language];

  // Job market statistics
  const marketStats = [
    { label: language === "en" ? "Skills Gap" : "فجوة المهارات", value: "68%", icon: <BarChart className="text-red-500" /> },
    { label: language === "en" ? "Growth Fields" : "مجالات النمو", value: "12+", icon: <LineChart className="text-green-500" /> },
    { label: language === "en" ? "Top Skills" : "أهم المهارات", value: 25, icon: <Award className="text-yellow-500" /> }
  ];
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="p-4 pb-24">
        {/* Enhanced Hero Section with Animation */}
        <section className="rounded-2xl overflow-hidden mb-8 shadow-lg">
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
        <section className="px-5 py-6">
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

        {/* Market Statistics Cards */}
        <section className="px-5 py-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">{currentLanguage.stats}</h2>
          <div className="grid grid-cols-3 gap-3">
            {marketStats.map((stat, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-none shadow-sm">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="px-5 py-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Lightbulb className="text-yellow-500" size={20} />
              {currentLanguage.trendingNow}
            </h2>
          </div>
          <div className="overflow-x-auto pb-3 -mx-5 px-5">
            <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
              {["AI & Machine Learning", "Data Science", "UX/UI Design", "Digital Marketing"].map((trend, idx) => (
                <div key={idx} className="rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-4 min-w-[180px] flex items-center gap-3">
                  <div className="w-2 h-10 rounded-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Skills Preview */}
        <section className="px-5 py-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm">
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
