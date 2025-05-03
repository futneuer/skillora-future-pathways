
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Clock, Star, Filter, Search, TrendingUp, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/CourseCard";
import { useToast } from "@/components/ui/use-toast";

type Course = {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  image: string;
  price: string;
  category: string;
  tags: string[];
  popular: boolean;
  featured: boolean;
  description: string;
  lastUpdated: string;
};

const Courses = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [levelFilters, setLevelFilters] = useState<string[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  
  const handleEnroll = (courseId: string, courseTitle: string) => {
    // Store enrolled courses in local storage
    const enrolled = [...enrolledCourses, courseId];
    setEnrolledCourses(enrolled);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolled));
    
    toast({
      title: language === 'ar' ? "تم التسجيل بنجاح!" : "Successfully Enrolled!",
      description: language === 'ar' 
        ? `تم تسجيلك في دورة: ${courseTitle}` 
        : `You've been enrolled in: ${courseTitle}`,
      duration: 3000,
    });
  };
  
  useEffect(() => {
    // Load enrolled courses from local storage
    const savedEnrolled = localStorage.getItem('enrolledCourses');
    if (savedEnrolled) {
      setEnrolledCourses(JSON.parse(savedEnrolled));
    }
  }, []);
  
  const content = {
    ar: {
      title: "الدورات المتاحة",
      viewAll: "عرض الكل",
      categories: {
        all: "الكل",
        popular: "الأكثر شعبية",
        new: "الجديدة",
        technology: "التقنية",
        business: "الأعمال",
        leadership: "القيادة",
      },
      search: "ابحث عن دورات...",
      filters: "الفلاتر",
      levels: {
        all: "جميع المستويات",
        beginner: "مبتدئ",
        intermediate: "متوسط",
        advanced: "متقدم",
      },
      sort: {
        title: "ترتيب حسب",
        newest: "الأحدث أولاً",
        popular: "الأكثر شعبية",
        rating: "التقييم الأعلى",
      },
      enrollBtn: "سجل الآن",
      enrolledBtn: "تم التسجيل",
      price: {
        free: "مجاني",
        paid: "مدفوع",
      },
    },
    en: {
      title: "Available Courses",
      viewAll: "View All",
      categories: {
        all: "All",
        popular: "Most Popular",
        new: "New",
        technology: "Technology",
        business: "Business",
        leadership: "Leadership",
      },
      search: "Search courses...",
      filters: "Filters",
      levels: {
        all: "All Levels",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      sort: {
        title: "Sort By",
        newest: "Newest First",
        popular: "Most Popular",
        rating: "Highest Rated",
      },
      enrollBtn: "Enroll Now",
      enrolledBtn: "Enrolled",
      price: {
        free: "Free",
        paid: "Paid",
      },
    }
  };
  
  const coursesData: Course[] = [
    // Technology Courses
    {
      id: "tech-001",
      title: language === 'ar' ? "أساسيات الذكاء الاصطناعي" : "AI Fundamentals",
      instructor: language === 'ar' ? "د. محمد عبدالله" : "Dr. Mohammed Abdullah",
      duration: language === 'ar' ? "8 ساعات" : "8 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.8,
      students: 1240,
      image: "ai-course.jpg",
      price: language === 'ar' ? "مجاني" : "Free",
      category: "technology",
      tags: ["AI", "Machine Learning", "Data Science"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته في مختلف المجالات" 
        : "Learn the fundamentals of artificial intelligence and its applications across various domains",
      lastUpdated: "2025-04-12"
    },
    {
      id: "tech-002",
      title: language === 'ar' ? "أساسيات البرمجة بلغة Python" : "Python Programming Basics",
      instructor: language === 'ar' ? "م. أحمد الصالح" : "Ahmed Al-Saleh",
      duration: language === 'ar' ? "12 ساعة" : "12 hours",
      level: language === 'ar' ? "مبتدئ" : "Beginner",
      rating: 4.9,
      students: 2150,
      image: "python-basics.jpg",
      price: language === 'ar' ? "مجاني" : "Free",
      category: "technology",
      tags: ["Programming", "Python", "Beginners"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم أساسيات البرمجة باستخدام لغة Python، وهي إحدى أكثر لغات البرمجة انتشارًا وسهولة" 
        : "Learn programming basics with Python, one of the most popular and accessible programming languages",
      lastUpdated: "2025-04-15"
    },
    {
      id: "tech-003",
      title: language === 'ar' ? "تطوير تطبيقات الويب المتقدمة" : "Advanced Web Application Development",
      instructor: language === 'ar' ? "سارة الخالدي" : "Sarah Al-Khalidi",
      duration: language === 'ar' ? "20 ساعة" : "20 hours",
      level: language === 'ar' ? "متقدم" : "Advanced",
      rating: 4.7,
      students: 890,
      image: "web-dev.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "technology",
      tags: ["Web Development", "React", "Node.js", "Full Stack"],
      popular: false,
      featured: false,
      description: language === 'ar' 
        ? "تطوير تطبيقات ويب متكاملة ومتقدمة باستخدام أحدث التقنيات" 
        : "Build comprehensive and advanced web applications using latest technologies",
      lastUpdated: "2025-03-28"
    },
    {
      id: "tech-004",
      title: language === 'ar' ? "علوم البيانات وتحليلاتها" : "Data Science and Analytics",
      instructor: language === 'ar' ? "د. نوف الشمري" : "Dr. Nouf Al-Shamri",
      duration: language === 'ar' ? "15 ساعة" : "15 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.6,
      students: 1050,
      image: "data-science.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "technology",
      tags: ["Data Science", "Analytics", "Python", "Statistics"],
      popular: true,
      featured: false,
      description: language === 'ar' 
        ? "تعلم كيفية تحليل البيانات واستخراج المعلومات القيّمة منها لاتخاذ قرارات أفضل" 
        : "Learn how to analyze data and extract valuable insights for better decision making",
      lastUpdated: "2025-04-02"
    },
    {
      id: "tech-005",
      title: language === 'ar' ? "أمن المعلومات والشبكات" : "Information and Network Security",
      instructor: language === 'ar' ? "م. عمر الزهراني" : "Omar Al-Zahrani",
      duration: language === 'ar' ? "18 ساعة" : "18 hours",
      level: language === 'ar' ? "متقدم" : "Advanced",
      rating: 4.8,
      students: 780,
      image: "cybersecurity.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "technology",
      tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
      popular: false,
      featured: true,
      description: language === 'ar' 
        ? "تعلم أساسيات وتقنيات أمن المعلومات والشبكات لحماية البيانات والأنظمة" 
        : "Learn cybersecurity fundamentals and techniques to protect data and systems",
      lastUpdated: "2025-03-20"
    },
    {
      id: "tech-006",
      title: language === 'ar' ? "تطوير تطبيقات الهاتف المحمول" : "Mobile App Development",
      instructor: language === 'ar' ? "م. ليلى العتيبي" : "Layla Al-Otaibi",
      duration: language === 'ar' ? "16 ساعة" : "16 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.5,
      students: 970,
      image: "mobile-dev.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "technology",
      tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
      popular: false,
      featured: false,
      description: language === 'ar' 
        ? "تعلم تطوير تطبيقات للهواتف الذكية تعمل على أنظمة Android و iOS" 
        : "Learn to develop mobile applications for both Android and iOS platforms",
      lastUpdated: "2025-04-08"
    },
    {
      id: "tech-007",
      title: language === 'ar' ? "أساسيات الحوسبة السحابية" : "Cloud Computing Fundamentals",
      instructor: language === 'ar' ? "م. فيصل الحربي" : "Faisal Al-Harbi",
      duration: language === 'ar' ? "10 ساعات" : "10 hours",
      level: language === 'ar' ? "مبتدئ" : "Beginner",
      rating: 4.7,
      students: 850,
      image: "cloud-computing.jpg",
      price: language === 'ar' ? "مجاني" : "Free",
      category: "technology",
      tags: ["Cloud Computing", "AWS", "Azure", "Google Cloud"],
      popular: true,
      featured: false,
      description: language === 'ar' 
        ? "تعرف على أساسيات الحوسبة السحابية وخدماتها المختلفة" 
        : "Get to know cloud computing basics and various services",
      lastUpdated: "2025-04-10"
    },
    
    // Business Courses
    {
      id: "biz-001",
      title: language === 'ar' ? "مهارات التفكير النقدي" : "Critical Thinking Skills",
      instructor: language === 'ar' ? "أ. سارة الأحمد" : "Sarah Al-Ahmad",
      duration: language === 'ar' ? "6 ساعات" : "6 hours",
      level: language === 'ar' ? "مبتدئ" : "Beginner",
      rating: 4.6,
      students: 980,
      image: "critical-thinking.jpg",
      price: language === 'ar' ? "مجاني" : "Free",
      category: "business",
      tags: ["Critical Thinking", "Problem Solving", "Decision Making"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم كيفية التفكير بشكل نقدي وحل المشكلات المعقدة واتخاذ قرارات أفضل" 
        : "Learn how to think critically, solve complex problems, and make better decisions",
      lastUpdated: "2025-04-05"
    },
    {
      id: "biz-002",
      title: language === 'ar' ? "إدارة المشاريع الاحترافية" : "Professional Project Management",
      instructor: language === 'ar' ? "م. خالد الدوسري" : "Khalid Al-Dosari",
      duration: language === 'ar' ? "14 ساعة" : "14 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.8,
      students: 1120,
      image: "project-management.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "business",
      tags: ["Project Management", "Agile", "Scrum", "PMP"],
      popular: true,
      featured: false,
      description: language === 'ar' 
        ? "تعلم أفضل ممارسات إدارة المشاريع باستخدام منهجيات مختلفة" 
        : "Learn best practices in project management using various methodologies",
      lastUpdated: "2025-03-25"
    },
    {
      id: "biz-003",
      title: language === 'ar' ? "استراتيجيات التسويق الرقمي" : "Digital Marketing Strategies",
      instructor: language === 'ar' ? "ليلى الشمري" : "Layla Al-Shamri",
      duration: language === 'ar' ? "12 ساعة" : "12 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.7,
      students: 1340,
      image: "digital-marketing.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "business",
      tags: ["Marketing", "Digital Marketing", "Social Media", "SEO"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم استراتيجيات التسويق الرقمي الحديثة لزيادة الوصول وتحقيق النتائج" 
        : "Learn modern digital marketing strategies to increase reach and achieve results",
      lastUpdated: "2025-04-18"
    },
    {
      id: "biz-004",
      title: language === 'ar' ? "ريادة الأعمال: من الفكرة إلى المشروع" : "Entrepreneurship: From Idea to Venture",
      instructor: language === 'ar' ? "د. طارق المالكي" : "Dr. Tariq Al-Malki",
      duration: language === 'ar' ? "15 ساعة" : "15 hours",
      level: language === 'ar' ? "مبتدئ" : "Beginner",
      rating: 4.9,
      students: 2050,
      image: "entrepreneurship.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "business",
      tags: ["Entrepreneurship", "Startups", "Business Model", "Pitching"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم كيف تحول فكرتك إلى مشروع ناجح من خلال منهجية عملية" 
        : "Learn how to transform your idea into a successful venture through practical methodology",
      lastUpdated: "2025-04-20"
    },
    {
      id: "biz-005",
      title: language === 'ar' ? "الذكاء المالي والاستثمار" : "Financial Intelligence and Investment",
      instructor: language === 'ar' ? "د. منى الحميد" : "Dr. Mona Al-Hamid",
      duration: language === 'ar' ? "10 ساعات" : "10 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.6,
      students: 890,
      image: "finance.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "business",
      tags: ["Finance", "Investment", "Financial Planning"],
      popular: false,
      featured: false,
      description: language === 'ar' 
        ? "تعلم أساسيات الاستثمار والذكاء المالي لبناء ثروتك وتأمين مستقبلك المالي" 
        : "Learn investment basics and financial intelligence to build wealth and secure your financial future",
      lastUpdated: "2025-03-30"
    },
    
    // Leadership Courses
    {
      id: "lead-001",
      title: language === 'ar' ? "القيادة الفعالة في بيئة العمل" : "Effective Leadership in the Workplace",
      instructor: language === 'ar' ? "د. عادل الشريف" : "Dr. Adel Al-Sharif",
      duration: language === 'ar' ? "8 ساعات" : "8 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.8,
      students: 1180,
      image: "leadership.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "leadership",
      tags: ["Leadership", "Management", "Team Building"],
      popular: true,
      featured: true,
      description: language === 'ar' 
        ? "تعلم مهارات القيادة الفعالة وكيفية تحفيز فريق العمل لتحقيق النتائج المرجوة" 
        : "Learn effective leadership skills and how to motivate your team to achieve desired results",
      lastUpdated: "2025-04-15"
    },
    {
      id: "lead-002",
      title: language === 'ar' ? "الذكاء العاطفي للقادة" : "Emotional Intelligence for Leaders",
      instructor: language === 'ar' ? "د. هدى العنزي" : "Dr. Huda Al-Anazi",
      duration: language === 'ar' ? "6 ساعات" : "6 hours",
      level: language === 'ar' ? "متقدم" : "Advanced",
      rating: 4.9,
      students: 950,
      image: "emotional-intelligence.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "leadership",
      tags: ["Emotional Intelligence", "Leadership", "Self-awareness"],
      popular: true,
      featured: false,
      description: language === 'ar' 
        ? "تعلم كيف تطور ذكاءك العاطفي لتصبح قائداً أفضل وأكثر تأثيراً" 
        : "Learn how to develop your emotional intelligence to become a better and more influential leader",
      lastUpdated: "2025-04-22"
    },
    {
      id: "lead-003",
      title: language === 'ar' ? "بناء وتحفيز فرق العمل عن بعد" : "Building and Motivating Remote Teams",
      instructor: language === 'ar' ? "م. فاطمة السعيد" : "Fatima Al-Saeed",
      duration: language === 'ar' ? "7 ساعات" : "7 hours",
      level: language === 'ar' ? "متوسط" : "Intermediate",
      rating: 4.7,
      students: 820,
      image: "remote-teams.jpg",
      price: language === 'ar' ? "مجاني" : "Free",
      category: "leadership",
      tags: ["Remote Work", "Team Management", "Virtual Leadership"],
      popular: false,
      featured: false,
      description: language === 'ar' 
        ? "تعلم استراتيجيات قيادة وتحفيز الفرق التي تعمل عن بعد وتعزيز إنتاجيتها" 
        : "Learn strategies to lead and motivate remote teams and enhance their productivity",
      lastUpdated: "2025-04-08"
    },
    {
      id: "lead-004",
      title: language === 'ar' ? "فن التفاوض واستراتيجياته" : "The Art of Negotiation and Its Strategies",
      instructor: language === 'ar' ? "د. أحمد المحمود" : "Dr. Ahmad Al-Mahmoud",
      duration: language === 'ar' ? "8 ساعات" : "8 hours",
      level: language === 'ar' ? "متقدم" : "Advanced",
      rating: 4.8,
      students: 760,
      image: "negotiation.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "leadership",
      tags: ["Negotiation", "Communication", "Persuasion"],
      popular: false,
      featured: true,
      description: language === 'ar' 
        ? "تعلم فنون ومهارات التفاوض لتحقيق نتائج أفضل في العمل والحياة" 
        : "Learn negotiation arts and skills to achieve better results in work and life",
      lastUpdated: "2025-03-15"
    },
    {
      id: "lead-005",
      title: language === 'ar' ? "إدارة التغيير والتحول المؤسسي" : "Change Management and Organizational Transformation",
      instructor: language === 'ar' ? "د. سلطان الفهد" : "Dr. Sultan Al-Fahd",
      duration: language === 'ar' ? "12 ساعة" : "12 hours",
      level: language === 'ar' ? "متقدم" : "Advanced",
      rating: 4.6,
      students: 680,
      image: "change-management.jpg",
      price: language === 'ar' ? "مدفوع" : "Paid",
      category: "leadership",
      tags: ["Change Management", "Organizational Development", "Strategy"],
      popular: false,
      featured: false,
      description: language === 'ar' 
        ? "تعلم كيفية قيادة عمليات التغيير المؤسسي بفعالية والتغلب على مقاومة التغيير" 
        : "Learn how to effectively lead organizational change processes and overcome resistance to change",
      lastUpdated: "2025-04-01"
    }
  ];
  
  const currentLanguage = content[language];
  
  const toggleLevelFilter = (level: string) => {
    if (levelFilters.includes(level)) {
      setLevelFilters(levelFilters.filter(l => l !== level));
    } else {
      setLevelFilters([...levelFilters, level]);
    }
  };
  
  const clearFilters = () => {
    setLevelFilters([]);
    setSearchQuery("");
  };
  
  // Filter courses based on tab, search query, and level filters
  useEffect(() => {
    let filtered = [...coursesData];
    
    // Filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter(course => {
        if (activeTab === "popular") return course.popular;
        if (activeTab === "new") return new Date(course.lastUpdated) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        return course.category === activeTab;
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.instructor.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by level
    if (levelFilters.length > 0) {
      filtered = filtered.filter(course => 
        levelFilters.includes(course.level.toLowerCase())
      );
    }
    
    setFilteredCourses(filtered);
  }, [activeTab, searchQuery, levelFilters, coursesData]);

  const isEnrolled = (courseId: string) => enrolledCourses.includes(courseId);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-4 md:p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">{currentLanguage.title}</h1>
          
          {/* Search and Filter */}
          <div className="flex gap-2 mb-4">
            <Input
              className="flex-1"
              type="search"
              placeholder={currentLanguage.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={showFilters ? "bg-blue-100 dark:bg-gray-700" : ""}
            >
              <Filter size={18} />
            </Button>
          </div>
          
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 animate-fade-in">
              <h3 className="font-medium mb-2 dark:text-white">{currentLanguage.levels.all}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <Button
                  variant={levelFilters.includes("beginner") ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLevelFilter("beginner")}
                >
                  {currentLanguage.levels.beginner}
                </Button>
                <Button
                  variant={levelFilters.includes("intermediate") ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLevelFilter("intermediate")}
                >
                  {currentLanguage.levels.intermediate}
                </Button>
                <Button
                  variant={levelFilters.includes("advanced") ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLevelFilter("advanced")}
                >
                  {currentLanguage.levels.advanced}
                </Button>
              </div>
              
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  {language === 'ar' ? "مسح الفلاتر" : "Clear Filters"}
                </Button>
              </div>
            </div>
          )}
          
          {/* Tabs for Categories */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="w-full mb-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1">
                <TabsTrigger value="all" className="flex-1">
                  {currentLanguage.categories.all}
                </TabsTrigger>
                <TabsTrigger value="popular" className="flex-1">
                  {currentLanguage.categories.popular}
                </TabsTrigger>
                <TabsTrigger value="new" className="flex-1">
                  {currentLanguage.categories.new}
                </TabsTrigger>
                <TabsTrigger value="technology" className="flex-1">
                  {currentLanguage.categories.technology}
                </TabsTrigger>
                <TabsTrigger value="business" className="flex-1">
                  {currentLanguage.categories.business}
                </TabsTrigger>
                <TabsTrigger value="leadership" className="flex-1">
                  {currentLanguage.categories.leadership}
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Course Content - Will be the same for all tabs, filtered by state */}
            <TabsContent value="all" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language} 
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
            <TabsContent value="popular" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language}
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
            <TabsContent value="new" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language}
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
            <TabsContent value="technology" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language}
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
            <TabsContent value="business" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language}
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
            <TabsContent value="leadership" className="mt-0">
              <CourseGrid 
                courses={filteredCourses} 
                language={language}
                enrollText={currentLanguage.enrollBtn}
                enrolledText={currentLanguage.enrolledBtn}
                onEnroll={handleEnroll}
                enrolledCourses={enrolledCourses}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

// Helper component for course grid
const CourseGrid = ({ 
  courses, 
  language, 
  enrollText, 
  enrolledText,
  onEnroll,
  enrolledCourses
}: { 
  courses: any[], 
  language: string,
  enrollText: string,
  enrolledText: string,
  onEnroll: (id: string, title: string) => void,
  enrolledCourses: string[]
}) => {
  if (courses.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500 dark:text-gray-400">
        {language === 'ar' ? "لا توجد دورات متاحة بهذه المعايير" : "No courses available with these criteria"}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {courses.map((course) => (
        <CourseCard 
          key={course.id}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          duration={course.duration}
          level={course.level}
          rating={course.rating}
          students={course.students}
          description={course.description}
          price={course.price}
          isPopular={course.popular}
          lastUpdated={course.lastUpdated}
          isEnrolled={enrolledCourses.includes(course.id)}
          onEnroll={() => onEnroll(course.id, course.title)}
          enrollText={enrollText}
          enrolledText={enrolledText}
        />
      ))}
    </div>
  );
};

export default Courses;
