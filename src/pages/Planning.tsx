
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageContent } from "@/data/languageContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Briefcase, Clock, Award, TrendingUp, Star, Calendar, Play } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Planning = () => {
  const { language } = useLanguage();
  const content = getLanguageContent(language);
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const careerPaths = [
    {
      id: 1,
      title: language === 'ar' ? 'مطور برمجيات' : 'Software Developer',
      skills: language === 'ar' 
        ? ['برمجة', 'حل المشكلات', 'تصميم البرمجيات', 'قواعد البيانات'] 
        : ['Programming', 'Problem Solving', 'Software Design', 'Databases'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?developer',
      level: 'intermediate',
      description: language === 'ar' 
        ? 'تطوير التطبيقات والبرامج للأجهزة المختلفة باستخدام لغات البرمجة المناسبة.' 
        : 'Develop applications and software for various devices using appropriate programming languages.',
      milestones: [
        { name: language === 'ar' ? 'تعلم لغة برمجة' : 'Learn a programming language', progress: 0 },
        { name: language === 'ar' ? 'بناء مشروع بسيط' : 'Build a simple project', progress: 0 },
        { name: language === 'ar' ? 'تعلم إطار عمل' : 'Learn a framework', progress: 0 },
        { name: language === 'ar' ? 'تطوير تطبيق كامل' : 'Develop a full application', progress: 0 },
      ],
      relatedCourses: [
        { id: 101, title: language === 'ar' ? 'مقدمة في البرمجة' : 'Introduction to Programming' },
        { id: 102, title: language === 'ar' ? 'تطوير الويب' : 'Web Development' },
      ]
    },
    {
      id: 2,
      title: language === 'ar' ? 'محلل بيانات' : 'Data Analyst',
      skills: language === 'ar' 
        ? ['تحليل البيانات', 'الإحصاء', 'بايثون/R', 'تصور البيانات'] 
        : ['Data Analysis', 'Statistics', 'Python/R', 'Data Visualization'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?data',
      level: 'intermediate',
      description: language === 'ar' 
        ? 'تحليل البيانات واستخراج الرؤى القيمة لمساعدة الشركات على اتخاذ قرارات أفضل.' 
        : 'Analyze data and extract valuable insights to help companies make better decisions.',
      milestones: [
        { name: language === 'ar' ? 'تعلم الإحصاء' : 'Learn Statistics', progress: 0 },
        { name: language === 'ar' ? 'إتقان لغة بايثون' : 'Master Python', progress: 0 },
        { name: language === 'ar' ? 'تعلم SQL' : 'Learn SQL', progress: 0 },
        { name: language === 'ar' ? 'تطوير لوحة معلومات' : 'Develop a dashboard', progress: 0 },
      ],
      relatedCourses: [
        { id: 201, title: language === 'ar' ? 'مقدمة في علم البيانات' : 'Introduction to Data Science' },
        { id: 202, title: language === 'ar' ? 'تصور البيانات' : 'Data Visualization' },
      ]
    },
    {
      id: 3,
      title: language === 'ar' ? 'مدير مشاريع' : 'Project Manager',
      skills: language === 'ar' 
        ? ['إدارة المشاريع', 'القيادة', 'التواصل', 'إدارة الموارد'] 
        : ['Project Management', 'Leadership', 'Communication', 'Resource Management'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?manager',
      level: 'advanced',
      description: language === 'ar' 
        ? 'قيادة المشاريع من البداية إلى النهاية، وضمان تسليمها في الوقت المحدد وضمن الميزانية.' 
        : 'Lead projects from start to finish, ensuring they are delivered on time and within budget.',
      milestones: [
        { name: language === 'ar' ? 'فهم منهجيات إدارة المشاريع' : 'Understand project methodologies', progress: 0 },
        { name: language === 'ar' ? 'تعلم أدوات إدارة المشاريع' : 'Learn project management tools', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات القيادة' : 'Develop leadership skills', progress: 0 },
        { name: language === 'ar' ? 'الحصول على شهادة' : 'Get certified', progress: 0 },
      ],
      relatedCourses: [
        { id: 301, title: language === 'ar' ? 'أساسيات إدارة المشاريع' : 'Project Management Fundamentals' },
        { id: 302, title: language === 'ar' ? 'القيادة الفعالة' : 'Effective Leadership' },
      ]
    },
    {
      id: 4,
      title: language === 'ar' ? 'مصمم واجهة المستخدم' : 'UI/UX Designer',
      skills: language === 'ar' 
        ? ['تصميم واجهة المستخدم', 'تجربة المستخدم', 'أدوتي التصميم', 'النماذج الأولية'] 
        : ['UI Design', 'UX Design', 'Design Tools', 'Prototyping'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?design',
      level: 'intermediate',
      description: language === 'ar' 
        ? 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام للتطبيقات والمواقع الإلكترونية.' 
        : 'Design attractive and user-friendly interfaces for applications and websites.',
      milestones: [
        { name: language === 'ar' ? 'فهم أساسيات التصميم' : 'Understand design principles', progress: 0 },
        { name: language === 'ar' ? 'تعلم أدوات التصميم' : 'Learn design tools', progress: 0 },
        { name: language === 'ar' ? 'بناء محفظة تصاميم' : 'Build a design portfolio', progress: 0 },
        { name: language === 'ar' ? 'إنشاء نماذج تفاعلية' : 'Create interactive prototypes', progress: 0 },
      ],
      relatedCourses: [
        { id: 401, title: language === 'ar' ? 'مبادئ تصميم واجهة المستخدم' : 'UI Design Principles' },
        { id: 402, title: language === 'ar' ? 'تجربة المستخدم' : 'User Experience Design' },
      ]
    }
  ];

  const educationPaths = [
    {
      id: 101,
      title: language === 'ar' ? 'بكالوريوس علوم الحاسوب' : 'Bachelor of Computer Science',
      skills: language === 'ar' 
        ? ['برمجة', 'خوارزميات', 'هياكل البيانات', 'نظم التشغيل'] 
        : ['Programming', 'Algorithms', 'Data Structures', 'Operating Systems'],
      time: language === 'ar' ? '4 سنوات' : '4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?university',
      level: 'beginner',
      description: language === 'ar' 
        ? 'درجة علمية تركز على دراسة الحوسبة وتطوير البرمجيات.' 
        : 'Academic degree focusing on the study of computing and software development.',
      milestones: [
        { name: language === 'ar' ? 'إكمال السنة الأولى' : 'Complete first year', progress: 0 },
        { name: language === 'ar' ? 'إكمال السنة الثانية' : 'Complete second year', progress: 0 },
        { name: language === 'ar' ? 'إكمال السنة الثالثة' : 'Complete third year', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع التخرج' : 'Complete capstone project', progress: 0 },
      ],
      relatedCourses: [
        { id: 501, title: language === 'ar' ? 'مقدمة في علوم الحاسوب' : 'Introduction to Computer Science' },
        { id: 502, title: language === 'ar' ? 'هياكل البيانات والخوارزميات' : 'Data Structures and Algorithms' },
      ]
    },
    {
      id: 102,
      title: language === 'ar' ? 'دبلوم تحليل البيانات' : 'Data Analysis Diploma',
      skills: language === 'ar' 
        ? ['تحليل البيانات', 'الإحصاء', 'تصور البيانات', 'SQL'] 
        : ['Data Analysis', 'Statistics', 'Data Visualization', 'SQL'],
      time: language === 'ar' ? '1-2 سنة' : '1-2 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?diploma',
      level: 'beginner',
      description: language === 'ar' 
        ? 'برنامج تعليمي مكثف يركز على مهارات تحليل البيانات والإحصاء.' 
        : 'Intensive educational program focusing on data analysis and statistics skills.',
      milestones: [
        { name: language === 'ar' ? 'إكمال وحدات الإحصاء' : 'Complete statistics modules', progress: 0 },
        { name: language === 'ar' ? 'تعلم أدوات تحليل البيانات' : 'Learn data analysis tools', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع عملي' : 'Complete practical project', progress: 0 },
        { name: language === 'ar' ? 'الحصول على الشهادة' : 'Obtain certification', progress: 0 },
      ],
      relatedCourses: [
        { id: 601, title: language === 'ar' ? 'أساسيات تحليل البيانات' : 'Data Analysis Fundamentals' },
        { id: 602, title: language === 'ar' ? 'تحليل البيانات المتقدم' : 'Advanced Data Analysis' },
      ]
    },
    {
      id: 103,
      title: language === 'ar' ? 'شهادة مهنية في إدارة المشاريع' : 'Professional Project Management Certification',
      skills: language === 'ar' 
        ? ['منهجيات إدارة المشاريع', 'إدارة المخاطر', 'تخطيط الموارد'] 
        : ['Project Management Methodologies', 'Risk Management', 'Resource Planning'],
      time: language === 'ar' ? '3-6 أشهر' : '3-6 months',
      imageUrl: 'https://source.unsplash.com/random/300x200?certificate',
      level: 'intermediate',
      description: language === 'ar' 
        ? 'شهادة معترف بها دوليًا في إدارة المشاريع تثبت مهاراتك واحترافيتك.' 
        : 'Internationally recognized certification in project management that proves your skills and professionalism.',
      milestones: [
        { name: language === 'ar' ? 'دراسة مواد الدورة' : 'Study course materials', progress: 0 },
        { name: language === 'ar' ? 'إكمال التدريب العملي' : 'Complete practical training', progress: 0 },
        { name: language === 'ar' ? 'النجاح في اختبار التأهيل' : 'Pass qualification exam', progress: 0 },
        { name: language === 'ar' ? 'الحصول على الشهادة' : 'Receive certification', progress: 0 },
      ],
      relatedCourses: [
        { id: 701, title: language === 'ar' ? 'إدارة المشاريع PMP' : 'PMP Project Management' },
        { id: 702, title: language === 'ar' ? 'إدارة المشاريع المرنة' : 'Agile Project Management' },
      ]
    }
  ];

  const filteredCareerPaths = careerPaths.filter(path => 
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredEducationPaths = educationPaths.filter(path => 
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMilestoneProgress = (pathType: string, pathId: number, milestoneIndex: number, newProgress: number) => {
    if (pathType === 'career') {
      const pathIndex = careerPaths.findIndex(path => path.id === pathId);
      if (pathIndex !== -1) {
        const updatedCareerPaths = [...careerPaths];
        updatedCareerPaths[pathIndex].milestones[milestoneIndex].progress = newProgress;
        // In a real app, you would save this to the backend
      }
    } else {
      const pathIndex = educationPaths.findIndex(path => path.id === pathId);
      if (pathIndex !== -1) {
        const updatedEducationPaths = [...educationPaths];
        updatedEducationPaths[pathIndex].milestones[milestoneIndex].progress = newProgress;
        // In a real app, you would save this to the backend
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-4">
        <h1 className="text-2xl font-bold text-skillora-blue dark:text-blue-400 mb-4">
          {content.planYourFuture}
        </h1>
        
        <div className="mb-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {language === 'ar' ? 'استكشاف المسارات' : 'Explore Paths'}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[300px]">
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-skillora-blue/20 to-skillora-blue/50 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-skillora-blue dark:text-white">
                            {language === 'ar' ? 'خطط مسارك المهني' : 'Plan Your Career Path'}
                          </div>
                          <p className="text-sm leading-tight text-skillora-blue/90 dark:text-white/90">
                            {language === 'ar' 
                              ? 'استكشف خيارات مهنية متنوعة وخطط لمستقبلك المهني بشكل فعال.' 
                              : 'Explore diverse career options and effectively plan your professional future.'}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            {language === 'ar' ? 'التعليم' : 'Education'}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {language === 'ar' 
                              ? 'استكشف الخيارات التعليمية لتحقيق أهدافك المهنية.' 
                              : 'Explore educational options to achieve your career goals.'}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            {language === 'ar' ? 'المهارات' : 'Skills'}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {language === 'ar' 
                              ? 'تعرف على المهارات المطلوبة لمختلف المسارات المهنية.' 
                              : 'Learn about skills required for various career paths.'}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {language === 'ar' ? 'المستوى' : 'Level'}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px] md:w-[300px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'مبتدئ' : 'Beginner'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'متوسط' : 'Intermediate'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'متقدم' : 'Advanced'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="mb-4">
          <Input
            placeholder={language === 'ar' ? "ابحث عن مسارات..." : "Search paths..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <Tabs defaultValue="career" className="mt-4">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="career" className="w-1/2">
              <Briefcase className="mr-2 h-4 w-4" />
              {content.careerPath}
            </TabsTrigger>
            <TabsTrigger value="education" className="w-1/2">
              <BookOpen className="mr-2 h-4 w-4" />
              {content.educationPath}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="career">
            <div className="space-y-4">
              {filteredCareerPaths.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">
                    {language === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
                  </p>
                </div>
              ) : (
                <>
                  {selectedPath !== null ? (
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedPath(null)}
                        className="mb-4"
                      >
                        {language === 'ar' ? 'العودة إلى جميع المسارات' : 'Back to all paths'}
                      </Button>
                      
                      {(() => {
                        const path = careerPaths.find(p => p.id === selectedPath);
                        if (!path) return null;
                        
                        return (
                          <div className="space-y-6">
                            <div className="h-40 overflow-hidden rounded-xl">
                              <img 
                                src={path.imageUrl} 
                                alt={path.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div>
                              <h2 className="text-2xl font-bold mb-2 dark:text-white">{path.title}</h2>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {path.skills.map((skill, index) => (
                                  <span 
                                    key={index} 
                                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6">
                                <Clock className="h-4 w-4 mr-1 text-skillora-blue dark:text-blue-400" />
                                {content.timeToAchieve}: {path.time}
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold dark:text-white">
                                {language === 'ar' ? 'الأهداف المرحلية' : 'Milestones'}
                              </h3>
                              
                              <div className="space-y-4">
                                {path.milestones.map((milestone, index) => (
                                  <div key={index} className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="font-medium dark:text-gray-200">{milestone.name}</span>
                                      <span className="text-sm text-gray-500 dark:text-gray-400">{milestone.progress}%</span>
                                    </div>
                                    <Progress value={milestone.progress} className="h-2" />
                                    <div className="flex justify-between">
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => handleMilestoneProgress('career', path.id, index, Math.max(0, milestone.progress - 10))}
                                        disabled={milestone.progress <= 0}
                                      >
                                        -
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => handleMilestoneProgress('career', path.id, index, Math.min(100, milestone.progress + 10))}
                                        disabled={milestone.progress >= 100}
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold dark:text-white">
                                {language === 'ar' ? 'الدورات ذات الصلة' : 'Related Courses'}
                              </h3>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {path.relatedCourses.map(course => (
                                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <Link to={`/course/${course.id}`} className="block">
                                      <CardContent className="p-4">
                                        <div className="flex items-center">
                                          <Play className="h-8 w-8 text-skillora-blue dark:text-blue-400 mr-3" />
                                          <div>
                                            <h4 className="font-semibold dark:text-white">{course.title}</h4>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                              <span>4.8</span>
                                            </div>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Link>
                                  </Card>
                                ))}
                              </div>
                            </div>
                            
                            <div className="pt-4">
                              <Button size="lg" className="w-full">
                                {language === 'ar' ? 'ابدأ هذا المسار' : 'Start This Path'}
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredCareerPaths.map(path => (
                        <CareerPathCard 
                          key={path.id} 
                          path={path} 
                          content={content}
                          onClick={() => setSelectedPath(path.id)} 
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-4">
              {filteredEducationPaths.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">
                    {language === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
                  </p>
                </div>
              ) : (
                <>
                  {selectedPath !== null ? (
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedPath(null)}
                        className="mb-4"
                      >
                        {language === 'ar' ? 'العودة إلى جميع المسارات' : 'Back to all paths'}
                      </Button>
                      
                      {(() => {
                        const path = educationPaths.find(p => p.id === selectedPath);
                        if (!path) return null;
                        
                        return (
                          <div className="space-y-6">
                            <div className="h-40 overflow-hidden rounded-xl">
                              <img 
                                src={path.imageUrl} 
                                alt={path.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div>
                              <h2 className="text-2xl font-bold mb-2 dark:text-white">{path.title}</h2>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {path.skills.map((skill, index) => (
                                  <span 
                                    key={index} 
                                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6">
                                <Calendar className="h-4 w-4 mr-1 text-skillora-blue dark:text-blue-400" />
                                {content.timeToAchieve}: {path.time}
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold dark:text-white">
                                {language === 'ar' ? 'الأهداف المرحلية' : 'Milestones'}
                              </h3>
                              
                              <div className="space-y-4">
                                {path.milestones.map((milestone, index) => (
                                  <div key={index} className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="font-medium dark:text-gray-200">{milestone.name}</span>
                                      <span className="text-sm text-gray-500 dark:text-gray-400">{milestone.progress}%</span>
                                    </div>
                                    <Progress value={milestone.progress} className="h-2" />
                                    <div className="flex justify-between">
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => handleMilestoneProgress('education', path.id, index, Math.max(0, milestone.progress - 10))}
                                        disabled={milestone.progress <= 0}
                                      >
                                        -
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => handleMilestoneProgress('education', path.id, index, Math.min(100, milestone.progress + 10))}
                                        disabled={milestone.progress >= 100}
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold dark:text-white">
                                {language === 'ar' ? 'الدورات ذات الصلة' : 'Related Courses'}
                              </h3>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {path.relatedCourses.map(course => (
                                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <Link to={`/course/${course.id}`} className="block">
                                      <CardContent className="p-4">
                                        <div className="flex items-center">
                                          <Play className="h-8 w-8 text-skillora-blue dark:text-blue-400 mr-3" />
                                          <div>
                                            <h4 className="font-semibold dark:text-white">{course.title}</h4>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                              <span>4.8</span>
                                            </div>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Link>
                                  </Card>
                                ))}
                              </div>
                            </div>
                            
                            <div className="pt-4">
                              <Button size="lg" className="w-full">
                                {language === 'ar' ? 'ابدأ هذا المسار التعليمي' : 'Start This Educational Path'}
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredEducationPaths.map(path => (
                        <CareerPathCard 
                          key={path.id} 
                          path={path} 
                          content={content}
                          onClick={() => setSelectedPath(path.id)} 
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

interface CareerPathProps {
  path: {
    id: number;
    title: string;
    skills: string[];
    time: string;
    imageUrl: string;
    level: string;
  };
  content: any;
  onClick?: () => void;
}

const CareerPathCard: React.FC<CareerPathProps> = ({ path, content, onClick }) => {
  const { language } = useLanguage();
  
  const getLevelBadge = () => {
    switch(path.level) {
      case 'beginner':
        return (
          <span className={cn(
            "absolute top-2 right-2 px-2 py-1 text-xs rounded-full",
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
          )}>
            {language === 'ar' ? 'مبتدئ' : 'Beginner'}
          </span>
        );
      case 'intermediate':
        return (
          <span className={cn(
            "absolute top-2 right-2 px-2 py-1 text-xs rounded-full",
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
          )}>
            {language === 'ar' ? 'متوسط' : 'Intermediate'}
          </span>
        );
      case 'advanced':
        return (
          <span className={cn(
            "absolute top-2 right-2 px-2 py-1 text-xs rounded-full",
            "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
          )}>
            {language === 'ar' ? 'متقدم' : 'Advanced'}
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={path.imageUrl} 
          alt={path.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        {getLevelBadge()}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-3 dark:text-white">{path.title}</h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center dark:text-white">
            <Award className="h-4 w-4 mr-2 text-skillora-blue dark:text-blue-400" />
            {content.skillsNeeded}
          </h4>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <TrendingUp className="h-4 w-4 mr-1 text-skillora-blue dark:text-blue-400" />
            {content.timeToAchieve}: {path.time}
          </div>
          
          <Button size="sm" onClick={onClick}>
            {content.planNow}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Planning;
