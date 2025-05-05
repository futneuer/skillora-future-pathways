
import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, GraduationCap, ArrowRight, Info, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useTheme } from "@/contexts/ThemeContext";

const Planning = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'career' | 'education'>('career');

  // Career paths with enhanced data
  const careerPaths = [
    {
      title: language === "en" ? "Software Development" : "تطوير البرمجيات",
      description: language === "en" ? "Design, develop, and maintain software applications." : "تصميم وتطوير وصيانة تطبيقات البرمجيات.",
      skills: ["JavaScript", "Python", "React", "Git"],
      growth: "22%",
      salary: language === "en" ? "$105,000" : "105,000 دولار",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: language === "en" ? "Data Science" : "علوم البيانات",
      description: language === "en" ? "Analyze and interpret complex data to inform business decisions." : "تحليل وتفسير البيانات المعقدة لإرشاد قرارات الأعمال.",
      skills: ["Python", "R", "SQL", "Machine Learning"],
      growth: "31%",
      salary: language === "en" ? "$120,000" : "120,000 دولار",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: language === "en" ? "UX/UI Design" : "تصميم تجربة/واجهة المستخدم",
      description: language === "en" ? "Create user-friendly interfaces and improve user experience." : "إنشاء واجهات سهلة الاستخدام وتحسين تجربة المستخدم.",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      growth: "13%",
      salary: language === "en" ? "$95,000" : "95,000 دولار",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: language === "en" ? "Cybersecurity" : "الأمن السيبراني",
      description: language === "en" ? "Protect systems and networks from digital attacks." : "حماية الأنظمة والشبكات من الهجمات الرقمية.",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Cryptography"],
      growth: "33%",
      salary: language === "en" ? "$110,000" : "110,000 دولار",
      icon: <Briefcase className="h-5 w-5" />
    },
  ];

  // Education paths with enhanced data
  const educationPaths = [
    {
      title: language === "en" ? "Computer Science Degree" : "شهادة في علوم الحاسوب",
      description: language === "en" ? "Comprehensive foundation in computing principles and programming." : "أساس شامل في مبادئ الحوسبة والبرمجة.",
      duration: language === "en" ? "4 years" : "4 سنوات",
      institutions: ["MIT", "Stanford", "Carnegie Mellon"],
      outcomes: language === "en" ? "Software Engineer, Data Scientist, Systems Analyst" : "مهندس برمجيات، عالم بيانات، محلل أنظمة",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: language === "en" ? "Web Development Bootcamp" : "معسكر تدريب تطوير الويب",
      description: language === "en" ? "Intensive, short-term training in web development technologies." : "تدريب مكثف وقصير المدى على تقنيات تطوير الويب.",
      duration: language === "en" ? "3-6 months" : "3-6 أشهر",
      institutions: ["Flatiron School", "General Assembly", "App Academy"],
      outcomes: language === "en" ? "Frontend Developer, Backend Developer, Full-Stack Developer" : "مطور واجهة أمامية، مطور خلفية، مطور الويب الشامل",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: language === "en" ? "UX Design Certificate" : "شهادة في تصميم تجربة المستخدم",
      description: language === "en" ? "Specialized training in user experience design principles and methods." : "تدريب متخصص في مبادئ وأساليب تصميم تجربة المستخدم.",
      duration: language === "en" ? "6-12 months" : "6-12 شهر",
      institutions: ["Google", "Interaction Design Foundation", "Nielsen Norman Group"],
      outcomes: language === "en" ? "UX Designer, UI Designer, Product Designer" : "مصمم تجربة المستخدم، مصمم واجهة المستخدم، مصمم منتج",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: language === "en" ? "Data Science Masters" : "ماجستير علوم البيانات",
      description: language === "en" ? "Advanced study of data analysis, statistics, and machine learning." : "دراسة متقدمة في تحليل البيانات والإحصاء وتعلم الآلة.",
      duration: language === "en" ? "1-2 years" : "1-2 سنة",
      institutions: ["UC Berkeley", "Harvard", "Columbia"],
      outcomes: language === "en" ? "Data Scientist, Machine Learning Engineer, Data Analyst" : "عالم بيانات، مهندس تعلم آلي، محلل بيانات",
      icon: <GraduationCap className="h-5 w-5" />
    },
  ];

  // Market insights data
  const marketInsights = [
    {
      metric: language === "en" ? "Most In-Demand Skills" : "المهارات الأكثر طلباً",
      value: language === "en" ? "AI/ML, Cloud Computing, Data Analysis" : "الذكاء الاصطناعي/التعلم الآلي، الحوسبة السحابية، تحليل البيانات"
    },
    {
      metric: language === "en" ? "Fastest Growing Fields" : "المجالات الأسرع نمواً",
      value: language === "en" ? "Healthcare Tech, Cybersecurity, Renewable Energy" : "تكنولوجيا الرعاية الصحية، الأمن السيبراني، الطاقة المتجددة"
    },
    {
      metric: language === "en" ? "Remote Work Trend" : "اتجاه العمل عن بعد",
      value: language === "en" ? "25% increase in remote positions annually" : "زيادة 25٪ في الوظائف عن بعد سنويًا"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
          {language === "en" ? "Plan Your Future" : "خطط لمستقبلك"}
        </h1>

        {/* Tab Navigation */}
        <div className="flex mb-6 border-b dark:border-gray-700">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'career'
                ? 'border-b-2 border-skillora-blue dark:border-blue-400 text-skillora-blue dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('career')}
          >
            {language === "en" ? "Career Paths" : "المسارات المهنية"}
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'education'
                ? 'border-b-2 border-skillora-blue dark:border-blue-400 text-skillora-blue dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('education')}
          >
            {language === "en" ? "Education Paths" : "المسارات التعليمية"}
          </button>
        </div>

        {/* Market Insights */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-bold mb-3 dark:text-white flex items-center gap-2">
            <Info className="text-skillora-blue dark:text-blue-400" size={20} />
            {language === "en" ? "Market Insights" : "رؤى السوق"}
          </h2>
          <div className="space-y-3">
            {marketInsights.map((insight, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{insight.metric}</span>
                <span className="text-sm text-gray-800 dark:text-gray-200">{insight.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths Section */}
        {activeTab === 'career' && (
          <div className="space-y-4">
            {careerPaths.map((path, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className="hover:shadow-md transition-all cursor-pointer hover:border-skillora-blue dark:hover:border-blue-400 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                          {path.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{path.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {language === "en" ? "Growth: " : "النمو: "}{path.growth}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="text-gray-400" size={18} />
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className={`w-80 p-4 ${theme === 'light' ? 'bg-white text-gray-900 border border-gray-200' : 'bg-gray-800 text-white border border-gray-700'}`}>
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">{path.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{path.description}</p>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Key Skills" : "المهارات الرئيسية"}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {path.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Growth Rate" : "معدل النمو"}
                        </h4>
                        <p className="text-skillora-blue dark:text-blue-400 font-medium">{path.growth}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Avg. Salary" : "متوسط ​​الراتب"}
                        </h4>
                        <p className="text-skillora-blue dark:text-blue-400 font-medium">{path.salary}</p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        )}

        {/* Education Paths Section */}
        {activeTab === 'education' && (
          <div className="space-y-4">
            {educationPaths.map((path, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className="hover:shadow-md transition-all cursor-pointer hover:border-skillora-blue dark:hover:border-blue-400 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                          {path.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{path.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {language === "en" ? "Duration: " : "المدة: "}{path.duration}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="text-gray-400" size={18} />
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className={`w-80 p-4 ${theme === 'light' ? 'bg-white text-gray-900 border border-gray-200' : 'bg-gray-800 text-white border border-gray-700'}`}>
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">{path.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{path.description}</p>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Top Institutions" : "أفضل المؤسسات"}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {path.institutions.map((institution, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300"
                          >
                            {institution}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Career Outcomes" : "النتائج المهنية"}
                      </h4>
                      <p className="text-sm text-skillora-blue dark:text-blue-400">{path.outcomes}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Duration" : "المدة"}
                      </h4>
                      <p className="text-skillora-blue dark:text-blue-400 font-medium">{path.duration}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        )}

        {/* Recommended for You Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
            <Star className="text-skillora-blue dark:text-blue-400" size={20} />
            {language === "en" ? "Recommended for You" : "موصى به لك"}
          </h2>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 border-none">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {language === "en" ? "Based on your skills assessment" : "بناءً على تقييم مهاراتك"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {language === "en" 
                  ? "Your technical skills show potential for a career in Software Development" 
                  : "تُظهر مهاراتك التقنية إمكانات لمهنة في تطوير البرمجيات"}
              </p>
              <button className="mt-3 text-sm text-white bg-skillora-blue hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                {language === "en" ? "Explore Path" : "استكشاف المسار"}
                <ArrowRight size={16} />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Planning;
