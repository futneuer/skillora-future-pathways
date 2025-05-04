
import { Question } from "@/types/assessment";

export const getAssessmentQuestions = (language: 'ar' | 'en'): Question[] => {
  if (language === 'ar') {
    return [
      // Technical & STEM questions
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
      // Communication & humanities questions
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
      // Creative & artistic questions
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
      // Scientific & research questions
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
      // Practical vs theoretical learning
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
      // Team vs individual work
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
      // Attention to detail
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
      // Structure vs creative freedom
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
      // Innovation
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
      // Data and analytics
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
      // Service orientation
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
      // Organization
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
      // Technology interest
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
      // Research orientation
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
      },
      // NEW QUESTIONS - Arts & creative fields
      {
        id: 16,
        text: "أستمتع بالتعبير عن نفسي من خلال الرسم أو وسائل فنية أخرى",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 17,
        text: "أهتم بالتصميم الجمالي للأشياء من حولي",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Agriculture & environmental sciences
      {
        id: 18,
        text: "أستمتع بالعمل في الهواء الطلق وفي الطبيعة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 19,
        text: "أهتم بزراعة النباتات والحفاظ على البيئة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Logistics & Supply Chain Management
      {
        id: 20,
        text: "أستمتع بتنظيم الموارد وتحسين العمليات",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 21,
        text: "أهتم بتخطيط المسارات والتوزيع الفعّال",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Healthcare & Medicine
      {
        id: 22,
        text: "أهتم بالصحة ومساعدة المرضى",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 23,
        text: "أستمتع بدراسة علوم الطب والجسم البشري",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Law & Policy
      {
        id: 24,
        text: "أهتم بالقوانين والأنظمة والعدالة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 25,
        text: "أستمتع بالمناقشات وتقديم الحجج المقنعة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Business & Management
      {
        id: 26,
        text: "أستمتع بتوجيه الآخرين واتخاذ القرارات القيادية",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 27,
        text: "أهتم باستراتيجيات الأعمال والتسويق",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Education & Teaching
      {
        id: 28,
        text: "أستمتع بتعليم الآخرين وشرح المفاهيم",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      {
        id: 29,
        text: "أهتم بتطوير طرق تعليمية فعّالة",
        options: [
          { id: "a", text: "موافق بشدة" },
          { id: "b", text: "موافق" },
          { id: "c", text: "محايد" },
          { id: "d", text: "غير موافق" },
          { id: "e", text: "غير موافق بشدة" },
        ],
      },
      // Engineering
      {
        id: 30,
        text: "أستمتع بتصميم وبناء الأشياء",
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
      // Technical & STEM questions
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
      // Communication & humanities questions
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
      // Creative & artistic questions
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
      // Scientific & research questions
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
      // Practical vs theoretical learning
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
      // Team vs individual work
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
      // Attention to detail
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
      // Structure vs creative freedom
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
      // Innovation
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
      // Data and analytics
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
      // Service orientation
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
      // Organization
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
      // Technology interest
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
      // Research orientation
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
      },
      // NEW QUESTIONS - Arts & creative fields
      {
        id: 16,
        text: "I enjoy expressing myself through drawing or other artistic media",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 17,
        text: "I care about the aesthetic design of things around me",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Agriculture & environmental sciences
      {
        id: 18,
        text: "I enjoy working outdoors and in nature",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 19,
        text: "I am interested in growing plants and preserving the environment",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Logistics & Supply Chain Management
      {
        id: 20,
        text: "I enjoy organizing resources and optimizing processes",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 21,
        text: "I am interested in planning routes and efficient distribution",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Healthcare & Medicine
      {
        id: 22,
        text: "I am interested in healthcare and helping patients",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 23,
        text: "I enjoy studying medical sciences and the human body",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Law & Policy
      {
        id: 24,
        text: "I am interested in laws, regulations, and justice",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 25,
        text: "I enjoy debates and presenting persuasive arguments",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Business & Management
      {
        id: 26,
        text: "I enjoy directing others and making leadership decisions",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 27,
        text: "I am interested in business strategies and marketing",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Education & Teaching
      {
        id: 28,
        text: "I enjoy teaching others and explaining concepts",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      {
        id: 29,
        text: "I am interested in developing effective teaching methods",
        options: [
          { id: "a", text: "Strongly Agree" },
          { id: "b", text: "Agree" },
          { id: "c", text: "Neutral" },
          { id: "d", text: "Disagree" },
          { id: "e", text: "Strongly Disagree" },
        ],
      },
      // Engineering
      {
        id: 30,
        text: "I enjoy designing and building things",
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
