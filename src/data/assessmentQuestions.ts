
import { Question } from "@/types/assessment";

export const getAssessmentQuestions = (language: 'ar' | 'en'): Question[] => {
  if (language === 'ar') {
    return [
      {
        id: 1,
        text: "أفضل العمل مع الحاسوب والبرمجيات أكثر من العمل مع الناس",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 2,
        text: "أستمتع بحل المشكلات المعقدة والألغاز",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 3,
        text: "أجد سهولة في التواصل وبناء علاقات مع الآخرين",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 4,
        text: "أهتم بالفنون والتصميم والإبداع",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 5,
        text: "أستمتع بقراءة الكتب العلمية والمقالات البحثية",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 6,
        text: "أفضل التعلم من خلال التجربة العملية بدلاً من القراءة عن الموضوع",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 7,
        text: "أستمتع بالعمل ضمن فريق أكثر من العمل بشكل فردي",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 8,
        text: "أهتم بالتفاصيل الصغيرة في كل ما أقوم به",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 9,
        text: "أفضل اتباع خطوات محددة ومنهجية واضحة في عملي",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 10,
        text: "أهتم بالمشاريع التي تتطلب ابتكار حلول جديدة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 11,
        text: "أستمتع بتحليل البيانات والأرقام",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 12,
        text: "أفضل مساعدة الآخرين وتقديم الدعم لهم",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 13,
        text: "أفضل العمل في بيئة منظمة ومخططة بدقة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 14,
        text: "أستمتع بتعلم لغات برمجة جديدة أو تقنيات حديثة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 15,
        text: "أهتم بالبحث العلمي والتجريب",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      }
    ];
  } else {
    return [
      {
        id: 1,
        text: "I prefer working with computers and software rather than working with people",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 2,
        text: "I enjoy solving complex problems and puzzles",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 3,
        text: "I find it easy to communicate and build relationships with others",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 4,
        text: "I am interested in arts, design, and creativity",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 5,
        text: "I enjoy reading scientific books and research articles",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 6,
        text: "I prefer learning through practical experience rather than reading about a subject",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 7,
        text: "I enjoy working in a team more than working individually",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 8,
        text: "I pay attention to small details in everything I do",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 9,
        text: "I prefer following specific steps and clear methodologies in my work",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 10,
        text: "I am interested in projects that require developing new solutions",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 11,
        text: "I enjoy analyzing data and numbers",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 12,
        text: "I prefer helping others and providing support",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 13,
        text: "I prefer working in an organized and carefully planned environment",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 14,
        text: "I enjoy learning new programming languages or modern technologies",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 15,
        text: "I am interested in scientific research and experimentation",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      }
    ];
  }
};
