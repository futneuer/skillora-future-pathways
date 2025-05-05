
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillCard from "@/components/SkillCard";
import BottomNavbar from "@/components/BottomNavbar";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageContent } from "@/data/languageContent";

const Skills = () => {
  const { language } = useLanguage();
  const content = getLanguageContent(language);
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const skills = [
    {
      title: language === 'ar' ? "التفكير النقدي" : "Critical Thinking",
      description: language === 'ar' 
        ? "القدرة على تحليل المعلومات وتقييمها بشكل موضوعي" 
        : "The ability to analyze and evaluate information objectively",
      usage: language === 'ar' 
        ? "الأبحاث، حل المشكلات، اتخاذ القرارات" 
        : "Research, problem-solving, decision-making"
    },
    {
      title: language === 'ar' ? "البرمجة الأساسية" : "Basic Programming",
      description: language === 'ar' 
        ? "فهم أساسيات كتابة التعليمات البرمجية وحل المشكلات" 
        : "Understanding the fundamentals of coding and problem-solving",
      usage: language === 'ar' 
        ? "تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي" 
        : "Software development, data analysis, artificial intelligence"
    },
    {
      title: language === 'ar' ? "الذكاء الاصطناعي" : "Artificial Intelligence",
      description: language === 'ar' 
        ? "فهم مبادئ وتطبيقات الذكاء الاصطناعي وتعلم الآلة" 
        : "Understanding principles and applications of AI and machine learning",
      usage: language === 'ar' 
        ? "التحليل التنبؤي، أتمتة العمليات، معالجة اللغة الطبيعية" 
        : "Predictive analytics, process automation, natural language processing"
    },
    {
      title: language === 'ar' ? "التواصل الفعال" : "Effective Communication",
      description: language === 'ar' 
        ? "القدرة على التعبير عن الأفكار بوضوح ومهارات الاستماع" 
        : "The ability to clearly express ideas and listening skills",
      usage: language === 'ar' 
        ? "العروض التقديمية، كتابة التقارير، إدارة الفريق" 
        : "Presentations, report writing, team management"
    },
    {
      title: language === 'ar' ? "الإبداع والابتكار" : "Creativity and Innovation",
      description: language === 'ar' 
        ? "القدرة على تطوير أفكار جديدة وحلول إبداعية" 
        : "The ability to develop new ideas and creative solutions",
      usage: language === 'ar' 
        ? "تصميم المنتجات، حل المشكلات، تطوير الاستراتيجيات" 
        : "Product design, problem solving, strategy development"
    }
  ];

  const categories = [
    { id: 'all', name: content.skillCategories.all },
    { id: 'technical', name: content.skillCategories.technical },
    { id: 'business', name: content.skillCategories.business },
    { id: 'personal', name: content.skillCategories.personal },
    { id: 'analytical', name: content.skillCategories.analytical }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      {/* Header with back button */}
      <Header />
      
      <div className="p-4 flex items-center">
        <Link to="/" className="text-gray-600 dark:text-gray-300">
          ← {content.home}
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center dark:text-white">{content.exploreSkills}</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </div>

      {/* Categories */}
      <div className="p-4 overflow-x-auto">
        <div className="flex space-x-2 space-x-reverse rtl:space-x-normal">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                category.id === activeCategory 
                  ? 'bg-skillora-blue text-white dark:bg-blue-600' 
                  : 'bg-white text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder={content.searchSkill}
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Skills List */}
      <div className="px-4 pb-4">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              usage={skill.usage}
            />
          ))}
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Skills;
