
import { Course } from "@/types/course";

export const getCourses = (language: 'ar' | 'en'): Course[] => {
  if (language === 'ar') {
    return [
      {
        id: 1,
        title: "مقدمة في الذكاء الاصطناعي",
        description: "تعلم أساسيات وتطبيقات الذكاء الاصطناعي في عالم اليوم",
        instructor: "د. أحمد الخطيب",
        duration: "6 أسابيع",
        level: "beginner",
        rating: 4.7,
        category: "technology",
        image: "https://source.unsplash.com/random/300x200?ai",
        price: 0, // Free demo course
        popularity: 98,
        isNew: true,
        modules: [
          {
            id: 1,
            title: "مقدمة وتاريخ الذكاء الاصطناعي",
            description: "نظرة عامة على تاريخ وتطور الذكاء الاصطناعي",
            duration: "45 دقيقة",
            videoUrl: "https://www.youtube.com/watch?v=JMUxmLyrhSk"
          },
          {
            id: 2,
            title: "أساسيات تعلم الآلة",
            description: "مفاهيم أساسية في تعلم الآلة والخوارزميات",
            duration: "60 دقيقة",
            videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk"
          },
          {
            id: 3,
            title: "الشبكات العصبية",
            description: "مقدمة في الشبكات العصبية وتطبيقاتها",
            duration: "55 دقيقة",
            videoUrl: "https://www.youtube.com/watch?v=uwwWVAgJBcM"
          }
        ]
      },
      {
        id: 2,
        title: "مهارات القيادة الفعالة",
        description: "تطوير مهارات القيادة لإدارة فرق العمل بكفاءة",
        instructor: "د. سارة القاضي",
        duration: "4 أسابيع",
        level: "intermediate",
        rating: 4.5,
        category: "business",
        image: "https://source.unsplash.com/random/300x200?leadership",
        price: 50,
        popularity: 85
      },
      {
        id: 3,
        title: "البرمجة بلغة بايثون",
        description: "تعلم أساسيات البرمجة باستخدام لغة بايثون من الصفر",
        instructor: "م. خالد السعيد",
        duration: "8 أسابيع",
        level: "beginner",
        rating: 4.8,
        category: "technology",
        image: "https://source.unsplash.com/random/300x200?python",
        price: 75,
        isNew: true
      }
    ];
  } else {
    return [
      {
        id: 1,
        title: "Introduction to Artificial Intelligence",
        description: "Learn the fundamentals and applications of AI in today's world",
        instructor: "Dr. Ahmed Al-Khateeb",
        duration: "6 weeks",
        level: "beginner",
        rating: 4.7,
        category: "technology",
        image: "https://source.unsplash.com/random/300x200?ai",
        price: 0, // Free demo course
        popularity: 98,
        isNew: true,
        modules: [
          {
            id: 1,
            title: "Introduction and History of AI",
            description: "Overview of the history and evolution of artificial intelligence",
            duration: "45 minutes",
            videoUrl: "https://www.youtube.com/watch?v=JMUxmLyrhSk"
          },
          {
            id: 2,
            title: "Machine Learning Basics",
            description: "Basic concepts in machine learning and algorithms",
            duration: "60 minutes", 
            videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk"
          },
          {
            id: 3,
            title: "Neural Networks",
            description: "Introduction to neural networks and their applications",
            duration: "55 minutes",
            videoUrl: "https://www.youtube.com/watch?v=uwwWVAgJBcM"
          }
        ]
      },
      {
        id: 2,
        title: "Effective Leadership Skills",
        description: "Develop leadership skills to manage teams efficiently",
        instructor: "Dr. Sarah Al-Qadi",
        duration: "4 weeks",
        level: "intermediate",
        rating: 4.5,
        category: "business",
        image: "https://source.unsplash.com/random/300x200?leadership",
        price: 50,
        popularity: 85
      },
      {
        id: 3,
        title: "Python Programming",
        description: "Learn programming fundamentals using Python from scratch",
        instructor: "Eng. Khalid Al-Saeed",
        duration: "8 weeks",
        level: "beginner",
        rating: 4.8,
        category: "technology",
        image: "https://source.unsplash.com/random/300x200?python",
        price: 75,
        isNew: true
      }
    ];
  }
};
