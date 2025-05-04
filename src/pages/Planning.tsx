
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
    // Technical paths
    {
      id: 1,
      title: language === 'ar' ? 'مطور برمجيات' : 'Software Developer',
      skills: language === 'ar' 
        ? ['برمجة', 'حل المشكلات', 'تصميم البرمجيات', 'قواعد البيانات'] 
        : ['Programming', 'Problem Solving', 'Software Design', 'Databases'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?developer',
      level: 'intermediate',
      category: 'technical',
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
      title: language === 'ar' ? 'مهندس شبكات' : 'Network Engineer',
      skills: language === 'ar' 
        ? ['أمن شبكات', 'بروتوكولات الشبكات', 'تكوين الأجهزة', 'حل مشكلات الشبكات'] 
        : ['Network Security', 'Network Protocols', 'Device Configuration', 'Network Troubleshooting'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?network',
      level: 'advanced',
      category: 'technical',
      description: language === 'ar' 
        ? 'تصميم وتنفيذ وصيانة الشبكات، بما في ذلك الأجهزة والبروتوكولات وأنظمة الأمان.' 
        : 'Design, implement and maintain networks including hardware, protocols and security systems.',
      milestones: [
        { name: language === 'ar' ? 'فهم أساسيات الشبكات' : 'Understand networking basics', progress: 0 },
        { name: language === 'ar' ? 'تعلم بروتوكولات الشبكات' : 'Learn network protocols', progress: 0 },
        { name: language === 'ar' ? 'إدارة أمن الشبكات' : 'Manage network security', progress: 0 },
        { name: language === 'ar' ? 'الحصول على شهادات معتمدة' : 'Obtain certifications', progress: 0 },
      ],
      relatedCourses: [
        { id: 103, title: language === 'ar' ? 'أساسيات الشبكات' : 'Networking Fundamentals' },
        { id: 104, title: language === 'ar' ? 'أمن الشبكات' : 'Network Security' },
      ]
    },

    // Analytical paths
    {
      id: 3,
      title: language === 'ar' ? 'محلل بيانات' : 'Data Analyst',
      skills: language === 'ar' 
        ? ['تحليل البيانات', 'الإحصاء', 'بايثون/R', 'تصور البيانات'] 
        : ['Data Analysis', 'Statistics', 'Python/R', 'Data Visualization'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?data',
      level: 'intermediate',
      category: 'analytical',
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
      id: 4,
      title: language === 'ar' ? 'محلل أعمال' : 'Business Analyst',
      skills: language === 'ar'
        ? ['تحليل الأعمال', 'نمذجة العمليات', 'متطلبات البرمجيات', 'دراسة الجدوى']
        : ['Business Analysis', 'Process Modeling', 'Software Requirements', 'Feasibility Study'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?business',
      level: 'intermediate',
      category: 'analytical',
      description: language === 'ar'
        ? 'تحليل احتياجات العمل وتحديد الحلول التي تحقق قيمة للشركات والعملاء.'
        : 'Analyze business needs and identify solutions that deliver value to companies and customers.',
      milestones: [
        { name: language === 'ar' ? 'فهم عمليات الأعمال' : 'Understand business processes', progress: 0 },
        { name: language === 'ar' ? 'تعلم تحليل المتطلبات' : 'Learn requirements analysis', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات التوثيق' : 'Develop documentation skills', progress: 0 },
        { name: language === 'ar' ? 'إتقان أدوات تحليل الأعمال' : 'Master business analysis tools', progress: 0 },
      ],
      relatedCourses: [
        { id: 203, title: language === 'ar' ? 'أساسيات تحليل الأعمال' : 'Business Analysis Fundamentals' },
        { id: 204, title: language === 'ar' ? 'هندسة المتطلبات' : 'Requirements Engineering' },
      ]
    },

    // Creative paths
    {
      id: 5,
      title: language === 'ar' ? 'مصمم واجهة المستخدم' : 'UI/UX Designer',
      skills: language === 'ar' 
        ? ['تصميم واجهة المستخدم', 'تجربة المستخدم', 'أدوات التصميم', 'النماذج الأولية'] 
        : ['UI Design', 'UX Design', 'Design Tools', 'Prototyping'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?design',
      level: 'intermediate',
      category: 'creative',
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
    },
    {
      id: 6,
      title: language === 'ar' ? 'كاتب محتوى' : 'Content Writer',
      skills: language === 'ar'
        ? ['كتابة إبداعية', 'تحرير النصوص', 'كتابة محتوى تقني', 'تحسين محركات البحث']
        : ['Creative Writing', 'Copyediting', 'Technical Writing', 'SEO'],
      time: language === 'ar' ? '1-3 سنوات' : '1-3 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?writing',
      level: 'beginner',
      category: 'creative',
      description: language === 'ar'
        ? 'كتابة محتوى جذاب ومعلوماتي للمواقع الإلكترونية والمدونات والمنشورات الاجتماعية.'
        : 'Create engaging and informative content for websites, blogs, and social posts.',
      milestones: [
        { name: language === 'ar' ? 'تطوير مهارات الكتابة' : 'Develop writing skills', progress: 0 },
        { name: language === 'ar' ? 'تعلم أساسيات تحسين محركات البحث' : 'Learn SEO basics', progress: 0 },
        { name: language === 'ar' ? 'بناء محفظة أعمال' : 'Build a portfolio', progress: 0 },
        { name: language === 'ar' ? 'تخصص في مجال معين' : 'Specialize in a niche', progress: 0 },
      ],
      relatedCourses: [
        { id: 403, title: language === 'ar' ? 'أساسيات الكتابة الإبداعية' : 'Creative Writing Fundamentals' },
        { id: 404, title: language === 'ar' ? 'كتابة محتوى الويب' : 'Web Content Writing' },
      ]
    },

    // Interpersonal paths
    {
      id: 7,
      title: language === 'ar' ? 'مدير علاقات عامة' : 'Public Relations Manager',
      skills: language === 'ar'
        ? ['التواصل', 'إدارة الأزمات', 'العلاقات الإعلامية', 'استراتيجية العلاقات العامة']
        : ['Communication', 'Crisis Management', 'Media Relations', 'PR Strategy'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?pr',
      level: 'advanced',
      category: 'interpersonal',
      description: language === 'ar'
        ? 'بناء وإدارة صورة وسمعة المنظمة من خلال استراتيجيات التواصل والعلاقات العامة.'
        : 'Build and manage an organization\'s image and reputation through communication and PR strategies.',
      milestones: [
        { name: language === 'ar' ? 'تطوير مهارات التواصل' : 'Develop communication skills', progress: 0 },
        { name: language === 'ar' ? 'تعلم إدارة الأزمات' : 'Learn crisis management', progress: 0 },
        { name: language === 'ar' ? 'بناء علاقات إعلامية' : 'Build media relations', progress: 0 },
        { name: language === 'ar' ? 'تطوير استراتيجيات العلاقات العامة' : 'Develop PR strategies', progress: 0 },
      ],
      relatedCourses: [
        { id: 501, title: language === 'ar' ? 'أساسيات العلاقات العامة' : 'PR Fundamentals' },
        { id: 502, title: language === 'ar' ? 'إدارة الأزمات' : 'Crisis Management' },
      ]
    },
    {
      id: 8,
      title: language === 'ar' ? 'أخصائي موارد بشرية' : 'HR Specialist',
      skills: language === 'ar'
        ? ['التوظيف', 'تدريب الموظفين', 'إدارة الأداء', 'قوانين العمل']
        : ['Recruitment', 'Employee Training', 'Performance Management', 'Labor Laws'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?hr',
      level: 'intermediate',
      category: 'interpersonal',
      description: language === 'ar'
        ? 'إدارة كافة جوانب الموارد البشرية من التوظيف إلى تطوير الموظفين والحفاظ عليهم.'
        : 'Manage all aspects of human resources from recruitment to employee development and retention.',
      milestones: [
        { name: language === 'ar' ? 'فهم قوانين العمل' : 'Understand labor laws', progress: 0 },
        { name: language === 'ar' ? 'تعلم استراتيجيات التوظيف' : 'Learn recruitment strategies', progress: 0 },
        { name: language === 'ar' ? 'تطوير برامج تدريبية' : 'Develop training programs', progress: 0 },
        { name: language === 'ar' ? 'تنفيذ أنظمة إدارة الأداء' : 'Implement performance management systems', progress: 0 },
      ],
      relatedCourses: [
        { id: 503, title: language === 'ar' ? 'أساسيات الموارد البشرية' : 'HR Fundamentals' },
        { id: 504, title: language === 'ar' ? 'استراتيجيات التوظيف' : 'Recruitment Strategies' },
      ]
    },

    // Leadership paths
    {
      id: 9,
      title: language === 'ar' ? 'مدير مشاريع' : 'Project Manager',
      skills: language === 'ar' 
        ? ['إدارة المشاريع', 'القيادة', 'التواصل', 'إدارة الموارد'] 
        : ['Project Management', 'Leadership', 'Communication', 'Resource Management'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?manager',
      level: 'advanced',
      category: 'leadership',
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
      id: 10,
      title: language === 'ar' ? 'مدير تنفيذي' : 'Executive Manager',
      skills: language === 'ar'
        ? ['استراتيجية الأعمال', 'القيادة التنفيذية', 'إدارة التغيير', 'صنع القرار']
        : ['Business Strategy', 'Executive Leadership', 'Change Management', 'Decision Making'],
      time: language === 'ar' ? '8-10 سنوات' : '8-10 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?executive',
      level: 'advanced',
      category: 'leadership',
      description: language === 'ar'
        ? 'قيادة المنظمة وتطوير استراتيجياتها وتوجيه النمو وتحقيق الأهداف العامة.'
        : 'Lead the organization, develop strategies, guide growth, and achieve overall objectives.',
      milestones: [
        { name: language === 'ar' ? 'تطوير مهارات القيادة العليا' : 'Develop executive leadership skills', progress: 0 },
        { name: language === 'ar' ? 'إتقان التخطيط الاستراتيجي' : 'Master strategic planning', progress: 0 },
        { name: language === 'ar' ? 'تعلم إدارة التغيير' : 'Learn change management', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات صنع القرار' : 'Develop decision-making skills', progress: 0 },
      ],
      relatedCourses: [
        { id: 303, title: language === 'ar' ? 'القيادة التنفيذية' : 'Executive Leadership' },
        { id: 304, title: language === 'ar' ? 'استراتيجية الأعمال' : 'Business Strategy' },
      ]
    },

    // Research paths
    {
      id: 11,
      title: language === 'ar' ? 'باحث علمي' : 'Scientific Researcher',
      skills: language === 'ar'
        ? ['المنهجية العلمية', 'تحليل البيانات', 'كتابة الأبحاث', 'التجريب']
        : ['Scientific Methodology', 'Data Analysis', 'Research Writing', 'Experimentation'],
      time: language === 'ar' ? '5-8 سنوات' : '5-8 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?research',
      level: 'advanced',
      category: 'research',
      description: language === 'ar'
        ? 'إجراء البحوث العلمية المتعمقة لاكتشاف معارف جديدة وتطوير نظريات علمية.'
        : 'Conduct in-depth scientific research to discover new knowledge and develop scientific theories.',
      milestones: [
        { name: language === 'ar' ? 'إتقان المنهجية العلمية' : 'Master scientific methodology', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات البحث' : 'Develop research skills', progress: 0 },
        { name: language === 'ar' ? 'نشر أوراق بحثية' : 'Publish research papers', progress: 0 },
        { name: language === 'ar' ? 'الحصول على تمويل بحثي' : 'Secure research funding', progress: 0 },
      ],
      relatedCourses: [
        { id: 601, title: language === 'ar' ? 'منهجية البحث العلمي' : 'Research Methodology' },
        { id: 602, title: language === 'ar' ? 'تحليل البيانات للباحثين' : 'Data Analysis for Researchers' },
      ]
    },
    {
      id: 12,
      title: language === 'ar' ? 'باحث سوق' : 'Market Researcher',
      skills: language === 'ar'
        ? ['بحوث السوق', 'تحليل البيانات الكمية والنوعية', 'استطلاعات الرأي', 'تحليل المنافسين']
        : ['Market Research', 'Qualitative & Quantitative Analysis', 'Surveys', 'Competitor Analysis'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?market',
      level: 'intermediate',
      category: 'research',
      description: language === 'ar'
        ? 'جمع وتحليل البيانات حول الأسواق والمستهلكين والمنافسين لدعم قرارات الأعمال.'
        : 'Collect and analyze data about markets, consumers, and competitors to support business decisions.',
      milestones: [
        { name: language === 'ar' ? 'تعلم أساليب البحث الكمي والنوعي' : 'Learn qualitative and quantitative methods', progress: 0 },
        { name: language === 'ar' ? 'إتقان تصميم الاستبيانات' : 'Master survey design', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات تحليلية' : 'Develop analytical skills', progress: 0 },
        { name: language === 'ar' ? 'تعلم تقديم النتائج' : 'Learn to present findings', progress: 0 },
      ],
      relatedCourses: [
        { id: 603, title: language === 'ar' ? 'أساسيات بحوث السوق' : 'Market Research Fundamentals' },
        { id: 604, title: language === 'ar' ? 'تحليل بيانات المستهلكين' : 'Consumer Data Analysis' },
      ]
    },

    // Organizational paths
    {
      id: 13,
      title: language === 'ar' ? 'مدير لوجستيات' : 'Logistics Manager',
      skills: language === 'ar'
        ? ['إدارة سلسلة التوريد', 'التخطيط اللوجستي', 'إدارة المخزون', 'النقل']
        : ['Supply Chain Management', 'Logistics Planning', 'Inventory Management', 'Transportation'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?logistics',
      level: 'advanced',
      category: 'logistics',
      description: language === 'ar'
        ? 'تخطيط وإدارة سلسلة التوريد الكاملة من المواد الخام إلى المنتج النهائي والتسليم.'
        : 'Plan and manage the complete supply chain from raw materials to final product and delivery.',
      milestones: [
        { name: language === 'ar' ? 'فهم سلسلة التوريد' : 'Understand supply chain', progress: 0 },
        { name: language === 'ar' ? 'تعلم إدارة المخزون' : 'Learn inventory management', progress: 0 },
        { name: language === 'ar' ? 'تحسين عمليات النقل' : 'Optimize transportation processes', progress: 0 },
        { name: language === 'ar' ? 'تنفيذ أنظمة تتبع' : 'Implement tracking systems', progress: 0 },
      ],
      relatedCourses: [
        { id: 701, title: language === 'ar' ? 'أساسيات إدارة سلسلة التوريد' : 'Supply Chain Management Fundamentals' },
        { id: 702, title: language === 'ar' ? 'تحسين اللوجستيات' : 'Logistics Optimization' },
      ]
    },
    {
      id: 14,
      title: language === 'ar' ? 'مدير إداري' : 'Administrative Manager',
      skills: language === 'ar'
        ? ['إدارة المكاتب', 'تنظيم الوثائق', 'إدارة الموارد', 'تخطيط الميزانية']
        : ['Office Management', 'Document Organization', 'Resource Management', 'Budget Planning'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?office',
      level: 'intermediate',
      category: 'organizational',
      description: language === 'ar'
        ? 'تنظيم وإدارة العمليات المكتبية والإدارية لضمان كفاءة سير العمل في المنظمة.'
        : 'Organize and manage office operations and administrative functions to ensure organizational efficiency.',
      milestones: [
        { name: language === 'ar' ? 'تطوير مهارات التنظيم' : 'Develop organizational skills', progress: 0 },
        { name: language === 'ar' ? 'تعلم إدارة الميزانية' : 'Learn budget management', progress: 0 },
        { name: language === 'ar' ? 'تحسين تدفق العمل' : 'Improve workflow', progress: 0 },
        { name: language === 'ar' ? 'إتقان إدارة المكاتب' : 'Master office management', progress: 0 },
      ],
      relatedCourses: [
        { id: 703, title: language === 'ar' ? 'أساسيات الإدارة المكتبية' : 'Office Management Fundamentals' },
        { id: 704, title: language === 'ar' ? 'تنظيم الوثائق والملفات' : 'Document and File Organization' },
      ]
    },

    // Artistic paths
    {
      id: 15,
      title: language === 'ar' ? 'مصمم جرافيك' : 'Graphic Designer',
      skills: language === 'ar'
        ? ['التصميم الجرافيكي', 'برامج التصميم', 'نظرية الألوان', 'التايبوغرافي']
        : ['Graphic Design', 'Design Software', 'Color Theory', 'Typography'],
      time: language === 'ar' ? '2-4 سنوات' : '2-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?graphic',
      level: 'intermediate',
      category: 'artistic',
      description: language === 'ar'
        ? 'إنشاء تصاميم بصرية جذابة للمطبوعات والوسائط الرقمية والعلامات التجارية.'
        : 'Create compelling visual designs for print, digital media, and branding.',
      milestones: [
        { name: language === 'ar' ? 'إتقان برامج التصميم' : 'Master design software', progress: 0 },
        { name: language === 'ar' ? 'فهم نظرية الألوان' : 'Understand color theory', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات التايبوغرافي' : 'Develop typography skills', progress: 0 },
        { name: language === 'ar' ? 'بناء محفظة أعمال' : 'Build a portfolio', progress: 0 },
      ],
      relatedCourses: [
        { id: 801, title: language === 'ar' ? 'أساسيات التصميم الجرافيكي' : 'Graphic Design Fundamentals' },
        { id: 802, title: language === 'ar' ? 'برامج أدوبي للمصممين' : 'Adobe Suite for Designers' },
      ]
    },
    {
      id: 16,
      title: language === 'ar' ? 'مصور فوتوغرافي' : 'Photographer',
      skills: language === 'ar'
        ? ['التصوير الفوتوغرافي', 'معالجة الصور', 'الإضاءة', 'التكوين البصري']
        : ['Photography', 'Image Processing', 'Lighting', 'Visual Composition'],
      time: language === 'ar' ? '2-3 سنوات' : '2-3 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?photography',
      level: 'beginner',
      category: 'artistic',
      description: language === 'ar'
        ? 'التقاط صور احترافية عالية الجودة للأشخاص والمنتجات والمناسبات والمناظر الطبيعية.'
        : 'Capture professional, high-quality images of people, products, events, and landscapes.',
      milestones: [
        { name: language === 'ar' ? 'إتقان أساسيات التصوير' : 'Master photography basics', progress: 0 },
        { name: language === 'ar' ? 'تعلم تقنيات الإضاءة' : 'Learn lighting techniques', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات التحرير' : 'Develop editing skills', progress: 0 },
        { name: language === 'ar' ? 'بناء محفظة تصوير' : 'Build a photography portfolio', progress: 0 },
      ],
      relatedCourses: [
        { id: 803, title: language === 'ar' ? 'أساسيات التصوير الفوتوغرافي' : 'Photography Fundamentals' },
        { id: 804, title: language === 'ar' ? 'تحرير الصور الاحترافية' : 'Professional Photo Editing' },
      ]
    },

    // Agricultural paths
    {
      id: 17,
      title: language === 'ar' ? 'مهندس زراعي' : 'Agricultural Engineer',
      skills: language === 'ar'
        ? ['هندسة زراعية', 'إدارة المحاصيل', 'تكنولوجيا الزراعة', 'الري']
        : ['Agricultural Engineering', 'Crop Management', 'Agricultural Technology', 'Irrigation'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?agriculture',
      level: 'advanced',
      category: 'agricultural',
      description: language === 'ar'
        ? 'تطبيق المبادئ الهندسية لحل المشكلات الزراعية وتحسين الإنتاج والاستدامة.'
        : 'Apply engineering principles to solve agricultural problems and improve production and sustainability.',
      milestones: [
        { name: language === 'ar' ? 'فهم أساسيات الزراعة' : 'Understand agricultural basics', progress: 0 },
        { name: language === 'ar' ? 'تعلم أنظمة الري' : 'Learn irrigation systems', progress: 0 },
        { name: language === 'ar' ? 'دراسة تكنولوجيا الزراعة الحديثة' : 'Study modern agricultural technology', progress: 0 },
        { name: language === 'ar' ? 'تطوير مشاريع زراعية' : 'Develop agricultural projects', progress: 0 },
      ],
      relatedCourses: [
        { id: 901, title: language === 'ar' ? 'أساسيات الهندسة الزراعية' : 'Agricultural Engineering Fundamentals' },
        { id: 902, title: language === 'ar' ? 'أنظمة الري الحديثة' : 'Modern Irrigation Systems' },
      ]
    },
    {
      id: 18,
      title: language === 'ar' ? 'مدير مزرعة' : 'Farm Manager',
      skills: language === 'ar'
        ? ['إدارة المزارع', 'إنتاج المحاصيل', 'إدارة الثروة الحيوانية', 'الزراعة المستدامة']
        : ['Farm Management', 'Crop Production', 'Livestock Management', 'Sustainable Agriculture'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?farm',
      level: 'intermediate',
      category: 'agricultural',
      description: language === 'ar'
        ? 'إدارة العمليات اليومية للمزرعة وتخطيط الإنتاج وتنفيذ ممارسات الزراعة المستدامة.'
        : 'Manage day-to-day farm operations, plan production, and implement sustainable farming practices.',
      milestones: [
        { name: language === 'ar' ? 'تعلم أساسيات الزراعة' : 'Learn farming basics', progress: 0 },
        { name: language === 'ar' ? 'فهم إدارة المحاصيل' : 'Understand crop management', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات إدارة الثروة الحيوانية' : 'Develop livestock management skills', progress: 0 },
        { name: language === 'ar' ? 'تطبيق ممارسات الاستدامة' : 'Implement sustainability practices', progress: 0 },
      ],
      relatedCourses: [
        { id: 903, title: language === 'ar' ? 'إدارة المزارع' : 'Farm Management' },
        { id: 904, title: language === 'ar' ? 'الزراعة المستدامة' : 'Sustainable Agriculture' },
      ]
    },

    // Healthcare paths
    {
      id: 19,
      title: language === 'ar' ? 'طبيب' : 'Physician',
      skills: language === 'ar'
        ? ['الطب', 'التشخيص', 'العلاج', 'رعاية المرضى']
        : ['Medicine', 'Diagnosis', 'Treatment', 'Patient Care'],
      time: language === 'ar' ? '10-14 سنة' : '10-14 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?doctor',
      level: 'advanced',
      category: 'healthcare',
      description: language === 'ar'
        ? 'تشخيص وعلاج الأمراض والإصابات وتقديم الرعاية الطبية الشاملة للمرضى.'
        : 'Diagnose and treat diseases and injuries and provide comprehensive medical care to patients.',
      milestones: [
        { name: language === 'ar' ? 'إكمال الدراسة الطبية' : 'Complete medical school', progress: 0 },
        { name: language === 'ar' ? 'إكمال الإقامة' : 'Complete residency', progress: 0 },
        { name: language === 'ar' ? 'الحصول على ترخيص' : 'Obtain license', progress: 0 },
        { name: language === 'ar' ? 'التخصص في مجال معين' : 'Specialize in a field', progress: 0 },
      ],
      relatedCourses: [
        { id: 1001, title: language === 'ar' ? 'العلوم الطبية الأساسية' : 'Basic Medical Sciences' },
        { id: 1002, title: language === 'ar' ? 'التشخيص السريري' : 'Clinical Diagnosis' },
      ]
    },
    {
      id: 20,
      title: language === 'ar' ? 'ممرض' : 'Nurse',
      skills: language === 'ar'
        ? ['التمريض', 'رعاية المرضى', 'إدارة الأدوية', 'التقييم الصحي']
        : ['Nursing', 'Patient Care', 'Medication Management', 'Health Assessment'],
      time: language === 'ar' ? '3-4 سنوات' : '3-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?nurse',
      level: 'intermediate',
      category: 'healthcare',
      description: language === 'ar'
        ? 'تقديم الرعاية التمريضية للمرضى ومراقبة حالتهم وتنفيذ خطط العلاج.'
        : 'Provide nursing care to patients, monitor their condition, and implement treatment plans.',
      milestones: [
        { name: language === 'ar' ? 'إكمال برنامج التمريض' : 'Complete nursing program', progress: 0 },
        { name: language === 'ar' ? 'اجتياز امتحان الترخيص' : 'Pass licensing exam', progress: 0 },
        { name: language === 'ar' ? 'اكتساب خبرة سريرية' : 'Gain clinical experience', progress: 0 },
        { name: language === 'ar' ? 'التخصص في مجال معين' : 'Specialize in a field', progress: 0 },
      ],
      relatedCourses: [
        { id: 1003, title: language === 'ar' ? 'أساسيات التمريض' : 'Nursing Fundamentals' },
        { id: 1004, title: language === 'ar' ? 'التقييم الصحي' : 'Health Assessment' },
      ]
    },

    // Legal paths
    {
      id: 21,
      title: language === 'ar' ? 'محامي' : 'Lawyer',
      skills: language === 'ar'
        ? ['القانون', 'البحث القانوني', 'التقاضي', 'كتابة العقود']
        : ['Law', 'Legal Research', 'Litigation', 'Contract Writing'],
      time: language === 'ar' ? '7-8 سنوات' : '7-8 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?lawyer',
      level: 'advanced',
      category: 'legal',
      description: language === 'ar'
        ? 'تقديم المشورة القانونية وتمثيل العملاء في المحاكم وإعداد الوثائق القانونية.'
        : 'Provide legal advice, represent clients in court, and prepare legal documents.',
      milestones: [
        { name: language === 'ar' ? 'إكمال كلية الحقوق' : 'Complete law school', progress: 0 },
        { name: language === 'ar' ? 'اجتياز امتحان المحاماة' : 'Pass the bar exam', progress: 0 },
        { name: language === 'ar' ? 'اكتساب خبرة قانونية' : 'Gain legal experience', progress: 0 },
        { name: language === 'ar' ? 'التخصص في مجال قانوني معين' : 'Specialize in a legal field', progress: 0 },
      ],
      relatedCourses: [
        { id: 1101, title: language === 'ar' ? 'مبادئ القانون' : 'Principles of Law' },
        { id: 1102, title: language === 'ar' ? 'أصول المحاكمات' : 'Trial Procedures' },
      ]
    },
    {
      id: 22,
      title: language === 'ar' ? 'مستشار قانوني' : 'Legal Consultant',
      skills: language === 'ar'
        ? ['المشورة القانونية', 'تقييم المخاطر القانونية', 'صياغة العقود', 'الامتثال القانوني']
        : ['Legal Advice', 'Legal Risk Assessment', 'Contract Drafting', 'Legal Compliance'],
      time: language === 'ar' ? '5-7 سنوات' : '5-7 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?legal',
      level: 'advanced',
      category: 'legal',
      description: language === 'ar'
        ? 'تقديم المشورة القانونية للشركات والمؤسسات حول القضايا القانونية والامتثال.'
        : 'Provide legal advice to companies and organizations on legal issues and compliance.',
      milestones: [
        { name: language === 'ar' ? 'الحصول على شهادة قانونية' : 'Obtain legal degree', progress: 0 },
        { name: language === 'ar' ? 'تطوير خبرة في مجال معين' : 'Develop expertise in specific area', progress: 0 },
        { name: language === 'ar' ? 'بناء شبكة علاقات مهنية' : 'Build professional network', progress: 0 },
        { name: language === 'ar' ? 'إتقان الاستشارات القانونية' : 'Master legal consulting', progress: 0 },
      ],
      relatedCourses: [
        { id: 1103, title: language === 'ar' ? 'الاستشارات القانونية' : 'Legal Consulting' },
        { id: 1104, title: language === 'ar' ? 'قانون الشركات' : 'Corporate Law' },
      ]
    },

    // Business paths
    {
      id: 23,
      title: language === 'ar' ? 'مدير تسويق' : 'Marketing Director',
      skills: language === 'ar'
        ? ['استراتيجية التسويق', 'إدارة العلامة التجارية', 'التسويق الرقمي', 'بحوث السوق']
        : ['Marketing Strategy', 'Brand Management', 'Digital Marketing', 'Market Research'],
      time: language === 'ar' ? '6-8 سنوات' : '6-8 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?marketing',
      level: 'advanced',
      category: 'business',
      description: language === 'ar'
        ? 'تطوير وتنفيذ استراتيجيات التسويق لتعزيز العلامة التجارية وزيادة المبيعات.'
        : 'Develop and implement marketing strategies to promote the brand and increase sales.',
      milestones: [
        { name: language === 'ar' ? 'تطوير خبرة تسويقية' : 'Develop marketing expertise', progress: 0 },
        { name: language === 'ar' ? 'إدارة حملات تسويقية' : 'Manage marketing campaigns', progress: 0 },
        { name: language === 'ar' ? 'تعلم التسويق الرقمي' : 'Learn digital marketing', progress: 0 },
        { name: language === 'ar' ? 'تطوير استراتيجيات العلامة التجارية' : 'Develop brand strategies', progress: 0 },
      ],
      relatedCourses: [
        { id: 1201, title: language === 'ar' ? 'استراتيجية التسويق' : 'Marketing Strategy' },
        { id: 1202, title: language === 'ar' ? 'إدارة العلامة التجارية' : 'Brand Management' },
      ]
    },
    {
      id: 24,
      title: language === 'ar' ? 'محلل مالي' : 'Financial Analyst',
      skills: language === 'ar'
        ? ['التحليل المالي', 'التنبؤ المالي', 'نمذجة البيانات', 'المحاسبة']
        : ['Financial Analysis', 'Financial Forecasting', 'Data Modeling', 'Accounting'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?finance',
      level: 'intermediate',
      category: 'business',
      description: language === 'ar'
        ? 'تحليل البيانات المالية وإعداد التقارير وتقديم التوصيات لدعم اتخاذ القرارات المالية.'
        : 'Analyze financial data, prepare reports, and provide recommendations to support financial decisions.',
      milestones: [
        { name: language === 'ar' ? 'تعلم أساسيات المحاسبة' : 'Learn accounting basics', progress: 0 },
        { name: language === 'ar' ? 'إتقان التحليل المالي' : 'Master financial analysis', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات النمذجة المالية' : 'Develop financial modeling skills', progress: 0 },
        { name: language === 'ar' ? 'الحصول على شهادات مالية' : 'Obtain financial certifications', progress: 0 },
      ],
      relatedCourses: [
        { id: 1203, title: language === 'ar' ? 'التحليل المالي' : 'Financial Analysis' },
        { id: 1204, title: language === 'ar' ? 'النمذجة المالية' : 'Financial Modeling' },
      ]
    },

    // Educational paths
    {
      id: 25,
      title: language === 'ar' ? 'معلم' : 'Teacher',
      skills: language === 'ar'
        ? ['التدريس', 'تطوير المناهج', 'إدارة الصف', 'تقييم الطلاب']
        : ['Teaching', 'Curriculum Development', 'Classroom Management', 'Student Assessment'],
      time: language === 'ar' ? '4-5 سنوات' : '4-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?teacher',
      level: 'intermediate',
      category: 'educational',
      description: language === 'ar'
        ? 'تدريس الطلاب وتصميم خطط الدروس وتقييم تقدم الطلاب وتوفير بيئة تعليمية داعمة.'
        : 'Teach students, design lesson plans, assess student progress, and provide a supportive learning environment.',
      milestones: [
        { name: language === 'ar' ? 'الحصول على شهادة تدريس' : 'Obtain teaching degree', progress: 0 },
        { name: language === 'ar' ? 'تطوير مهارات التدريس' : 'Develop teaching skills', progress: 0 },
        { name: language === 'ar' ? 'تعلم إدارة الصف' : 'Learn classroom management', progress: 0 },
        { name: language === 'ar' ? 'إتقان طرق التقييم' : 'Master assessment methods', progress: 0 },
      ],
      relatedCourses: [
        { id: 1301, title: language === 'ar' ? 'أساسيات التدريس' : 'Teaching Fundamentals' },
        { id: 1302, title: language === 'ar' ? 'إدارة الصف الدراسي' : 'Classroom Management' },
      ]
    },
    {
      id: 26,
      title: language === 'ar' ? 'مطور مناهج' : 'Curriculum Developer',
      skills: language === 'ar'
        ? ['تصميم المناهج', 'نظريات التعلم', 'تقييم المناهج', 'تطوير المواد التعليمية']
        : ['Curriculum Design', 'Learning Theories', 'Curriculum Assessment', 'Educational Materials Development'],
      time: language === 'ar' ? '5-7 سنوات' : '5-7 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?curriculum',
      level: 'advanced',
      category: 'educational',
      description: language === 'ar'
        ? 'تصميم وتطوير المناهج الدراسية والمواد التعليمية التي تلبي احتياجات الطلاب والمعايير التعليمية.'
        : 'Design and develop curricula and educational materials that meet student needs and educational standards.',
      milestones: [
        { name: language === 'ar' ? 'فهم نظريات التعلم' : 'Understand learning theories', progress: 0 },
        { name: language === 'ar' ? 'تعلم تصميم المناهج' : 'Learn curriculum design', progress: 0 },
        { name: language === 'ar' ? 'تطوير مواد تعليمية' : 'Develop educational materials', progress: 0 },
        { name: language === 'ar' ? 'تقييم فعالية المناهج' : 'Evaluate curriculum effectiveness', progress: 0 },
      ],
      relatedCourses: [
        { id: 1303, title: language === 'ar' ? 'تصميم المناهج الدراسية' : 'Curriculum Design' },
        { id: 1304, title: language === 'ar' ? 'نظريات التعلم' : 'Learning Theories' },
      ]
    },

    // Engineering paths
    {
      id: 27,
      title: language === 'ar' ? 'مهندس مدني' : 'Civil Engineer',
      skills: language === 'ar'
        ? ['تصميم الإنشاءات', 'تحليل الهياكل', 'مواد البناء', 'إدارة المشاريع']
        : ['Construction Design', 'Structural Analysis', 'Building Materials', 'Project Management'],
      time: language === 'ar' ? '4-6 سنوات' : '4-6 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?civil',
      level: 'advanced',
      category: 'engineering',
      description: language === 'ar'
        ? 'تصميم وتطوير وبناء البنية التحتية مثل الطرق والجسور والمباني ومشاريع المياه.'
        : 'Design, develop, and build infrastructure such as roads, bridges, buildings, and water projects.',
      milestones: [
        { name: language === 'ar' ? 'إكمال درجة الهندسة' : 'Complete engineering degree', progress: 0 },
        { name: language === 'ar' ? 'تعلم برامج التصميم' : 'Learn design software', progress: 0 },
        { name: language === 'ar' ? 'اكتساب خبرة في المشاريع' : 'Gain project experience', progress: 0 },
        { name: language === 'ar' ? 'الحصول على ترخيص مهني' : 'Obtain professional license', progress: 0 },
      ],
      relatedCourses: [
        { id: 1401, title: language === 'ar' ? 'أساسيات الهندسة المدنية' : 'Civil Engineering Fundamentals' },
        { id: 1402, title: language === 'ar' ? 'تصميم الهياكل' : 'Structural Design' },
      ]
    },
    {
      id: 28,
      title: language === 'ar' ? 'مهندس ذكاء اصطناعي' : 'AI Engineer',
      skills: language === 'ar'
        ? ['التعلم الآلي', 'معالجة اللغة الطبيعية', 'الرؤية الحاسوبية', 'تحليل البيانات']
        : ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Data Analysis'],
      time: language === 'ar' ? '3-5 سنوات' : '3-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?ai',
      level: 'advanced',
      category: 'engineering',
      description: language === 'ar'
        ? 'تطوير وتطبيق تقنيات الذكاء الاصطناعي والتعلم الآلي لحل المشكلات المعقدة.'
        : 'Develop and apply artificial intelligence and machine learning techniques to solve complex problems.',
      milestones: [
        { name: language === 'ar' ? 'إتقان البرمجة' : 'Master programming', progress: 0 },
        { name: language === 'ar' ? 'تعلم أساسيات التعلم الآلي' : 'Learn machine learning basics', progress: 0 },
        { name: language === 'ar' ? 'تطوير نماذج الذكاء الاصطناعي' : 'Develop AI models', progress: 0 },
        { name: language === 'ar' ? 'تطبيق الذكاء الاصطناعي في مشاريع عملية' : 'Apply AI in practical projects', progress: 0 },
      ],
      relatedCourses: [
        { id: 1403, title: language === 'ar' ? 'مقدمة في الذكاء الاصطناعي' : 'Introduction to AI' },
        { id: 1404, title: language === 'ar' ? 'التعلم الآلي المتقدم' : 'Advanced Machine Learning' },
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
      category: 'technical',
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
      category: 'analytical',
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
      category: 'leadership',
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
    },
    // New education paths
    {
      id: 104,
      title: language === 'ar' ? 'بكالوريوس هندسة' : 'Bachelor of Engineering',
      skills: language === 'ar'
        ? ['رياضيات متقدمة', 'فيزياء', 'تصميم هندسي', 'حل مشكلات']
        : ['Advanced Mathematics', 'Physics', 'Engineering Design', 'Problem Solving'],
      time: language === 'ar' ? '4-5 سنوات' : '4-5 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?engineering',
      level: 'beginner',
      category: 'engineering',
      description: language === 'ar'
        ? 'درجة علمية تركز على المبادئ الهندسية وتطبيقاتها العملية في مختلف المجالات.'
        : 'Academic degree focusing on engineering principles and their practical applications in various fields.',
      milestones: [
        { name: language === 'ar' ? 'إكمال المواد الأساسية' : 'Complete foundation courses', progress: 0 },
        { name: language === 'ar' ? 'إكمال المواد الهندسية الأساسية' : 'Complete core engineering courses', progress: 0 },
        { name: language === 'ar' ? 'إكمال مواد التخصص' : 'Complete specialization courses', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع التخرج' : 'Complete senior project', progress: 0 },
      ],
      relatedCourses: [
        { id: 801, title: language === 'ar' ? 'مقدمة في الهندسة' : 'Introduction to Engineering' },
        { id: 802, title: language === 'ar' ? 'الرياضيات الهندسية' : 'Engineering Mathematics' },
      ]
    },
    {
      id: 105,
      title: language === 'ar' ? 'برنامج تصميم جرافيكي' : 'Graphic Design Program',
      skills: language === 'ar'
        ? ['تصميم جرافيكي', 'أدوبي كرييتيف سويت', 'تصميم شعارات', 'تايبوغرافي']
        : ['Graphic Design', 'Adobe Creative Suite', 'Logo Design', 'Typography'],
      time: language === 'ar' ? '2-3 سنوات' : '2-3 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?design',
      level: 'beginner',
      category: 'artistic',
      description: language === 'ar'
        ? 'برنامج تعليمي يركز على تطوير المهارات الإبداعية والتقنية اللازمة للتصميم الجرافيكي.'
        : 'Educational program focusing on developing creative and technical skills needed for graphic design.',
      milestones: [
        { name: language === 'ar' ? 'تعلم أساسيات التصميم' : 'Learn design basics', progress: 0 },
        { name: language === 'ar' ? 'إتقان برامج التصميم' : 'Master design software', progress: 0 },
        { name: language === 'ar' ? 'بناء محفظة أعمال' : 'Build a portfolio', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع نهائي' : 'Complete final project', progress: 0 },
      ],
      relatedCourses: [
        { id: 901, title: language === 'ar' ? 'مبادئ التصميم' : 'Design Principles' },
        { id: 902, title: language === 'ar' ? 'أدوبي فوتوشوب المتقدم' : 'Advanced Adobe Photoshop' },
      ]
    },
    {
      id: 106,
      title: language === 'ar' ? 'كلية الطب' : 'Medical School',
      skills: language === 'ar'
        ? ['علوم طبية', 'تشريح', 'فسيولوجيا', 'علم الأمراض']
        : ['Medical Sciences', 'Anatomy', 'Physiology', 'Pathology'],
      time: language === 'ar' ? '6-7 سنوات' : '6-7 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?medical',
      level: 'advanced',
      category: 'healthcare',
      description: language === 'ar'
        ? 'برنامج مكثف لتعليم الطب يشمل دراسات نظرية وتدريب سريري لتأهيل الأطباء.'
        : 'Intensive medical education program including theoretical studies and clinical training to qualify physicians.',
      milestones: [
        { name: language === 'ar' ? 'إكمال العلوم الطبية الأساسية' : 'Complete basic medical sciences', progress: 0 },
        { name: language === 'ar' ? 'إكمال العلوم السريرية' : 'Complete clinical sciences', progress: 0 },
        { name: language === 'ar' ? 'إكمال التدريب السريري' : 'Complete clinical rotations', progress: 0 },
        { name: language === 'ar' ? 'التخرج والامتحانات الترخيصية' : 'Graduate and licensing exams', progress: 0 },
      ],
      relatedCourses: [
        { id: 1001, title: language === 'ar' ? 'تشريح بشري' : 'Human Anatomy' },
        { id: 1002, title: language === 'ar' ? 'فسيولوجيا طبية' : 'Medical Physiology' },
      ]
    },
    {
      id: 107,
      title: language === 'ar' ? 'كلية الحقوق' : 'Law School',
      skills: language === 'ar'
        ? ['القانون المدني', 'القانون الجنائي', 'قانون الأعمال', 'المرافعة القانونية']
        : ['Civil Law', 'Criminal Law', 'Business Law', 'Legal Advocacy'],
      time: language === 'ar' ? '3-4 سنوات' : '3-4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?law',
      level: 'advanced',
      category: 'legal',
      description: language === 'ar'
        ? 'برنامج أكاديمي متخصص في الدراسات القانونية لتأهيل المحامين والعاملين في المجال القانوني.'
        : 'Specialized academic program in legal studies to qualify lawyers and legal professionals.',
      milestones: [
        { name: language === 'ar' ? 'دراسة أساسيات القانون' : 'Study law fundamentals', progress: 0 },
        { name: language === 'ar' ? 'دراسة فروع القانون المختلفة' : 'Study various branches of law', progress: 0 },
        { name: language === 'ar' ? 'المشاركة في المحاكمات الصورية' : 'Participate in mock trials', progress: 0 },
        { name: language === 'ar' ? 'التخرج واجتياز امتحان المحاماة' : 'Graduate and pass bar exam', progress: 0 },
      ],
      relatedCourses: [
        { id: 1101, title: language === 'ar' ? 'مقدمة في القانون' : 'Introduction to Law' },
        { id: 1102, title: language === 'ar' ? 'القانون الدستوري' : 'Constitutional Law' },
      ]
    },
    {
      id: 108,
      title: language === 'ar' ? 'بكالوريوس الزراعة' : 'Bachelor of Agriculture',
      skills: language === 'ar'
        ? ['علوم النبات', 'علوم التربة', 'إدارة المحاصيل', 'تكنولوجيا الزراعة']
        : ['Plant Sciences', 'Soil Sciences', 'Crop Management', 'Agricultural Technology'],
      time: language === 'ar' ? '4 سنوات' : '4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?agriculture',
      level: 'beginner',
      category: 'agricultural',
      description: language === 'ar'
        ? 'درجة علمية تركز على علوم الزراعة وتقنياتها وتطبيقاتها العملية.'
        : 'Academic degree focusing on agricultural sciences, techniques, and practical applications.',
      milestones: [
        { name: language === 'ar' ? 'دراسة علوم النبات والتربة' : 'Study plant and soil sciences', progress: 0 },
        { name: language === 'ar' ? 'تعلم تقنيات الزراعة' : 'Learn agricultural techniques', progress: 0 },
        { name: language === 'ar' ? 'التدريب الميداني' : 'Field training', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع التخرج' : 'Complete graduation project', progress: 0 },
      ],
      relatedCourses: [
        { id: 1201, title: language === 'ar' ? 'مقدمة في علوم الزراعة' : 'Introduction to Agricultural Sciences' },
        { id: 1202, title: language === 'ar' ? 'إدارة المحاصيل' : 'Crop Management' },
      ]
    },
    {
      id: 109,
      title: language === 'ar' ? 'بكالوريوس إدارة الأعمال' : 'Bachelor of Business Administration',
      skills: language === 'ar'
        ? ['إدارة', 'تسويق', 'محاسبة', 'مالية']
        : ['Management', 'Marketing', 'Accounting', 'Finance'],
      time: language === 'ar' ? '4 سنوات' : '4 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?business',
      level: 'beginner',
      category: 'business',
      description: language === 'ar'
        ? 'درجة علمية تركز على مختلف جوانب إدارة الأعمال والمهارات اللازمة للنجاح في عالم الأعمال.'
        : 'Academic degree focusing on various aspects of business administration and skills needed for success in the business world.',
      milestones: [
        { name: language === 'ar' ? 'دراسة أساسيات الإدارة' : 'Study management basics', progress: 0 },
        { name: language === 'ar' ? 'تعلم التسويق والمالية' : 'Learn marketing and finance', progress: 0 },
        { name: language === 'ar' ? 'دراسة إدارة الموارد البشرية' : 'Study human resource management', progress: 0 },
        { name: language === 'ar' ? 'إكمال مشروع تخرج عملي' : 'Complete practical graduation project', progress: 0 },
      ],
      relatedCourses: [
        { id: 1301, title: language === 'ar' ? 'مبادئ الإدارة' : 'Principles of Management' },
        { id: 1302, title: language === 'ar' ? 'أساسيات التسويق' : 'Marketing Fundamentals' },
      ]
    },
    {
      id: 110,
      title: language === 'ar' ? 'دورة تدريب المعلمين' : 'Teacher Training Course',
      skills: language === 'ar'
        ? ['طرق التدريس', 'علم النفس التربوي', 'تطوير المناهج', 'إدارة الصف']
        : ['Teaching Methods', 'Educational Psychology', 'Curriculum Development', 'Classroom Management'],
      time: language === 'ar' ? '1-2 سنة' : '1-2 years',
      imageUrl: 'https://source.unsplash.com/random/300x200?teaching',
      level: 'intermediate',
      category: 'educational',
      description: language === 'ar'
        ? 'برنامج تدريبي لتأهيل المعلمين وتزويدهم بالمهارات والمعرفة اللازمة للتدريس الفعال.'
        : 'Training program to qualify teachers and provide them with the skills and knowledge necessary for effective teaching.',
      milestones: [
        { name: language === 'ar' ? 'دراسة نظريات التعلم' : 'Study learning theories', progress: 0 },
        { name: language === 'ar' ? 'تعلم طرق التدريس' : 'Learn teaching methods', progress: 0 },
        { name: language === 'ar' ? 'التدريب العملي' : 'Practical training', progress: 0 },
        { name: language === 'ar' ? 'تقييم الكفاءة التدريسية' : 'Assess teaching competency', progress: 0 },
      ],
      relatedCourses: [
        { id: 1401, title: language === 'ar' ? 'طرق التدريس الفعالة' : 'Effective Teaching Methods' },
        { id: 1402, title: language === 'ar' ? 'علم النفس التربوي' : 'Educational Psychology' },
      ]
    }
  ];

  const filteredCareerPaths = careerPaths.filter(path => 
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredEducationPaths = educationPaths.filter(path => 
    path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    path.category.toLowerCase().includes(searchQuery.toLowerCase())
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
                  {language === 'ar' ? 'المجال' : 'Field'}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px] md:w-[400px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'تقني' : 'Technical'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'تحليلي' : 'Analytical'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'إبداعي' : 'Creative'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'قيادي' : 'Leadership'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'فني' : 'Artistic'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'زراعي' : 'Agricultural'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'لوجستي' : 'Logistics'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'رعاية صحية' : 'Healthcare'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'قانوني' : 'Legal'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'أعمال' : 'Business'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'تعليمي' : 'Educational'}
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          {language === 'ar' ? 'هندسي' : 'Engineering'}
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
    category?: string;
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
  
  const getCategoryBadge = () => {
    if (!path.category) return null;
    
    const categoryColors: Record<string, string> = {
      'technical': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
      'analytical': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
      'creative': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100',
      'interpersonal': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
      'leadership': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100',
      'research': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
      'organizational': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
      'artistic': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-100',
      'agricultural': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
      'logistics': 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100',
      'healthcare': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
      'legal': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
      'business': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-100',
      'educational': 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100',
      'engineering': 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100',
    };
    
    const categoryName = language === 'ar' ? getCategoryNameArabic(path.category) : path.category;
    const colorClass = categoryColors[path.category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    
    return (
      <span className={cn(
        "absolute top-2 left-2 px-2 py-1 text-xs rounded-full",
        colorClass
      )}>
        {categoryName}
      </span>
    );
  };
  
  const getCategoryNameArabic = (category: string): string => {
    const categoryNames: Record<string, string> = {
      'technical': 'تقني',
      'analytical': 'تحليلي',
      'creative': 'إبداعي',
      'interpersonal': 'تواصلي',
      'leadership': 'قيادي',
      'research': 'بحثي',
      'organizational': 'تنظيمي',
      'artistic': 'فني',
      'agricultural': 'زراعي',
      'logistics': 'لوجستي',
      'healthcare': 'رعاية صحية',
      'legal': 'قانوني',
      'business': 'أعمال',
      'educational': 'تعليمي',
      'engineering': 'هندسي',
    };
    
    return categoryNames[category] || category;
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
        {getCategoryBadge()}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-3 dark:text-white">{path.title}</h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center dark:text-white">
            <Award className="h-4 w-4 mr-2 text-skillora-blue dark:text-blue-400" />
            {content.skillsNeeded}
          </h4>
          <div className="flex flex-wrap gap-2">
            {path.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
            {path.skills.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                +{path.skills.length - 3}
              </span>
            )}
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
