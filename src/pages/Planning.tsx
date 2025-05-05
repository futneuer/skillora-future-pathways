
import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, GraduationCap, ArrowRight, Info, Star, CheckCircle2, Target, Compass, BarChart2, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Planning = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'career' | 'education' | 'goals' | 'compare'>('career');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [compareItems, setCompareItems] = useState<string[]>([]);

  // Career paths with enhanced data
  const careerPaths = [
    {
      id: "software-dev",
      title: language === "en" ? "Software Development" : "تطوير البرمجيات",
      description: language === "en" ? "Design, develop, and maintain software applications." : "تصميم وتطوير وصيانة تطبيقات البرمجيات.",
      skills: ["JavaScript", "Python", "React", "Git"],
      growth: "22%",
      salary: language === "en" ? "$105,000" : "105,000 دولار",
      icon: <Briefcase className="h-5 w-5" />,
      timeToMastery: language === "en" ? "2-5 years" : "2-5 سنوات",
      demandLevel: language === "en" ? "Very High" : "عالي جدا",
      companies: ["Google", "Microsoft", "Amazon", "Meta"]
    },
    {
      id: "data-science",
      title: language === "en" ? "Data Science" : "علوم البيانات",
      description: language === "en" ? "Analyze and interpret complex data to inform business decisions." : "تحليل وتفسير البيانات المعقدة لإرشاد قرارات الأعمال.",
      skills: ["Python", "R", "SQL", "Machine Learning"],
      growth: "31%",
      salary: language === "en" ? "$120,000" : "120,000 دولار",
      icon: <Briefcase className="h-5 w-5" />,
      timeToMastery: language === "en" ? "2-4 years" : "2-4 سنوات",
      demandLevel: language === "en" ? "High" : "عالي",
      companies: ["IBM", "Amazon", "Microsoft", "Netflix"]
    },
    {
      id: "ux-ui",
      title: language === "en" ? "UX/UI Design" : "تصميم تجربة/واجهة المستخدم",
      description: language === "en" ? "Create user-friendly interfaces and improve user experience." : "إنشاء واجهات سهلة الاستخدام وتحسين تجربة المستخدم.",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
      growth: "13%",
      salary: language === "en" ? "$95,000" : "95,000 دولار",
      icon: <Briefcase className="h-5 w-5" />,
      timeToMastery: language === "en" ? "1-3 years" : "1-3 سنوات",
      demandLevel: language === "en" ? "Medium" : "متوسط",
      companies: ["Apple", "Google", "Airbnb", "Uber"]
    },
    {
      id: "cybersecurity",
      title: language === "en" ? "Cybersecurity" : "الأمن السيبراني",
      description: language === "en" ? "Protect systems and networks from digital attacks." : "حماية الأنظمة والشبكات من الهجمات الرقمية.",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Cryptography"],
      growth: "33%",
      salary: language === "en" ? "$110,000" : "110,000 دولار",
      icon: <Briefcase className="h-5 w-5" />,
      timeToMastery: language === "en" ? "3-5 years" : "3-5 سنوات", 
      demandLevel: language === "en" ? "Very High" : "عالي جدا",
      companies: ["Cisco", "IBM", "Microsoft", "Crowdstrike"]
    },
  ];

  // Education paths with enhanced data
  const educationPaths = [
    {
      id: "cs-degree",
      title: language === "en" ? "Computer Science Degree" : "شهادة في علوم الحاسوب",
      description: language === "en" ? "Comprehensive foundation in computing principles and programming." : "أساس شامل في مبادئ الحوسبة والبرمجة.",
      duration: language === "en" ? "4 years" : "4 سنوات",
      institutions: ["MIT", "Stanford", "Carnegie Mellon"],
      outcomes: language === "en" ? "Software Engineer, Data Scientist, Systems Analyst" : "مهندس برمجيات، عالم بيانات، محلل أنظمة",
      icon: <GraduationCap className="h-5 w-5" />,
      cost: language === "en" ? "$80,000-$200,000" : "80,000-200,000 دولار",
      format: language === "en" ? "In-person/Online" : "شخصي/عبر الإنترنت",
      difficulty: language === "en" ? "High" : "صعب"
    },
    {
      id: "web-bootcamp",
      title: language === "en" ? "Web Development Bootcamp" : "معسكر تدريب تطوير الويب",
      description: language === "en" ? "Intensive, short-term training in web development technologies." : "تدريب مكثف وقصير المدى على تقنيات تطوير الويب.",
      duration: language === "en" ? "3-6 months" : "3-6 أشهر",
      institutions: ["Flatiron School", "General Assembly", "App Academy"],
      outcomes: language === "en" ? "Frontend Developer, Backend Developer, Full-Stack Developer" : "مطور واجهة أمامية، مطور خلفية، مطور الويب الشامل",
      icon: <GraduationCap className="h-5 w-5" />,
      cost: language === "en" ? "$10,000-$20,000" : "10,000-20,000 دولار",
      format: language === "en" ? "In-person/Online" : "شخصي/عبر الإنترنت",
      difficulty: language === "en" ? "Medium" : "متوسط"
    },
    {
      id: "ux-cert",
      title: language === "en" ? "UX Design Certificate" : "شهادة في تصميم تجربة المستخدم",
      description: language === "en" ? "Specialized training in user experience design principles and methods." : "تدريب متخصص في مبادئ وأساليب تصميم تجربة المستخدم.",
      duration: language === "en" ? "6-12 months" : "6-12 شهر",
      institutions: ["Google", "Interaction Design Foundation", "Nielsen Norman Group"],
      outcomes: language === "en" ? "UX Designer, UI Designer, Product Designer" : "مصمم تجربة المستخدم، مصمم واجهة المستخدم، مصمم منتج",
      icon: <GraduationCap className="h-5 w-5" />,
      cost: language === "en" ? "$5,000-$15,000" : "5,000-15,000 دولار",
      format: language === "en" ? "Online" : "عبر الإنترنت",
      difficulty: language === "en" ? "Medium" : "متوسط"
    },
    {
      id: "data-masters",
      title: language === "en" ? "Data Science Masters" : "ماجستير علوم البيانات",
      description: language === "en" ? "Advanced study of data analysis, statistics, and machine learning." : "دراسة متقدمة في تحليل البيانات والإحصاء وتعلم الآلة.",
      duration: language === "en" ? "1-2 years" : "1-2 سنة",
      institutions: ["UC Berkeley", "Harvard", "Columbia"],
      outcomes: language === "en" ? "Data Scientist, Machine Learning Engineer, Data Analyst" : "عالم بيانات، مهندس تعلم آلي، محلل بيانات",
      icon: <GraduationCap className="h-5 w-5" />,
      cost: language === "en" ? "$40,000-$100,000" : "40,000-100,000 دولار",
      format: language === "en" ? "In-person/Online" : "شخصي/عبر الإنترنت",
      difficulty: language === "en" ? "High" : "صعب"
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
    },
    {
      metric: language === "en" ? "Salary Growth" : "نمو الرواتب",
      value: language === "en" ? "5-15% annual increases for tech professionals" : "زيادات سنوية بنسبة 5-15٪ للمهنيين التقنيين"
    }
  ];

  // Career goals
  const careerGoals = [
    {
      id: "entry-level",
      title: language === "en" ? "Entry Level Position" : "وظيفة مبتدئة",
      timeframe: language === "en" ? "6-12 months" : "6-12 شهر",
      icon: <Target className="h-5 w-5" />
    },
    {
      id: "mid-level",
      title: language === "en" ? "Mid-Level Specialist" : "أخصائي متوسط المستوى",
      timeframe: language === "en" ? "2-3 years" : "2-3 سنوات",
      icon: <Target className="h-5 w-5" />
    },
    {
      id: "senior",
      title: language === "en" ? "Senior Position" : "منصب كبير",
      timeframe: language === "en" ? "5+ years" : "5+ سنوات",
      icon: <Target className="h-5 w-5" />
    },
    {
      id: "leadership",
      title: language === "en" ? "Leadership Role" : "دور قيادي",
      timeframe: language === "en" ? "7-10 years" : "7-10 سنوات",
      icon: <Target className="h-5 w-5" />
    }
  ];

  // Handle explore path button click
  const handleExplorePath = (pathType: string, pathId: string) => {
    toast.success(
      language === "en"
        ? `Exploring ${pathType} path: ${pathId}`
        : `استكشاف مسار ${pathType}: ${pathId}`
    );
    
    // In a real app, this would navigate to a detailed path page
    // For demo purposes, we'll just show a success message
    console.log(`Exploring ${pathType} path: ${pathId}`);
    
    // Navigate to courses as an example of where this might go
    setTimeout(() => {
      navigate("/courses");
    }, 1500);
  };

  // Handle adding/removing goals
  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
    
    if (!selectedGoals.includes(goalId)) {
      toast.success(
        language === "en"
          ? "Career goal added to your plan"
          : "تمت إضافة هدف مهني إلى خطتك"
      );
    }
  };

  // Handle comparison
  const toggleCompare = (itemId: string) => {
    if (compareItems.includes(itemId)) {
      setCompareItems(compareItems.filter(id => id !== itemId));
    } else {
      if (compareItems.length < 2) {
        setCompareItems([...compareItems, itemId]);
      } else {
        toast.warning(
          language === "en"
            ? "You can only compare two items. Remove one first."
            : "يمكنك مقارنة عنصرين فقط. قم بإزالة واحد أولاً."
        );
      }
    }
  };

  // Get comparison data
  const getComparisonData = () => {
    const careerItems = careerPaths.filter(item => compareItems.includes(item.id));
    const educationItems = educationPaths.filter(item => compareItems.includes(item.id));
    return [...careerItems, ...educationItems];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
          {language === "en" ? "Plan Your Future" : "خطط لمستقبلك"}
        </h1>

        {/* Enhanced Tab Navigation */}
        <Tabs
          defaultValue="career"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'career' | 'education' | 'goals' | 'compare')}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-4 mb-6">
            <TabsTrigger value="career">
              {language === "en" ? "Careers" : "المسارات المهنية"}
            </TabsTrigger>
            <TabsTrigger value="education">
              {language === "en" ? "Education" : "المسارات التعليمية"}
            </TabsTrigger>
            <TabsTrigger value="goals">
              {language === "en" ? "Set Goals" : "تحديد الأهداف"}
            </TabsTrigger>
            <TabsTrigger value="compare">
              {language === "en" ? "Compare" : "مقارنة"}
            </TabsTrigger>
          </TabsList>

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
          <TabsContent value="career" className="space-y-4 animate-fade-in">
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
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleCompare(path.id)}
                          className={compareItems.includes(path.id) ? "bg-blue-100 dark:bg-blue-900" : ""}
                        >
                          {language === "en" ? "Compare" : "مقارنة"}
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleExplorePath('career', path.id)}
                          className="flex items-center gap-2"
                        >
                          {language === "en" ? "Explore" : "استكشاف"} <ArrowRight size={16} />
                        </Button>
                      </div>
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

                    <div className="grid grid-cols-2 gap-3">
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
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Time to Master" : "وقت الإتقان"}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{path.timeToMastery}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Demand" : "الطلب"}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{path.demandLevel}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Top Companies" : "أفضل الشركات"}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {path.companies.map((company, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-blue-50 dark:bg-blue-900 rounded-full px-2 py-1 text-blue-700 dark:text-blue-300"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </TabsContent>

          {/* Education Paths Section */}
          <TabsContent value="education" className="space-y-4 animate-fade-in">
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
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleCompare(path.id)}
                          className={compareItems.includes(path.id) ? "bg-blue-100 dark:bg-blue-900" : ""}
                        >
                          {language === "en" ? "Compare" : "مقارنة"}
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleExplorePath('education', path.id)}
                          className="flex items-center gap-2"
                        >
                          {language === "en" ? "Explore" : "استكشاف"} <ArrowRight size={16} />
                        </Button>
                      </div>
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
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Duration" : "المدة"}
                        </h4>
                        <p className="text-skillora-blue dark:text-blue-400 font-medium">{path.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Format" : "الشكل"}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{path.format}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Approx. Cost" : "التكلفة التقريبية"}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{path.cost}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                          {language === "en" ? "Difficulty" : "الصعوبة"}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{path.difficulty}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                        {language === "en" ? "Career Outcomes" : "النتائج المهنية"}
                      </h4>
                      <p className="text-sm text-skillora-blue dark:text-blue-400">{path.outcomes}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </TabsContent>

          {/* Goals Setting Section */}
          <TabsContent value="goals" className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2 dark:text-white flex items-center gap-2">
                <Target className="text-skillora-blue dark:text-blue-400" size={18} />
                {language === "en" ? "Set Your Career Goals" : "حدد أهدافك المهنية"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? "Select goals and create a timeline for your career progression." 
                  : "حدد الأهداف وأنشئ جدولًا زمنيًا لتقدم حياتك المهنية."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {careerGoals.map((goal, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-all animate-fade-in hover:shadow-md ${
                      selectedGoals.includes(goal.id) 
                        ? "border-2 border-skillora-blue dark:border-blue-500" 
                        : "hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                    style={{animationDelay: `${index * 100}ms`}}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          selectedGoals.includes(goal.id)
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}>
                          {goal.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{goal.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{goal.timeframe}</p>
                        </div>
                      </div>
                      {selectedGoals.includes(goal.id) && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {selectedGoals.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {language === "en" ? "Your Timeline" : "الجدول الزمني الخاص بك"}
                  </h4>
                  <div className="relative border-l-2 border-skillora-blue dark:border-blue-500 pl-6 py-2 space-y-8">
                    {careerGoals
                      .filter(goal => selectedGoals.includes(goal.id))
                      .map((goal, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-[27px] bg-skillora-blue dark:bg-blue-500 rounded-full w-4 h-4"></div>
                          <div className="mb-1 text-skillora-blue dark:text-blue-400 font-medium">{goal.timeframe}</div>
                          <div className="text-gray-700 dark:text-gray-300">{goal.title}</div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              <Button 
                className="mt-6 w-full"
                disabled={selectedGoals.length === 0}
                onClick={() => {
                  toast.success(
                    language === "en"
                      ? "Career plan saved! We'll help you track your progress."
                      : "تم حفظ الخطة المهنية! سنساعدك على تتبع تقدمك."
                  );
                }}
              >
                {language === "en" ? "Save Career Plan" : "حفظ الخطة المهنية"}
              </Button>
            </div>
          </TabsContent>

          {/* Comparison Section */}
          <TabsContent value="compare" className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2 dark:text-white flex items-center gap-2">
                <BarChart2 className="text-skillora-blue dark:text-blue-400" size={18} />
                {language === "en" ? "Compare Paths" : "قارن المسارات"}
              </h3>
              
              {compareItems.length < 2 ? (
                <div className="text-center py-8">
                  <Compass className="mx-auto text-gray-400 dark:text-gray-500 mb-3" size={40} />
                  <p className="text-gray-500 dark:text-gray-400">
                    {language === "en" 
                      ? `Select two paths to compare (${compareItems.length}/2 selected)`
                      : `حدد مسارين للمقارنة (تم تحديد ${compareItems.length}/2)`}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    {language === "en" 
                      ? "Use the Compare button on career or education paths"
                      : "استخدم زر المقارنة على المسارات المهنية أو التعليمية"}
                  </p>
                </div>
              ) : (
                <div className="mt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1"></div>
                    {getComparisonData().map((item, index) => (
                      <div key={index} className="col-span-1 text-center">
                        <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                      </div>
                    ))}
                    
                    {/* Dynamic comparison rows */}
                    {['description', 'growth', 'salary', 'skills', 'timeToMastery', 'duration', 'cost'].map((field) => {
                      // Only show fields that are present in at least one item
                      const items = getComparisonData();
                      const hasField = items.some(item => field in item);
                      
                      if (!hasField) return null;
                      
                      let fieldLabel = '';
                      switch(field) {
                        case 'description':
                          fieldLabel = language === "en" ? "Description" : "الوصف";
                          break;
                        case 'growth':
                          fieldLabel = language === "en" ? "Growth Rate" : "معدل النمو";
                          break;
                        case 'salary':
                          fieldLabel = language === "en" ? "Salary" : "الراتب";
                          break;
                        case 'skills':
                          fieldLabel = language === "en" ? "Skills" : "المهارات";
                          break;
                        case 'timeToMastery': 
                          fieldLabel = language === "en" ? "Time to Master" : "وقت الإتقان";
                          break;
                        case 'duration':
                          fieldLabel = language === "en" ? "Duration" : "المدة";
                          break;
                        case 'cost':
                          fieldLabel = language === "en" ? "Cost" : "التكلفة";
                          break;
                        default:
                          fieldLabel = field;
                      }
                      
                      return (
                        <React.Fragment key={field}>
                          <div className="col-span-1 py-2 font-medium text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                            {fieldLabel}
                          </div>
                          
                          {items.map((item, idx) => (
                            <div key={idx} className="col-span-1 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                              {field === 'skills' && Array.isArray(item[field]) ? (
                                <div className="flex flex-wrap justify-center gap-1">
                                  {(item[field] as string[]).slice(0, 2).map((skill, i) => (
                                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300">
                                      {skill}
                                    </span>
                                  ))}
                                  {(item[field] as string[]).length > 2 && (
                                    <span className="text-xs text-gray-500">+{(item[field] as string[]).length - 2}</span>
                                  )}
                                </div>
                              ) : (
                                <span className="text-gray-600 dark:text-gray-400">{item[field] || "-"}</span>
                              )}
                            </div>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setCompareItems([])}
                  >
                    {language === "en" ? "Clear Comparison" : "مسح المقارنة"}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

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
                <Button 
                  className="mt-3 flex items-center gap-2"
                  onClick={() => handleExplorePath('career', 'software-dev')}
                >
                  {language === "en" ? "Explore Path" : "استكشاف المسار"}
                  <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900/30 border-none">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-purple-500" size={18} />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {language === "en" ? "Trending Course" : "دورة رائجة"}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {language === "en" 
                      ? "React & Next.js Masterclass" 
                      : "دورة متقدمة في React و Next.js"}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-3 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                    onClick={() => navigate('/courses')}
                  >
                    {language === "en" ? "View Course" : "عرض الدورة"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-green-900/30 border-none">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-green-500" size={18} />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {language === "en" ? "Job Match" : "وظيفة مناسبة"}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {language === "en" 
                      ? "Frontend Developer Positions" 
                      : "وظائف مطور الواجهة الأمامية"}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-3 border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/50"
                    onClick={() => {
                      toast.info(
                        language === "en"
                          ? "Job matching feature coming soon!"
                          : "ميزة مطابقة الوظائف قادمة قريبًا!"
                      );
                    }}
                  >
                    {language === "en" ? "View Jobs" : "عرض الوظائف"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Planning;

