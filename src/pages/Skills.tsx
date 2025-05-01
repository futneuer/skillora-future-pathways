
import React from "react";
import { Link } from "react-router-dom";
import SkillCard from "@/components/SkillCard";
import BottomNavbar from "@/components/BottomNavbar";

const Skills = () => {
  const skills = [
    {
      title: "التفكير النقدي",
      description: "القدرة على تحليل المعلومات وتقييمها بشكل موضوعي",
      usage: "الأبحاث، حل المشكلات، اتخاذ القرارات"
    },
    {
      title: "البرمجة الأساسية",
      description: "فهم أساسيات كتابة التعليمات البرمجية وحل المشكلات",
      usage: "تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي"
    },
    {
      title: "الذكاء الاصطناعي",
      description: "فهم مبادئ وتطبيقات الذكاء الاصطناعي وتعلم الآلة",
      usage: "التحليل التنبؤي، أتمتة العمليات، معالجة اللغة الطبيعية"
    },
    {
      title: "التواصل الفعال",
      description: "القدرة على التعبير عن الأفكار بوضوح ومهارات الاستماع",
      usage: "العروض التقديمية، كتابة التقارير، إدارة الفريق"
    },
    {
      title: "الإبداع والابتكار",
      description: "القدرة على تطوير أفكار جديدة وحلول إبداعية",
      usage: "تصميم المنتجات، حل المشكلات، تطوير الاستراتيجيات"
    }
  ];

  const categories = [
    "الكل",
    "تقنية",
    "أعمال",
    "شخصية",
    "تحليلية"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with back button */}
      <header className="bg-white p-4 shadow-sm flex items-center">
        <Link to="/" className="text-gray-600">
          ← الرئيسية
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center">استكشاف المهارات</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </header>

      {/* Categories */}
      <div className="p-4 overflow-x-auto">
        <div className="flex space-x-2 space-x-reverse rtl:space-x-normal">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                index === 0 
                  ? 'bg-skillora-blue text-white' 
                  : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن مهارة..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg"
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
