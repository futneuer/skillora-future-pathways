
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Star, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageContent } from "@/data/languageContent";
import { useCourses } from "@/hooks/useCourses";

const Courses = () => {
  const { language } = useLanguage();
  const content = getLanguageContent(language);
  const { courses, enrollInCourse, unenrollFromCourse } = useCourses();
  
  const popularCourses = [...courses].sort((a, b) => 
    (b.popularity || 0) - (a.popularity || 0)
  ).slice(0, 4);
  
  const newCourses = courses.filter(course => course.isNew);
  
  const enrolledCourses = courses.filter(course => course.enrolled);
  
  const handleEnrollToggle = (courseId: number, enrolled: boolean | undefined) => {
    if (enrolled) {
      unenrollFromCourse(courseId);
    } else {
      enrollInCourse(courseId);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-4">
        <h1 className="text-2xl font-bold text-skillora-blue dark:text-blue-400">
          {language === 'ar' ? "استكشاف الدورات" : "Explore Courses"}
        </h1>
        
        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="all" className="w-1/3">{content.allCourses}</TabsTrigger>
            <TabsTrigger value="popular" className="w-1/3">{content.popularCourses}</TabsTrigger>
            <TabsTrigger value="enrolled" className="w-1/3">
              {language === 'ar' ? "دوراتي" : "My Courses"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onEnrollToggle={handleEnrollToggle}
                  content={content}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularCourses.length > 0 ? (
                popularCourses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onEnrollToggle={handleEnrollToggle}
                    content={content}
                    showPopularBadge
                  />
                ))
              ) : (
                <p className="col-span-2 text-center py-8 text-gray-500 dark:text-gray-400">
                  {language === 'ar' ? "لا توجد دورات شائعة حالياً" : "No popular courses available"}
                </p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="enrolled">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enrolledCourses.length > 0 ? (
                enrolledCourses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onEnrollToggle={handleEnrollToggle}
                    content={content}
                  />
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {language === 'ar' ? "لم تقم بالتسجيل في أي دورة بعد" : "You haven't enrolled in any courses yet"}
                  </p>
                  <Button>
                    {language === 'ar' ? "استكشف الدورات الآن" : "Explore Courses Now"}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

interface CourseCardProps {
  course: any;
  onEnrollToggle: (courseId: number, enrolled: boolean | undefined) => void;
  content: any;
  showPopularBadge?: boolean;
  showNewBadge?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnrollToggle, content, showPopularBadge, showNewBadge }) => {
  const { language } = useLanguage();
  
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link to={`/course/${course.id}`}>
          <img 
            src={course.image} 
            alt={course.title} 
            className="h-40 w-full object-cover"
          />
        </Link>
        
        {(showPopularBadge || course.popularity > 90) && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Flame className="h-3 w-3 mr-1" />
            {language === 'ar' ? "شائع" : "Popular"}
          </div>
        )}
        
        {(showNewBadge || course.isNew) && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {language === 'ar' ? "جديد" : "New"}
          </div>
        )}
        
        {course.price === 0 && (
          <div className="absolute bottom-2 left-2 bg-skillora-blue text-white text-xs px-2 py-1 rounded-full">
            {language === 'ar' ? "مجاني" : "Free"}
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <Link to={`/course/${course.id}`} className="no-underline">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 hover:text-skillora-blue transition-colors dark:text-white dark:hover:text-blue-400">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 dark:text-gray-300">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            {course.rating}
          </div>
        </div>
        
        <Button
          variant={course.enrolled ? "outline" : "default"}
          className={`w-full ${course.enrolled ? "border-skillora-blue text-skillora-blue hover:text-white dark:border-blue-400 dark:text-blue-400" : ""}`}
          onClick={() => onEnrollToggle(course.id, course.enrolled)}
        >
          {course.enrolled ? content.unenrollButton : content.enrollButton}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Courses;
