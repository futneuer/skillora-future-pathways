
export const getLanguageContent = (language: 'ar' | 'en') => {
  const content = {
    ar: {
      // Navigation
      home: "الرئيسية",
      skills: "المهارات",
      planning: "التخطيط المهني",
      assessment: "التقييم",
      courses: "الدورات",
      profile: "الملف الشخصي",
      settings: "الإعدادات",
      
      // Skills page
      exploreSkills: "استكشاف المهارات",
      searchSkill: "ابحث عن مهارة...",
      skillCategories: {
        all: "الكل",
        technical: "تقنية",
        business: "أعمال",
        personal: "شخصية",
        analytical: "تحليلية"
      },

      // Planning page
      planYourFuture: "خطط لمستقبلك المهني",
      careerPath: "المسار المهني",
      educationPath: "المسار التعليمي",
      skillsNeeded: "المهارات المطلوبة",
      timeToAchieve: "الوقت المطلوب",
      planNow: "خطط الآن",

      // Assessment
      assessmentTitle: "التقييم الذكي",
      assessmentIntro: "اكتشف مهاراتك ومستقبلك المهني",
      assessmentDesc: "سيساعدك هذا التقييم على فهم نقاط قوتك واهتماماتك، واقتراح المسارات التعليمية والمهنية التي تناسبك.",
      step1: "35 سؤال قصير لتحليل مهاراتك واهتماماتك.",
      step2: "تحليل متقدم بالذكاء الاصطناعي لتحديد نقاط قوتك.",
      step3: "توصيات مخصصة للمسارات التعليمية والمهنية.",
      startButton: "ابدأ التقييم الآن",
      estimatedTime: "الوقت المقدر: 10-15 دقيقة",
      processing: "جاري معالجة إجاباتك...",
      resultTitle: "نتائج التقييم",
      yourStrengths: "نقاط قوتك",
      recommendedPaths: "المسارات الموصى بها",
      startNew: "بدء تقييم جديد",
      exploreCourses: "استكشف الدورات المناسبة",
      
      // Courses
      allCourses: "جميع الدورات",
      popularCourses: "الدورات الشائعة",
      newCourses: "دورات جديدة",
      enrollButton: "سجل الآن",
      enrolledButton: "مسجل",
      unenrollButton: "إلغاء التسجيل",
      courseDetails: "تفاصيل الدورة",
      instructorTitle: "المدرب",
      durationTitle: "المدة",
      levelTitle: "المستوى",
      ratingTitle: "التقييم",
      courseSyllabus: "محتوى الدورة",
      startLearning: "ابدأ التعلم",
      
      // Contact
      contactUs: "تواصل معنا",
      contactDesc: "نحن هنا للرد على استفساراتك ومساعدتك في رحلة تعلمك",
      yourName: "الاسم",
      yourEmail: "البريد الإلكتروني",
      yourMessage: "الرسالة",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      contactInfo: "معلومات الاتصال",
      officeHours: "ساعات العمل",
      weekdays: "الإثنين - الجمعة: 9:00 ص - 5:00 م",
      saturday: "السبت: 10:00 ص - 2:00 م",
      sunday: "الأحد: مغلق",
      ourTeam: "فريقنا",
      owner: "المالك",
      coOwner: "المالك المشارك",
      supervisor: "المشرف",
      
      // License
      license: "الترخيص",
      licenseText: "جميع الحقوق محفوظة © 2025 Skillora. لا يُسمح بإعادة إنتاج أو توزيع المحتوى دون إذن كتابي."
    },
    en: {
      // Navigation
      home: "Home",
      skills: "Skills",
      planning: "Career Planning",
      assessment: "Assessment",
      courses: "Courses",
      profile: "Profile",
      settings: "Settings",
      
      // Skills page
      exploreSkills: "Explore Skills",
      searchSkill: "Search for a skill...",
      skillCategories: {
        all: "All",
        technical: "Technical",
        business: "Business",
        personal: "Personal",
        analytical: "Analytical"
      },

      // Planning page
      planYourFuture: "Plan Your Future Career",
      careerPath: "Career Path",
      educationPath: "Education Path",
      skillsNeeded: "Skills Needed",
      timeToAchieve: "Time to Achieve",
      planNow: "Plan Now",

      // Assessment
      assessmentTitle: "Smart Assessment",
      assessmentIntro: "Discover Your Skills and Career Future",
      assessmentDesc: "This assessment will help you understand your strengths and interests, and suggest educational and career paths that suit you.",
      step1: "35 short questions to analyze your skills and interests.",
      step2: "Advanced AI analysis to identify your strengths.",
      step3: "Personalized recommendations for educational and career paths.",
      startButton: "Start Assessment Now",
      estimatedTime: "Estimated time: 10-15 minutes",
      processing: "Processing your answers...",
      resultTitle: "Assessment Results",
      yourStrengths: "Your Strengths",
      recommendedPaths: "Recommended Paths",
      startNew: "Start New Assessment",
      exploreCourses: "Explore Suitable Courses",
      
      // Courses
      allCourses: "All Courses",
      popularCourses: "Popular Courses",
      newCourses: "New Courses",
      enrollButton: "Enroll Now",
      enrolledButton: "Enrolled",
      unenrollButton: "Unenroll",
      courseDetails: "Course Details",
      instructorTitle: "Instructor",
      durationTitle: "Duration",
      levelTitle: "Level",
      ratingTitle: "Rating",
      courseSyllabus: "Course Syllabus",
      startLearning: "Start Learning",
      
      // Contact
      contactUs: "Contact Us",
      contactDesc: "We're here to answer your questions and assist you in your learning journey",
      yourName: "Name",
      yourEmail: "Email",
      yourMessage: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      contactInfo: "Contact Information",
      officeHours: "Office Hours",
      weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
      saturday: "Saturday: 10:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
      ourTeam: "Our Team",
      owner: "Owner",
      coOwner: "Co-Owner",
      supervisor: "Supervisor",
      
      // License
      license: "License",
      licenseText: "All rights reserved © 2025 Skillora. Reproduction or distribution of content without written permission is prohibited."
    }
  };
  
  return content[language];
};
