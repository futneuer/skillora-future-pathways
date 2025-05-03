
import { Question } from "@/types/assessment";

export const getAssessmentQuestions = (language: 'ar' | 'en'): Question[] => [
  {
    id: 1,
    text: language === 'ar' 
      ? "عند مواجهة مشكلة معقدة، أفضل أن:"
      : "When facing a complex problem, I prefer to:",
    options: [
      { id: "a1", text: language === 'ar' ? "أحللها إلى أجزاء صغيرة وأعالج كل جزء على حدة" : "Break it down into smaller parts and address each one separately" },
      { id: "a2", text: language === 'ar' ? "أبحث عن حلول جاهزة تم تطبيقها في مشاكل مشابهة" : "Look for ready-made solutions applied to similar problems" },
      { id: "a3", text: language === 'ar' ? "أعمل مع فريق لتبادل الأفكار والوصول إلى حل" : "Work with a team to exchange ideas and reach a solution" },
      { id: "a4", text: language === 'ar' ? "أفكر بشكل إبداعي لإيجاد حلول غير تقليدية" : "Think creatively to find unconventional solutions" }
    ]
  },
  {
    id: 2,
    text: language === 'ar'
      ? "أشعر بالراحة أكثر عند العمل في:"
      : "I feel more comfortable working in:",
    options: [
      { id: "b1", text: language === 'ar' ? "بيئة منظمة وثابتة مع تعليمات واضحة" : "An organized, stable environment with clear instructions" },
      { id: "b2", text: language === 'ar' ? "بيئة مرنة تتيح لي التجربة والاستكشاف" : "A flexible environment that allows experimentation and exploration" },
      { id: "b3", text: language === 'ar' ? "بيئة تعاونية أعمل فيها ضمن فريق" : "A collaborative environment where I work within a team" },
      { id: "b4", text: language === 'ar' ? "بيئة تنافسية تدفعني لتقديم أفضل ما لدي" : "A competitive environment that pushes me to deliver my best" }
    ]
  },
  {
    id: 3,
    text: language === 'ar'
      ? "عندما أتعلم مهارة جديدة، أفضل:"
      : "When learning a new skill, I prefer:",
    options: [
      { id: "c1", text: language === 'ar' ? "التعلم من خلال القراءة والاطلاع النظري" : "Learning through reading and theoretical review" },
      { id: "c2", text: language === 'ar' ? "التعلم من خلال التجربة العملية والممارسة" : "Learning through practical experience and practice" },
      { id: "c3", text: language === 'ar' ? "التعلم من خلال مشاهدة شخص خبير" : "Learning by watching an expert" },
      { id: "c4", text: language === 'ar' ? "التعلم من خلال حل مشاكل واقعية" : "Learning by solving real problems" }
    ]
  },
  {
    id: 4,
    text: language === 'ar'
      ? "أثناء اتخاذ القرارات، غالباً ما:"
      : "When making decisions, I often:",
    options: [
      { id: "d1", text: language === 'ar' ? "أعتمد على البيانات والحقائق" : "Rely on data and facts" },
      { id: "d2", text: language === 'ar' ? "أثق في حدسي ومشاعري" : "Trust my intuition and feelings" },
      { id: "d3", text: language === 'ar' ? "أستشير الآخرين وأسعى للتوافق" : "Consult others and seek consensus" },
      { id: "d4", text: language === 'ar' ? "أقيّم جميع البدائل بعناية قبل الاختيار" : "Carefully evaluate all alternatives before choosing" }
    ]
  },
  {
    id: 5,
    text: language === 'ar'
      ? "في المشاريع الجماعية، أميل إلى أن أكون:"
      : "In group projects, I tend to be:",
    options: [
      { id: "e1", text: language === 'ar' ? "قائداً ومنظماً للعمل" : "A leader and organizer" },
      { id: "e2", text: language === 'ar' ? "مبتكراً للأفكار الجديدة" : "A generator of new ideas" },
      { id: "e3", text: language === 'ar' ? "داعماً ومشجعاً للفريق" : "Supportive and encouraging to the team" },
      { id: "e4", text: language === 'ar' ? "محللاً ومقيماً للخيارات" : "An analyst and evaluator of options" }
    ]
  },
  {
    id: 6,
    text: language === 'ar'
      ? "أي من المهارات التقنية التالية تهمك أكثر؟"
      : "Which of the following technical skills interests you most?",
    options: [
      { id: "f1", text: language === 'ar' ? "تطوير البرمجيات وتطبيقات الويب" : "Software and web application development" },
      { id: "f2", text: language === 'ar' ? "تحليل البيانات والإحصاء" : "Data analysis and statistics" },
      { id: "f3", text: language === 'ar' ? "تصميم واجهات المستخدم" : "User interface design" },
      { id: "f4", text: language === 'ar' ? "أمن المعلومات والشبكات" : "Information and network security" }
    ]
  },
  {
    id: 7,
    text: language === 'ar'
      ? "في وقت فراغك، تفضل:"
      : "In your free time, you prefer:",
    options: [
      { id: "g1", text: language === 'ar' ? "قراءة كتاب أو متابعة دورة تعليمية" : "Reading a book or taking an educational course" },
      { id: "g2", text: language === 'ar' ? "العمل على مشروع إبداعي أو هواية" : "Working on a creative project or hobby" },
      { id: "g3", text: language === 'ar' ? "قضاء الوقت مع الأصدقاء أو العائلة" : "Spending time with friends or family" },
      { id: "g4", text: language === 'ar' ? "ممارسة الرياضة أو النشاط البدني" : "Exercising or physical activity" }
    ]
  },
  {
    id: 8,
    text: language === 'ar'
      ? "أي من المجالات التالية يثير اهتمامك أكثر؟"
      : "Which of the following fields interests you most?",
    options: [
      { id: "h1", text: language === 'ar' ? "التكنولوجيا والابتكار" : "Technology and innovation" },
      { id: "h2", text: language === 'ar' ? "الأعمال والإدارة" : "Business and management" },
      { id: "h3", text: language === 'ar' ? "الصحة والرعاية" : "Health and care" },
      { id: "h4", text: language === 'ar' ? "الفنون والتصميم" : "Arts and design" }
    ]
  },
  {
    id: 9,
    text: language === 'ar'
      ? "عند تعلم تقنية جديدة، أنا أميل إلى:"
      : "When learning a new technology, I tend to:",
    options: [
      { id: "i1", text: language === 'ar' ? "فهم الأساسيات النظرية أولاً" : "Understand theoretical foundations first" },
      { id: "i2", text: language === 'ar' ? "التطبيق العملي المباشر" : "Jump directly into practical application" },
      { id: "i3", text: language === 'ar' ? "مشاهدة دروس فيديو تعليمية" : "Watch video tutorials" },
      { id: "i4", text: language === 'ar' ? "النقاش مع خبراء في المجال" : "Discuss with experts in the field" }
    ]
  },
  {
    id: 10,
    text: language === 'ar'
      ? "في العمل الجماعي، دوري غالبا هو:"
      : "In teamwork, my role is often:",
    options: [
      { id: "j1", text: language === 'ar' ? "قائد يحدد الاتجاه" : "Leader who sets direction" },
      { id: "j2", text: language === 'ar' ? "مبدع يقدم أفكارا جديدة" : "Creative who brings new ideas" },
      { id: "j3", text: language === 'ar' ? "منظم يحافظ على سير العمل" : "Organizer who keeps things on track" },
      { id: "j4", text: language === 'ar' ? "وسيط يساعد في حل النزاعات" : "Mediator who helps resolve conflicts" }
    ]
  },
  {
    id: 11,
    text: language === 'ar'
      ? "عند مواجهة مهمة صعبة، أنا غالبا:"
      : "When facing a difficult task, I usually:",
    options: [
      { id: "k1", text: language === 'ar' ? "أبحث عن موارد ومراجع للمساعدة" : "Look for resources and references to help" },
      { id: "k2", text: language === 'ar' ? "أستعين بخبرة زملائي" : "Draw on colleagues' expertise" },
      { id: "k3", text: language === 'ar' ? "أعتمد على خبرتي السابقة" : "Rely on my previous experience" },
      { id: "k4", text: language === 'ar' ? "أجرب حلولا مبتكرة" : "Try innovative solutions" }
    ]
  },
  {
    id: 12,
    text: language === 'ar'
      ? "أفضل نوع من التغذية الراجعة هو:"
      : "My preferred type of feedback is:",
    options: [
      { id: "l1", text: language === 'ar' ? "مباشر وصريح" : "Direct and straightforward" },
      { id: "l2", text: language === 'ar' ? "إيجابي ومشجع" : "Positive and encouraging" },
      { id: "l3", text: language === 'ar' ? "تفصيلي مع اقتراحات للتحسين" : "Detailed with suggestions for improvement" },
      { id: "l4", text: language === 'ar' ? "من خلال مناقشة الأفكار" : "Through discussion of ideas" }
    ]
  },
  {
    id: 13,
    text: language === 'ar'
      ? "في حل المشكلات التقنية، أنا أميل إلى:"
      : "In solving technical problems, I tend to:",
    options: [
      { id: "m1", text: language === 'ar' ? "البحث عن الأنماط والأسباب الجذرية" : "Look for patterns and root causes" },
      { id: "m2", text: language === 'ar' ? "تجربة حلول مختلفة بسرعة" : "Quickly try different solutions" },
      { id: "m3", text: language === 'ar' ? "اتباع منهجية منظمة" : "Follow a systematic methodology" },
      { id: "m4", text: language === 'ar' ? "البحث عن حلول غير تقليدية" : "Search for unconventional solutions" }
    ]
  },
  {
    id: 14,
    text: language === 'ar'
      ? "أنا أجد سعادة أكبر في:"
      : "I find greater satisfaction in:",
    options: [
      { id: "n1", text: language === 'ar' ? "إنجاز المهام وتحقيق الأهداف" : "Completing tasks and achieving goals" },
      { id: "n2", text: language === 'ar' ? "تطوير علاقات وشبكات مهنية" : "Developing professional relationships and networks" },
      { id: "n3", text: language === 'ar' ? "تعلم مهارات جديدة" : "Learning new skills" },
      { id: "n4", text: language === 'ar' ? "حل مشكلات معقدة" : "Solving complex problems" }
    ]
  },
  {
    id: 15,
    text: language === 'ar'
      ? "أواجه الضغط والتوتر عن طريق:"
      : "I handle pressure and stress by:",
    options: [
      { id: "o1", text: language === 'ar' ? "التنظيم والتخطيط المسبق" : "Organization and advance planning" },
      { id: "o2", text: language === 'ar' ? "التحدث مع الآخرين وطلب الدعم" : "Talking to others and seeking support" },
      { id: "o3", text: language === 'ar' ? "أخذ فترات راحة قصيرة" : "Taking short breaks" },
      { id: "o4", text: language === 'ar' ? "التركيز على حل المشكلة مباشرة" : "Focusing directly on solving the problem" }
    ]
  },
  {
    id: 16,
    text: language === 'ar'
      ? "عند تقديم عرض تقديمي، أنا أميل إلى:"
      : "When giving a presentation, I tend to:",
    options: [
      { id: "p1", text: language === 'ar' ? "التركيز على الحقائق والبيانات" : "Focus on facts and data" },
      { id: "p2", text: language === 'ar' ? "سرد قصص مؤثرة" : "Tell impactful stories" },
      { id: "p3", text: language === 'ar' ? "استخدام الرسوم البيانية والمرئيات" : "Use charts and visuals" },
      { id: "p4", text: language === 'ar' ? "التفاعل مع الجمهور" : "Interact with the audience" }
    ]
  },
  {
    id: 17,
    text: language === 'ar'
      ? "أي مجال من هذه المجالات يثير اهتمامك أكثر؟"
      : "Which of these fields interests you most?",
    options: [
      { id: "q1", text: language === 'ar' ? "الذكاء الاصطناعي وتعلم الآلة" : "Artificial Intelligence and Machine Learning" },
      { id: "q2", text: language === 'ar' ? "تطوير الأعمال والتسويق" : "Business Development and Marketing" },
      { id: "q3", text: language === 'ar' ? "تجربة المستخدم والتصميم" : "User Experience and Design" },
      { id: "q4", text: language === 'ar' ? "التعليم والتدريب" : "Education and Training" }
    ]
  },
  {
    id: 18,
    text: language === 'ar'
      ? "عندما أبدأ مشروعاً جديداً، أول شيء أفكر فيه هو:"
      : "When starting a new project, the first thing I think about is:",
    options: [
      { id: "r1", text: language === 'ar' ? "خطة العمل والجدول الزمني" : "Work plan and timeline" },
      { id: "r2", text: language === 'ar' ? "الفكرة الإبداعية والرؤية" : "Creative concept and vision" },
      { id: "r3", text: language === 'ar' ? "تكوين الفريق المناسب" : "Assembling the right team" },
      { id: "r4", text: language === 'ar' ? "المخاطر المحتملة وكيفية تجنبها" : "Potential risks and how to avoid them" }
    ]
  },
  {
    id: 19,
    text: language === 'ar'
      ? "أي نوع من بيئات العمل تفضل؟"
      : "Which type of work environment do you prefer?",
    options: [
      { id: "s1", text: language === 'ar' ? "مكتب تقليدي منظم" : "Traditional organized office" },
      { id: "s2", text: language === 'ar' ? "مساحة عمل مشتركة مرنة" : "Flexible coworking space" },
      { id: "s3", text: language === 'ar' ? "العمل عن بعد من المنزل" : "Remote work from home" },
      { id: "s4", text: language === 'ar' ? "بيئة عمل مختلطة" : "Hybrid work environment" }
    ]
  },
  {
    id: 20,
    text: language === 'ar'
      ? "في مجال الابتكار، أنا أفضل:"
      : "In the field of innovation, I prefer:",
    options: [
      { id: "t1", text: language === 'ar' ? "تحسين المنتجات والخدمات الحالية" : "Improving existing products and services" },
      { id: "t2", text: language === 'ar' ? "ابتكار حلول جذرية جديدة" : "Inventing radical new solutions" },
      { id: "t3", text: language === 'ar' ? "دمج الأفكار من مجالات مختلفة" : "Combining ideas from different fields" },
      { id: "t4", text: language === 'ar' ? "تطبيق التكنولوجيا لحل مشكلات اجتماعية" : "Applying technology to solve social problems" }
    ]
  },
  {
    id: 21,
    text: language === 'ar'
      ? "عند قراءة محتوى جديد، أفضل أن يكون:"
      : "When consuming new content, I prefer it to be:",
    options: [
      { id: "u1", text: language === 'ar' ? "نصوص مكتوبة مفصلة" : "Detailed written text" },
      { id: "u2", text: language === 'ar' ? "فيديوهات تعليمية" : "Video tutorials" },
      { id: "u3", text: language === 'ar' ? "رسوم بيانية وإنفوجرافيك" : "Charts and infographics" },
      { id: "u4", text: language === 'ar' ? "محتوى تفاعلي" : "Interactive content" }
    ]
  },
  {
    id: 22,
    text: language === 'ar'
      ? "ما هي المهارات التي تود تطويرها أكثر؟"
      : "Which skills would you like to develop more?",
    options: [
      { id: "v1", text: language === 'ar' ? "المهارات التقنية والرقمية" : "Technical and digital skills" },
      { id: "v2", text: language === 'ar' ? "مهارات التواصل والقيادة" : "Communication and leadership skills" },
      { id: "v3", text: language === 'ar' ? "التفكير النقدي وحل المشكلات" : "Critical thinking and problem-solving" },
      { id: "v4", text: language === 'ar' ? "الإبداع والابتكار" : "Creativity and innovation" }
    ]
  },
  {
    id: 23,
    text: language === 'ar'
      ? "كيف تفضل التفاعل مع زملائك؟"
      : "How do you prefer to interact with colleagues?",
    options: [
      { id: "w1", text: language === 'ar' ? "اجتماعات رسمية منظمة" : "Formal structured meetings" },
      { id: "w2", text: language === 'ar' ? "نقاشات غير رسمية" : "Informal discussions" },
      { id: "w3", text: language === 'ar' ? "منصات التواصل الرقمية" : "Digital communication platforms" },
      { id: "w4", text: language === 'ar' ? "مزيج من كل ما سبق" : "A mix of all the above" }
    ]
  },
  {
    id: 24,
    text: language === 'ar'
      ? "أي نوع من التحديات يجذبك أكثر؟"
      : "What type of challenges attracts you more?",
    options: [
      { id: "x1", text: language === 'ar' ? "تحديات تقنية معقدة" : "Complex technical challenges" },
      { id: "x2", text: language === 'ar' ? "تحديات إدارية وتنظيمية" : "Administrative and organizational challenges" },
      { id: "x3", text: language === 'ar' ? "تحديات إبداعية وتصميمية" : "Creative and design challenges" },
      { id: "x4", text: language === 'ar' ? "تحديات اجتماعية وإنسانية" : "Social and humanitarian challenges" }
    ]
  },
  {
    id: 25,
    text: language === 'ar'
      ? "عند العمل على مشروع، ما الذي يحفزك أكثر؟"
      : "When working on a project, what motivates you the most?",
    options: [
      { id: "y1", text: language === 'ar' ? "الاعتراف بجهودك ومساهماتك" : "Recognition of your efforts and contributions" },
      { id: "y2", text: language === 'ar' ? "تحقيق نتائج ملموسة" : "Achieving tangible results" },
      { id: "y3", text: language === 'ar' ? "تعلم مهارات جديدة" : "Learning new skills" },
      { id: "y4", text: language === 'ar' ? "العمل ضمن فريق متناغم" : "Working within a harmonious team" }
    ]
  },
  {
    id: 26,
    text: language === 'ar'
      ? "كيف تتعامل مع التغيير المفاجئ في خطط العمل؟"
      : "How do you handle sudden changes in work plans?",
    options: [
      { id: "z1", text: language === 'ar' ? "أتكيف بسرعة وأعيد التخطيط" : "Adapt quickly and replan" },
      { id: "z2", text: language === 'ar' ? "أحاول فهم أسباب التغيير أولاً" : "Try to understand the reasons for change first" },
      { id: "z3", text: language === 'ar' ? "أشعر بالإحباط لكنني أتقبله" : "Feel frustrated but accept it" },
      { id: "z4", text: language === 'ar' ? "أقترح بدائل وحلول" : "Suggest alternatives and solutions" }
    ]
  },
  {
    id: 27,
    text: language === 'ar'
      ? "ما نوع المشاريع التي تستمتع بها أكثر؟"
      : "What type of projects do you enjoy the most?",
    options: [
      { id: "aa1", text: language === 'ar' ? "مشاريع تتطلب حلول تقنية مبتكرة" : "Projects requiring innovative technical solutions" },
      { id: "aa2", text: language === 'ar' ? "مشاريع تركز على تحسين تجربة المستخدم" : "Projects focusing on improving user experience" },
      { id: "aa3", text: language === 'ar' ? "مشاريع تساعد في حل مشكلات اجتماعية" : "Projects that help solve social problems" },
      { id: "aa4", text: language === 'ar' ? "مشاريع تحقق عائد استثماري ملموس" : "Projects that achieve tangible ROI" }
    ]
  },
  {
    id: 28,
    text: language === 'ar'
      ? "كيف تتعلم مهارة جديدة بشكل أفضل؟"
      : "How do you best learn a new skill?",
    options: [
      { id: "bb1", text: language === 'ar' ? "من خلال دورات تدريبية منظمة" : "Through structured training courses" },
      { id: "bb2", text: language === 'ar' ? "بالتطبيق العملي المباشر" : "By direct practical application" },
      { id: "bb3", text: language === 'ar' ? "من خلال مراقبة الخبراء" : "By observing experts" },
      { id: "bb4", text: language === 'ar' ? "من خلال القراءة والبحث الذاتي" : "Through reading and self-research" }
    ]
  },
  {
    id: 29,
    text: language === 'ar'
      ? "ما هي قيمة العمل الأكثر أهمية بالنسبة لك؟"
      : "What work value is most important to you?",
    options: [
      { id: "cc1", text: language === 'ar' ? "الasticallyالية وحرية اتخاذ القرار" : "Autonomy and freedom of decision-making" },
      { id: "cc2", text: language === 'ar' ? "الإبداع والابتكار" : "Creativity and innovation" },
      { id: "cc3", text: language === 'ar' ? "الأمان الوظيفي والاستقرار" : "Job security and stability" },
      { id: "cc4", text: language === 'ar' ? "التأثير الإيجابي على المجتمع" : "Positive impact on society" }
    ]
  },
  {
    id: 30,
    text: language === 'ar'
      ? "عند مواجهة تحدي كبير، كيف تستجيب عادة؟"
      : "When facing a major challenge, how do you typically respond?",
    options: [
      { id: "dd1", text: language === 'ar' ? "أضع خطة منهجية للتعامل معه" : "Create a systematic plan to deal with it" },
      { id: "dd2", text: language === 'ar' ? "أبحث عن مساعدة ودعم من الآخرين" : "Seek help and support from others" },
      { id: "dd3", text: language === 'ar' ? "أستخدم خبراتي السابقة في مواقف مشابهة" : "Use my previous experiences in similar situations" },
      { id: "dd4", text: language === 'ar' ? "أبتكر حلولاً غير تقليدية" : "Create unconventional solutions" }
    ]
  },
  {
    id: 31,
    text: language === 'ar'
      ? "في العمل الجماعي، أنا أقدر زملائي الذين:"
      : "In teamwork, I value colleagues who:",
    options: [
      { id: "ee1", text: language === 'ar' ? "يقدمون أفكاراً مبتكرة" : "Offer innovative ideas" },
      { id: "ee2", text: language === 'ar' ? "يلتزمون بالمواعيد ويوفون بوعودهم" : "Meet deadlines and keep promises" },
      { id: "ee3", text: language === 'ar' ? "يساعدون الآخرين ويقدمون الدعم" : "Help others and provide support" },
      { id: "ee4", text: language === 'ar' ? "يتكيفون مع المتغيرات بمرونة" : "Adapt to changes flexibly" }
    ]
  },
  {
    id: 32,
    text: language === 'ar'
      ? "ما الذي يميزك عن الآخرين في بيئة العمل؟"
      : "What sets you apart from others in the work environment?",
    options: [
      { id: "ff1", text: language === 'ar' ? "الاهتمام بالتفاصيل والدقة" : "Attention to detail and accuracy" },
      { id: "ff2", text: language === 'ar' ? "المهارات القيادية والتنظيمية" : "Leadership and organizational skills" },
      { id: "ff3", text: language === 'ar' ? "التفكير الإبداعي وحل المشكلات" : "Creative thinking and problem-solving" },
      { id: "ff4", text: language === 'ar' ? "مهارات التواصل والعمل الجماعي" : "Communication and teamwork skills" }
    ]
  },
  {
    id: 33,
    text: language === 'ar'
      ? "أي مجال من هذه المجالات ترغب في النمو فيه مهنياً؟"
      : "In which of these areas do you want to grow professionally?",
    options: [
      { id: "gg1", text: language === 'ar' ? "تطوير المهارات الإدارية والقيادية" : "Developing management and leadership skills" },
      { id: "gg2", text: language === 'ar' ? "تعميق المعرفة التقنية" : "Deepening technical knowledge" },
      { id: "gg3", text: language === 'ar' ? "تحسين مهارات الإبداع والابتكار" : "Improving creativity and innovation skills" },
      { id: "gg4", text: language === 'ar' ? "بناء شبكة علاقات مهنية أوسع" : "Building a wider professional network" }
    ]
  },
  {
    id: 34,
    text: language === 'ar'
      ? "عند اتخاذ قرار مهني مهم، ما الذي تأخذه بعين الاعتبار أولاً؟"
      : "When making an important career decision, what do you consider first?",
    options: [
      { id: "hh1", text: language === 'ar' ? "فرص النمو والتطور المهني" : "Growth opportunities and professional development" },
      { id: "hh2", text: language === 'ar' ? "العائد المادي والمزايا" : "Financial return and benefits" },
      { id: "hh3", text: language === 'ar' ? "التوازن بين العمل والحياة الشخصية" : "Work-life balance" },
      { id: "hh4", text: language === 'ar' ? "بيئة العمل وثقافة المؤسسة" : "Work environment and organizational culture" }
    ]
  },
  {
    id: 35,
    text: language === 'ar'
      ? "ما هو هدفك المهني على المدى الطويل؟"
      : "What is your long-term career goal?",
    options: [
      { id: "ii1", text: language === 'ar' ? "أن أصبح خبيراً متخصصاً في مجالي" : "Become a specialized expert in my field" },
      { id: "ii2", text: language === 'ar' ? "أن أشغل منصباً قيادياً" : "Hold a leadership position" },
      { id: "ii3", text: language === 'ar' ? "أن أبدأ مشروعي الخاص" : "Start my own business" },
      { id: "ii4", text: language === 'ar' ? "أن أحدث تأثيراً إيجابياً في مجال عملي" : "Make a positive impact in my field" }
    ]
  }
];
