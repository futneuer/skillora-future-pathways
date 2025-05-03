
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageContent } from "@/data/languageContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Briefcase, Clock, Award } from "lucide-react";

const Planning = () => {
  const { language } = useLanguage();
  const content = getLanguageContent(language);

  const careerPaths = [
    {
      id: 1,
      title: language === 'ar' ? 'مطور برمجيات' : 'Software Developer',
      skills: language === 'ar' 
        ? ['برمجة', 'حل المشكلات', 'تصميم البرمجيات', 'قواعد البيانات'] 
        : ['Programming', 'Problem Solving', 'Software Design', 'Databases'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?developer'
    },
    {
      id: 2,
      title: language === 'ar' ? 'محلل بيانات' : 'Data Analyst',
      skills: language === 'ar' 
        ? ['تحليل البيانات', 'الإحصاء', 'بايثون/R', 'تصور البيانات'] 
        : ['Data Analysis', 'Statistics', 'Python/R', 'Data Visualization'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?data'
    },
    {
      id: 3,
      title: language === 'ar' ? 'مدير مشاريع' : 'Project Manager',
      skills: language === 'ar' 
        ? ['إدارة المشاريع', 'القيادة', 'التواصل', 'إدارة الموارد'] 
        : ['Project Management', 'Leadership', 'Communication', 'Resource Management'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?manager'
    }
  ];

  const educationPaths = [
    {
      id: 1,
      title: language === 'ar' ? 'بكالوريوس علوم الحاسوب' : 'Bachelor of Computer Science',
      skills: language === 'ar' 
        ? ['برمجة', 'خوارزميات', 'هياكل البيانات', 'نظم التشغيل'] 
        : ['Programming', 'Algorithms', 'Data Structures', 'Operating Systems'],
      time: language === 'ar' ? '4 سنوات' : '4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?university'
    },
    {
      id: 2,
      title: language === 'ar' ? 'دبلوم تحليل البيانات' : 'Data Analysis Diploma',
      skills: language === 'ar' 
        ? ['تحليل البيانات', 'الإحصاء', 'تصور البيانات', 'SQL'] 
        : ['Data Analysis', 'Statistics', 'Data Visualization', 'SQL'],
      time: language === 'ar' ? '1-2 سنة' : '1-2 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?diploma'
    },
    {
      id: 3,
      title: language === 'ar' ? 'شهادة مهنية في إدارة المشاريع' : 'Professional Project Management Certification',
      skills: language === 'ar' 
        ? ['منهجيات إدارة المشاريع', 'إدارة المخاطر', 'تخطيط الموارد'] 
        : ['Project Management Methodologies', 'Risk Management', 'Resource Planning'],
      time: language === 'ar' ? '3-6 أشهر' : '3-6 months',
      imageUrl: 'https://source.unsplash.com/random/300x200?certificate'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-4">
        <h1 className="text-2xl font-bold text-skillora-blue dark:text-blue-400 mb-4">
          {content.planYourFuture}
        </h1>
        
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
              {careerPaths.map(path => (
                <CareerPathCard 
                  key={path.id} 
                  path={path} 
                  content={content} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-4">
              {educationPaths.map(path => (
                <CareerPathCard 
                  key={path.id} 
                  path={path} 
                  content={content} 
                />
              ))}
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
  };
  content: any;
}

const CareerPathCard: React.FC<CareerPathProps> = ({ path, content }) => {
  const { language } = useLanguage();
  
  return (
    <Card className="overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img 
          src={path.imageUrl} 
          alt={path.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
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
            <Clock className="h-4 w-4 mr-1 text-skillora-blue dark:text-blue-400" />
            {content.timeToAchieve}: {path.time}
          </div>
          
          <Button size="sm">
            {content.planNow}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Planning;
