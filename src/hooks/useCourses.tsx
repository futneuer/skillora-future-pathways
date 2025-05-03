
import { useState, useEffect } from 'react';
import { Course } from '@/types/course';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCourses } from '@/data/coursesData';
import { useToast } from '@/components/ui/use-toast';

export const useCourses = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([]);
  
  useEffect(() => {
    // Get courses data
    const coursesData = getCourses(language);
    
    // Load enrollment status from localStorage
    const savedEnrollments = localStorage.getItem('courseEnrollments');
    const enrollments: number[] = savedEnrollments ? JSON.parse(savedEnrollments) : [];
    
    // Update courses with enrollment status
    const updatedCourses = coursesData.map(course => ({
      ...course,
      enrolled: enrollments.includes(course.id)
    }));
    
    setCourses(updatedCourses);
  }, [language]);
  
  const enrollInCourse = (courseId: number) => {
    // Update local state
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId ? { ...course, enrolled: true } : course
      )
    );
    
    // Update localStorage
    const savedEnrollments = localStorage.getItem('courseEnrollments');
    const enrollments: number[] = savedEnrollments ? JSON.parse(savedEnrollments) : [];
    
    if (!enrollments.includes(courseId)) {
      const updatedEnrollments = [...enrollments, courseId];
      localStorage.setItem('courseEnrollments', JSON.stringify(updatedEnrollments));
    }
    
    // Show success toast
    toast({
      title: language === 'ar' ? "تم التسجيل بنجاح" : "Enrolled Successfully",
      description: language === 'ar' ? "تم تسجيلك في الدورة بنجاح" : "You have been enrolled in this course",
      duration: 3000,
    });
  };
  
  const unenrollFromCourse = (courseId: number) => {
    // Update local state
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId ? { ...course, enrolled: false } : course
      )
    );
    
    // Update localStorage
    const savedEnrollments = localStorage.getItem('courseEnrollments');
    const enrollments: number[] = savedEnrollments ? JSON.parse(savedEnrollments) : [];
    
    const updatedEnrollments = enrollments.filter(id => id !== courseId);
    localStorage.setItem('courseEnrollments', JSON.stringify(updatedEnrollments));
    
    // Show success toast
    toast({
      title: language === 'ar' ? "تم إلغاء التسجيل" : "Unenrolled",
      description: language === 'ar' ? "تم إلغاء تسجيلك من الدورة" : "You have been unenrolled from this course",
      duration: 3000,
    });
  };
  
  return {
    courses,
    enrollInCourse,
    unenrollFromCourse
  };
};
