
import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, LineChart, Brain } from "lucide-react";
import BottomNavbar from "@/components/BottomNavbar";
import ActionButton from "@/components/ActionButton";
import SkillCard from "@/components/SkillCard";

const Index = () => {
  const navigate = useNavigate();
  
  const featuredSkills = [
    {
      title: "التفكير النقدي",
      description: "القدرة على تحليل المعلومات وتقييمها بشكل موضوعي",
      usage: "الأبحاث، حل المشكلات، اتخاذ القرارات"
    },
    {
      title: "البرمجة الأساسية",
      description: "فهم أساسيات كتابة التعليمات البرمجية وحل المشكلات",
      usage: "تطوير البرمجيات، تحليل البيانات، الذكاء الاصطناعي"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-skillora-blue">Skillora</h1>
      </header>

      {/* Hero Section */}
      <section className="px-5 py-8 bg-gradient-to-br from-skillora-blue to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">ارسم مستقبلك بمهارات اليوم والغد!</h2>
        <p className="text-center opacity-90 mb-6">اكتشف المهارات المطلوبة في سوق العمل المستقبلي وطوّر خطة مسارك المهني</p>
      </section>

      {/* Main Actions Section */}
      <section className="px-5 py-8">
        <div className="space-y-4">
          <ActionButton 
            text="ابدأ التقييم" 
            to="/assessment" 
            variant="primary"
            icon={<Brain size={24} />}
          />
          <ActionButton 
            text="استكشاف المهارات" 
            to="/skills" 
            variant="accent"
            icon={<BookOpen size={24} />}
          />
          <ActionButton 
            text="خطط لمستقبلك" 
            to="/planning" 
            variant="success"
            icon={<LineChart size={24} />}
          />
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="px-5 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">المهارات المميزة</h2>
          <button 
            onClick={() => navigate('/skills')}
            className="text-skillora-blue font-medium text-sm"
          >
            عرض الكل
          </button>
        </div>
        
        <div className="space-y-4">
          {featuredSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              usage={skill.usage}
            />
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
};

export default Index;
