
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLanguageContent } from '@/data/languageContent';
import { getCourses } from '@/data/coursesData';
import { useCourses } from '@/hooks/useCourses';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Clock, BookOpen, Play } from 'lucide-react';
import Header from '@/components/Header';
import BottomNavbar from '@/components/BottomNavbar';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const content = getLanguageContent(language);
  const { courses, enrollInCourse, unenrollFromCourse } = useCourses();
  const [activeModule, setActiveModule] = useState<number | null>(null);
  
  // Find the course
  const course = courses.find(c => c.id === Number(id));
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-xl text-center dark:text-white">
          {language === 'ar' ? "الدورة غير موجودة" : "Course not found"}
        </p>
        <Button onClick={() => navigate('/courses')} className="mt-4">
          {language === 'ar' ? "العودة إلى الدورات" : "Back to Courses"}
        </Button>
      </div>
    );
  }
  
  const handleEnrollToggle = () => {
    if (course.enrolled) {
      unenrollFromCourse(course.id);
    } else {
      enrollInCourse(course.id);
    }
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };
  
  const handleModuleClick = (moduleId: number) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      {/* Course Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-skillora-blue to-blue-600">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <div className="flex items-center mt-2">
            <div className="flex">
              {renderStars(course.rating)}
            </div>
            <span className="ml-2">{course.rating}</span>
          </div>
        </div>
      </div>
      
      {/* Course Actions */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-skillora-blue dark:text-blue-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{course.duration}</span>
        </div>
        
        <Button
          onClick={handleEnrollToggle}
          variant={course.enrolled ? "destructive" : "default"}
        >
          {course.enrolled ? content.unenrollButton : content.enrollButton}
        </Button>
      </div>
      
      {/* Course Content */}
      <div className="p-4">
        <Tabs defaultValue="details">
          <TabsList className="w-full">
            <TabsTrigger value="details" className="w-1/2">{content.courseDetails}</TabsTrigger>
            <TabsTrigger value="syllabus" className="w-1/2">{content.courseSyllabus}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="pt-4">
            <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{content.instructorTitle}</h3>
                <p className="font-medium dark:text-white">{course.instructor}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{content.durationTitle}</h3>
                <p className="font-medium dark:text-white">{course.duration}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{content.levelTitle}</h3>
                <p className="font-medium dark:text-white">
                  {course.level === 'beginner' 
                    ? (language === 'ar' ? 'مبتدئ' : 'Beginner') 
                    : course.level === 'intermediate' 
                      ? (language === 'ar' ? 'متوسط' : 'Intermediate') 
                      : (language === 'ar' ? 'متقدم' : 'Advanced')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{content.ratingTitle}</h3>
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(course.rating)}
                  </div>
                  <span className="ml-2 dark:text-white">{course.rating}</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="syllabus" className="pt-4">
            {course.modules && course.modules.length > 0 ? (
              <div className="space-y-4">
                {course.modules.map(module => (
                  <div key={module.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                    <div 
                      className="p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => handleModuleClick(module.id)}
                    >
                      <div>
                        <h3 className="font-medium dark:text-white">{module.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{module.duration}</p>
                      </div>
                      <div className="flex items-center">
                        {module.completed && (
                          <span className="text-green-500 text-xs mr-2">
                            {language === 'ar' ? 'مكتمل' : 'Completed'}
                          </span>
                        )}
                        {activeModule === module.id ? '−' : '+'}
                      </div>
                    </div>
                    
                    {activeModule === module.id && (
                      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{module.description}</p>
                        {module.videoUrl && (
                          <Button variant="outline" size="sm" className="flex items-center" asChild>
                            <a href={module.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-2" />
                              {language === 'ar' ? 'مشاهدة الفيديو' : 'Watch Video'}
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                {language === 'ar' ? 'محتوى الدورة غير متاح حالياً' : 'Course content not available yet'}
              </p>
            )}
            
            {course.enrolled && course.modules && course.modules.length > 0 && (
              <div className="mt-6 text-center">
                <Button className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {content.startLearning}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default CourseDetails;
