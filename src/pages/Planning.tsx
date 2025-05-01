
import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import BottomNavbar from "@/components/BottomNavbar";

const Planning = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with back button */}
      <header className="bg-white p-4 shadow-sm flex items-center">
        <Link to="/" className="text-gray-600">
          ← الرئيسية
        </Link>
        <h1 className="flex-1 text-xl font-bold text-center">خطط لمستقبلك</h1>
        <div className="w-8"></div> {/* Empty div for layout balance */}
      </header>

      {/* Career Planning Content */}
      <div className="p-5">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-skillora-blue">خطة المسار المهني</h2>
          <p className="text-gray-700 mb-6">
            قم ببناء خطة مستقبلية تربط بين مهاراتك وأهدافك المهنية، مع خارطة طريق واضحة.
          </p>
          
          {/* Timeline Visualization */}
          <div className="relative py-6">
            <div className="absolute left-1/2 h-full w-0.5 bg-skillora-blue transform -translate-x-1/2"></div>
            
            {/* Current State */}
            <div className="relative mb-8">
              <div className="flex items-center mb-2">
                <div className="bg-white border-2 border-skillora-blue rounded-full w-6 h-6 absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="bg-skillora-lightblue rounded-lg p-4 mx-4">
                <h3 className="font-bold text-skillora-blue">الوضع الحالي</h3>
                <p className="text-gray-700 text-sm">مهاراتك ومعرفتك الحالية</p>
              </div>
            </div>
            
            {/* Required Skills */}
            <div className="relative mb-8">
              <div className="flex items-center mb-2">
                <div className="bg-white border-2 border-skillora-blue rounded-full w-6 h-6 absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="bg-skillora-lightblue rounded-lg p-4 mx-4">
                <h3 className="font-bold text-skillora-blue">المهارات المطلوبة</h3>
                <p className="text-gray-700 text-sm">المهارات التي تحتاج لتطويرها</p>
              </div>
            </div>
            
            {/* Career Goals */}
            <div className="relative">
              <div className="flex items-center mb-2">
                <div className="bg-white border-2 border-skillora-blue rounded-full w-6 h-6 absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="bg-skillora-lightblue rounded-lg p-4 mx-4">
                <h3 className="font-bold text-skillora-blue">الأهداف المهنية</h3>
                <p className="text-gray-700 text-sm">المسار الوظيفي المستقبلي</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <ActionButton 
            text="حدد هدفك الأول" 
            to="/goal-setting" 
            variant="primary"
          />
          <ActionButton 
            text="ابدأ خطتك" 
            to="/start-plan" 
            variant="accent"
          />
        </div>
        
        {/* Info Card */}
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="font-bold mb-2">لماذا التخطيط المهني مهم؟</h3>
          <p className="text-sm text-gray-700">
            يساعدك التخطيط المهني على تحديد أهدافك بوضوح وتطوير استراتيجية للوصول إليها. مع تغير سوق العمل بسرعة، يصبح التخطيط الاستباقي ضروريًا للنجاح المستدام.
          </p>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Planning;
