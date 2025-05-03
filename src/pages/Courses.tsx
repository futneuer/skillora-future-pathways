
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Clock, Star } from "lucide-react";

const Courses = () => {
  const { language } = useLanguage();
  
  const content = {
    ar: {
      title: "الدورات المتاحة",
      viewAll: "عرض الكل",
      categories: ["الأكثر شعبية", "الجديدة", "التقنية", "الأعمال", "القيادة"],
      featuredCourses: [
        {
          title: "أساسيات الذكاء الاصطناعي",
          instructor: "د. محمد عبدالله",
          duration: "8 ساعات",
          level: "متوسط",
          rating: 4.8,
          students: 1240,
          image: "ai-course.jpg"
        },
        {
          title: "مهارات التفكير النقدي",
          instructor: "أ. سارة الأحمد",
          duration: "6 ساعات",
          level: "مبتدئ",
          rating: 4.6,
          students: 980,
          image: "critical-thinking.jpg"
        },
        {
          title: "أساسيات البرمجة بلغة Python",
          instructor: "م. أحمد الصالح",
          duration: "12 ساعة",
          level: "مبتدئ",
          rating: 4.9,
          students: 2150,
          image: "python-basics.jpg"
        }
      ]
    },
    en: {
      title: "Available Courses",
      viewAll: "View All",
      categories: ["Most Popular", "New", "Technology", "Business", "Leadership"],
      featuredCourses: [
        {
          title: "AI Fundamentals",
          instructor: "Dr. Mohammed Abdullah",
          duration: "8 hours",
          level: "Intermediate",
          rating: 4.8,
          students: 1240,
          image: "ai-course.jpg"
        },
        {
          title: "Critical Thinking Skills",
          instructor: "Sarah Al-Ahmad",
          duration: "6 hours",
          level: "Beginner",
          rating: 4.6,
          students: 980,
          image: "critical-thinking.jpg"
        },
        {
          title: "Python Programming Basics",
          instructor: "Ahmed Al-Saleh",
          duration: "12 hours",
          level: "Beginner",
          rating: 4.9,
          students: 2150,
          image: "python-basics.jpg"
        }
      ]
    }
  };

  const currentLanguage = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">{currentLanguage.title}</h1>
        
        {/* Categories */}
        <div className="overflow-x-auto mb-6">
          <div className="flex gap-3 pb-2">
            {currentLanguage.categories.map((category, index) => (
              <button 
                key={index} 
                className={`py-2 px-4 rounded-full whitespace-nowrap text-sm font-medium ${
                  index === 0 
                  ? "bg-skillora-blue text-white" 
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Course Cards */}
        <div className="space-y-4 mb-6">
          {currentLanguage.featuredCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col">
              {/* Course Image Placeholder */}
              <div className="h-40 bg-gradient-to-r from-skillora-blue to-blue-600 flex items-center justify-center">
                <BookOpen size={48} className="text-white" />
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 dark:text-white">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{course.instructor}</p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <span className="bg-skillora-blue/10 text-skillora-blue dark:text-blue-300 py-1 px-2 rounded text-xs">
                    {course.level}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                    <span className="text-gray-700 dark:text-gray-300">{course.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1 text-xs">({course.students})</span>
                  </div>
                  <button className="text-skillora-blue dark:text-blue-400 font-medium text-sm">
                    {language === 'ar' ? 'سجل الآن' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Courses;
