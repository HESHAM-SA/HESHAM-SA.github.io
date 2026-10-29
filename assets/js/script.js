'use strict';

/* ===== Elements ===== */
const navbar = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const navBackdrop = document.querySelector('[data-nav-backdrop]');
const navIcon = document.querySelector('[data-nav-icon]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const bottomNavLinks = document.querySelectorAll('[data-bottom-nav] [data-nav-link]');
const backToTop = document.querySelector('[data-back-to-top]');
const langToggle = document.querySelector('[data-lang-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const metaDescription = document.querySelector('meta[name="description"]');
const sections = document.querySelectorAll('section[id]');
const projectVideos = document.querySelectorAll('[data-project-video]');
const certStream = document.querySelector('[data-cert-stream]');
const certTrack = certStream && certStream.querySelector('[data-cert-track]');
const certSet = certStream && certStream.querySelector('[data-cert-set]');
const menuMedia = window.matchMedia('(max-width: 1024px)');
const menuBackground = [
  document.querySelector('main'),
  document.querySelector('footer'),
  document.querySelector('[data-bottom-nav]'),
  backToTop,
  navbar && navbar.querySelector('.nav-logo'),
  langToggle,
  themeToggle,
  navbar && navbar.querySelector('.nav-cv-desktop')
].filter(Boolean);

/* English is read from index.html at load (captureEnglish), so the markup is its only copy.
   These are the English strings the markup never shows at load. */
const translations = {
  en: {
    certOpenLabel: 'Open certificate',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    text: {},
    attrs: {}
  },
  ar: {
    title: 'هشام السعدان — مهندس ذكاء اصطناعي وعلوم بيانات',
    description: 'معرض أعمال هشام السعدان — مهندس ذكاء اصطناعي وعالم بيانات في الرياض، أدوّر على فرص في EdTech. أكثر من 1,500 ساعة تدريب مع كاوست وسدايا وطويق وSDA.',
    langButtonAria: 'حوّل للإنجليزية',
    certOpenLabel: 'افتح الشهادة',
    menuOpen: 'افتح القائمة',
    menuClose: 'اقفل القائمة',
    themeDark: 'حوّل للوضع الداكن',
    themeLight: 'حوّل للوضع الفاتح',
    // data-i18n and data-i18n-html keys
    text: {
      'nav.home': 'الرئيسية',
      'nav.about': 'عني',
      'nav.experience': 'خبراتي',
      'nav.skills': 'مهاراتي',
      'nav.portfolio': 'مشاريعي',
      'nav.contact': 'تواصل معي',
      'nav.cvMobile': 'حمّل السيرة الذاتية',
      'nav.cv': 'السيرة',
      'hero.eyebrow': 'هلا، أنا',
      'hero.title': 'هشام السعدان',
      'hero.subtitle': 'مهندس ذكاء اصطناعي <span class="accent">|</span> علوم بيانات',
      'hero.text': 'مهندس ذكاء اصطناعي وعالم بيانات في الرياض، أبني حلول عملية في الذكاء الاصطناعي وتحليل البيانات — أدوّر على فرص في EdTech.',
      'hero.projects': 'شوف مشاريعي',
      'hero.contact': 'تواصل معي',
      'quick.about': 'عني',
      'quick.experience': 'خبراتي',
      'quick.skills': 'مهاراتي',
      'quick.projects': 'مشاريعي',
      'hero.location': 'مقرّي الرياض، السعودية',
      'focus.eyebrow': 'من الفكرة للأثر',
      'focus.title': 'أنظمة ذكية. إمكانات عملية.',
      'focus.ai': 'الذكاء الاصطناعي',
      'focus.data': 'البيانات والرؤى',
      'focus.learning': 'التعلّم وتقنيات التعليم',
      'hero.proof': 'ساعة تدريب تقني عملي',
      'about.eyebrow': 'تعرّف عليّ',
      'about.title': 'من أنا',
      'about.lead': 'نبذة عني، مجالات اهتمامي، ونوع الشغل اللي أدوّر عليه.',
      'about.p1': 'أنا مهندس ذكاء اصطناعي وعالم بيانات، أركّز على بناء أنظمة ذكية وحلول مبنية على البيانات — وأدوّر على العمل في EdTech.',
      'about.p2': 'خلّصت 6 معسكرات و5 برامج مع كاوست وسدايا وأكاديمية طويق وSDA — أكثر من 1,500 ساعة تدريب في Python والذكاء الاصطناعي وعلوم البيانات والتطوير المتكامل وإنترنت الأشياء والحوسبة السحابية والبنية التحتية لـ GPU.',
      'about.location': 'الرياض، السعودية',
      'about.languages': 'العربية والإنجليزية',
      'service.data.title': 'علوم البيانات',
      'service.data.text': 'أستخدم تقنيات تحليلية متقدمة عشان أستخرج رؤى من البيانات.',
      'service.ai.title': 'الذكاء الاصطناعي',
      'service.ai.text': 'أبني أنظمة ذكية ونماذج رؤية حاسوبية وتعلّم عميق.',
      'service.viz.title': 'عرض البيانات',
      'service.viz.text': 'أصمم لوحات معلومات تخلي فهم البيانات ومتابعتها أسهل.',
      'service.web.title': 'تطوير الويب',
      'service.web.text': 'أطوّر تطبيقات ويب متكاملة بـ Python وDjango مع تركيز على تجربة المستخدم.',
      'experience.eyebrow': 'مسيرتي',
      'experience.title': 'خبراتي',
      'experience.lead': 'تدريب ونمو مهني.',
      'exp.cs-instructor.date': 'أغسطس 2025 - حتى الآن',
      'exp.cs-instructor.title': 'معلم علوم حاسب',
      'exp.cs-instructor.org': 'وزارة التعليم',
      'exp.cs-instructor.text': 'أدرّس أكثر من 170 طالبًا في المرحلتين الابتدائية والمتوسطة بأسلوب عملي نتعلّم فيه بالممارسة، ومدعوم بمنصات تعليمية ذكية بنيتها بنفسي تحوّل مفاهيم الحاسب الأساسية لمشاريع تفاعلية وعملية.',
      'exp.gpu.date': 'يونيو 2026 - أغسطس 2026',
      'exp.gpu.title': 'تسارُع — معسكر هندسة GPU',
      'exp.gpu.org': 'أكاديمية طويق',
      'exp.gpu.text': 'خلّصت 9 أسابيع مكثفة عملية في كامل البنية التحتية للذكاء الاصطناعي: نماذج LLM والمحولات، الذكاء الاصطناعي الوكيلي، بنية GPU ومراكز البيانات، CUDA، PyTorch عالي الأداء، التدريب الموزع على عدة معالجات وعدة أجهزة، الضبط الدقيق، والتقييم والاستدلال الإنتاجي على نطاق واسع. وتخرّجت بشهادة احترافية من NVIDIA في البنية التحتية للذكاء الاصطناعي.',
      'exp.gpu.capstone': '<strong>ورقة بحثية — رفع دقة النماذج بعد التكميم:</strong> قرأت أبحاث من سبقوني في ضغط النماذج وكملت على شغلهم، وقدّمت ورقة بحثية عن رفع دقة نماذج الذكاء الاصطناعي بعد تكميمها من FP16 إلى NVFP4. <em>الأدوات: PyTorch, CUDA, NVIDIA TensorRT Model Optimizer.</em>',
      'exp.sda-python.date': '10 مايو 2026 - 25 يونيو 2026',
      'exp.sda-python.title': 'معسكر تطوير البرمجيات بـ Python',
      'exp.sda-python.org': 'الأكاديمية السعودية الرقمية — SDA',
      'exp.sda-python.text': 'خلّصت 7 أسابيع مكثفة في تطوير البرمجيات بـ Python وFastAPI وReact وPostgreSQL، وبنيت مهارات برمجية عملية وخبرة تطبيقية حقيقية.',
      'exp.kaust-ai.date': 'يناير - فبراير 2026',
      'exp.kaust-ai.title': 'الذكاء الاصطناعي المتقدم',
      'exp.kaust-ai.org': 'كاوست — جامعة الملك عبدالله للعلوم والتقنية',
      'exp.kaust-ai.text': 'خلّصت 80 ساعة تدريب متقدم في الذكاء الاصطناعي، وعمّقت فهمي للتقنيات والنماذج الحديثة وتطبيقاتها.',
      'exp.web-dev.date': 'يونيو 2025 - أغسطس 2025',
      'exp.web-dev.title': 'معسكر تطوير الويب',
      'exp.web-dev.org': 'أكاديمية طويق',
      'exp.web-dev.text': 'خلّصت 300 ساعة مكثفة في Python وتطوير الويب المتكامل، مع التركيز على Django وتقنيات الويب الحديثة.',
      'exp.ai-bootcamp.date': 'سبتمبر 2024 - أكتوبر 2024',
      'exp.ai-bootcamp.title': 'معسكر الذكاء الاصطناعي',
      'exp.ai-bootcamp.org': 'أكاديمية طويق',
      'exp.ai-bootcamp.text': 'خلّصت 200 ساعة مكثفة، واكتسبت خبرة عملية في الذكاء الاصطناعي والتعلم الآلي والتعلم العميق.',
      'exp.ai-bootcamp.capstone': '<strong>مشروع التخرج — محلل التركيز للتعليم الإلكتروني:</strong> بنيت منصة تستخدم التعرّف على الوجوه ونتائج الاختبارات عشان أقيس تركيز الطلاب وهم يتعلمون عن بُعد. <em>الأدوات: MediaPipe, OpenAI GPT-3.5, Whisper, Streamlit.</em>',
      'exp.t5.date': 'مارس 2024 - يونيو 2024',
      'exp.t5.title': 'معسكر علوم البيانات والذكاء الاصطناعي T5',
      'exp.t5.org': 'سدايا',
      'exp.t5.text': 'خلّصت 360 ساعة مكثفة، غطّت SQL وPython وتحليل البيانات والتعلم الآلي والعميق (CNN وRNN) وMLOps.',
      'exp.t5.capstone': '<strong>مشروع التخرج — حاضر:</strong> نظام حضور ذكي يتعرّف على وجوه الطلاب ويسجّل حضورهم تلقائيًا أول ما يدخلون الصف. <em>الأدوات: YOLO, Keras, Roboflow.</em>',
      'exp.ds-ml.date': 'أكتوبر 2023 - ديسمبر 2023',
      'exp.ds-ml.title': 'معسكر علوم البيانات وتعلم الآلة',
      'exp.ds-ml.org': 'أكاديمية طويق',
      'exp.ds-ml.text': '200 ساعة، 5 مشاريع و50 تمرين باستخدام Python وSQL وPandas وTableau وTensorFlow. وتعمّقت في تعلم الآلة (SVM وDecision Tree وRandom Forest) والتعلم العميق (CNNs).',
      'exp.ds-ml.capstone': '<strong>مشروع التخرج — خراف:</strong> مشروع تصنيف صور بالـ CNN يحدد نوع التمر ومستوى النضج والجودة وأمراض النخيل. <em>الأدوات: Python, TensorFlow, Plotly Dash.</em>',
      'education.title': 'التعليم',
      'edu.ksu.title': 'بكالوريوس علوم الحاسب',
      'edu.ksu.org': 'جامعة الملك سعود',
      'edu.ksu.text': 'ركّزت على أساسيات مثل البرمجة والخوارزميات وهياكل البيانات وقواعد البيانات وأنظمة التشغيل وتطوير البرمجيات.',
      'skills.eyebrow': 'أدواتي ومهاراتي',
      'skills.title': 'المهارات والشهادات',
      'skills.lead': 'التقنيات والشهادات اللي أستخدمها.',
      'skills.languages': 'لغات البرمجة',
      'skills.tag.javascript': 'جافاسكريبت',
      'skills.frameworks': 'أطر التعلم الآلي والعميق',
      'skills.tools': 'الأدوات والتقنيات',
      'skills.tag.cloud': 'الحوسبة السحابية',
      'skills.competencies': 'المهارات الأساسية',
      'skills.tag.dataAnalysis': 'تحليل البيانات',
      'skills.tag.deepLearning': 'التعلم العميق',
      'skills.tag.problemSolving': 'حل المشكلات',
      'skills.tag.teamwork': 'العمل الجماعي',
      'skills.tag.leadership': 'القيادة',
      'certs.title': 'الشهادات',
      'cert.nvidia-ai-infra.name': 'شهادة NVIDIA المعتمدة — البنية التحتية للذكاء الاصطناعي وتشغيلها',
      'cert.nvidia-ai-infra.meta': 'NVIDIA · أغسطس 2026',
      'cert.sda-python.name': 'معسكر تطوير البرمجيات باستخدام بايثون',
      'cert.sda-python.meta': 'الأكاديمية السعودية الرقمية · 300 ساعة · يونيو 2026',
      'cert.nvidia-transformers.name': 'بناء تطبيقات معالجة اللغة الطبيعية بالمحوّلات',
      'cert.nvidia-transformers.meta': 'NVIDIA · مارس 2026',
      'cert.kaust-ai.name': 'الذكاء الاصطناعي المتقدم — الرؤية الحاسوبية',
      'cert.kaust-ai.meta': 'أكاديمية كاوست · 80 ساعة · فبراير 2026',
      'cert.web-bootcamp.name': 'معسكر تطوير الويب باستخدام بايثون',
      'cert.web-bootcamp.meta': 'أكاديمية طويق · 300 ساعة · سبتمبر 2025',
      'cert.drones.name': 'بناء ومعايرة الدرونز',
      'cert.drones.meta': 'الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز · 20 ساعة · مايو 2025',
      'cert.iot.name': 'أساسيات إنترنت الأشياء',
      'cert.iot.meta': 'أكاديمية طويق · 25 ساعة · مايو 2025',
      'cert.cloud.name': 'مهندس الحوسبة السحابية',
      'cert.cloud.meta': 'علي بابا كلاود · مارس 2025',
      'cert.ai-bootcamp.name': 'معسكر بناء وتطوير نماذج الذكاء الاصطناعي',
      'cert.ai-bootcamp.meta': 'أكاديمية طويق · 200 ساعة · أكتوبر 2024',
      'cert.t5.name': 'معسكر T5 لعلوم البيانات والذكاء الاصطناعي',
      'cert.t5.meta': 'أكاديمية سدايا · 360 ساعة · يونيو 2024',
      'cert.ds-bootcamp.name': 'معسكر علم البيانات',
      'cert.ds-bootcamp.meta': 'أكاديمية طويق · 200 ساعة · ديسمبر 2023',
      'cert.llm-apps.name': 'تطوير تطبيقات النماذج اللغوية الكبيرة',
      'cert.llm-apps.meta': 'مجمع الملك سلمان العالمي للغة العربية · 16 ساعة · ديسمبر 2023',
      'certs.issuers': 'الجهات المانحة',
      'portfolio.eyebrow': 'مشاريع مختارة',
      'portfolio.title': 'مشاريعي',
      'portfolio.lead': 'اختر نوع المشروع عشان تصفّي المشاريع.',
      'filter.all': 'الكل',
      'filter.ai': 'ذكاء اصطناعي',
      'filter.data-analytics': 'تحليل البيانات',
      'filter.apps': 'تطبيقات',
      'category.ai': 'ذكاء اصطناعي',
      'project.attendees.title': 'نظام إدارة الحضور',
      'project.attendees.description': 'نظام حضور تلقائي يستخدم التعرف على الوجوه عشان يسجّل الطلاب يوم يدخلون الصف.',
      'project.attendees.link': 'شوف GitHub',
      'project.focus.title': 'منصة تحليل تركيز الطلاب في التعليم الإلكتروني',
      'project.focus.description': 'يتابع انتباه المتعلمين في التعليم الإلكتروني باستخدام تحليل الوجه ونتائج الاختبارات.',
      'project.focus.link': 'شوف GitHub',
      'project.kharaf.title': 'خراف للتمور',
      'project.kharaf.description': 'مصنّف جودة تمور بالـ CNN يحدّد النوع والنضج والجودة ومؤشرات أمراض النخيل.',
      'project.kharaf.link': 'شوف GitHub',
      'category.data-analytics': 'تحليل البيانات',
      'project.diabetes.title': 'تحليل مرض السكري',
      'project.diabetes.description': 'تقرير تحليل بيانات يستكشف عوامل خطر السكري والأنماط الصحية.',
      'project.diabetes.link': 'شوف التقرير',
      'project.food.title': 'تحليل طلبات الطعام أونلاين',
      'project.food.description': 'تحليل استكشافي يكشف سلوك العملاء واتجاهات طلبات الطعام أونلاين.',
      'project.food.link': 'شوف التقرير',
      'project.tuwaiq.title': 'تحليل بيانات طلاب أكاديمية طويق',
      'project.tuwaiq.description': 'تحليل استكشافي لـ 6,500 طالب من أكاديمية طويق وأنماط التدريب.',
      'project.tuwaiq.link': 'شوف Kaggle',
      'project.powerbi.title': 'لوحة معلومات Power BI',
      'project.powerbi.description': 'لوحة Power BI تفاعلية لتنظيف البيانات ونمذجتها وعرضها بصريًا.',
      'project.powerbi.link': 'شوف GitHub',
      'category.apps': 'تطبيقات',
      'project.halaorder.title': 'منصة هلا أوردر للمطاعم',
      'project.halaorder.description': 'منصة Django متعددة المطاعم لإطلاق متجر إلكتروني وإدارة القوائم والفروع ومتابعة الطلبات لحظيًا.',
      'project.halaorder.link': 'شوف GitHub',
      'project.portfolio-builder.title': 'منشئ الملف الشخصي',
      'project.portfolio-builder.description': 'تطبيق Django يحوّل الاسم وبعض المحطات المهنية إلى ملف شخصي زمني تقدر تشاركه بدون تسجيل.',
      'project.portfolio-builder.link': 'شوف GitHub',
      'project.guess.title': 'لعبة تخمين الرقم',
      'project.guess.description': 'لعبة Python بسيطة لتخمين الرقم تركّز على تدفق التحكم وإدخال المستخدم.',
      'project.guess.link': 'شوف GitHub',
      'contact.eyebrow': 'كلّمني',
      'contact.title': 'خلّنا نبني مع بعض ذكاء اصطناعي مفيد',
      'contact.lead': 'تواصل معي بخصوص فرص الذكاء الاصطناعي وعلوم البيانات وتقنيات التعليم.',
      'contact.email': 'راسلني على الإيميل',
      'contact.linkedin': 'لينكدإن',
      'contact.cv': 'حمّل السيرة الذاتية',
      'contact.location': 'الرياض، السعودية',
      'footer.copyright': '© 2026 هشام السعدان. جميع الحقوق محفوظة.',
      'bottomNav.home': 'الرئيسية',
      'bottomNav.about': 'عني',
      'bottomNav.projects': 'مشاريعي',
      'bottomNav.contact': 'تواصل'
    },
    // data-i18n-attr keys
    attrs: {
      'nav.aria': 'القائمة الرئيسية',
      'quick.aria': 'روابط سريعة',
      'focus.aria': 'مجالات اهتمامي',
      'hero.avatar': 'هشام السعدان',
      'exp.cs-instructor.logo': 'وزارة التعليم',
      'exp.gpu.logo': 'أكاديمية طويق',
      'exp.sda-python.logo': 'وزارة الاتصالات وتقنية المعلومات',
      'exp.kaust-ai.logo': 'كاوست',
      'exp.web-dev.logo': 'أكاديمية طويق',
      'exp.ai-bootcamp.logo': 'أكاديمية طويق',
      'exp.t5.logo': 'سدايا',
      'exp.ds-ml.logo': 'أكاديمية طويق',
      'edu.ksu.logo': 'جامعة الملك سعود',
      'certs.aria': 'الشهادات',
      'filter.aria': 'أنواع المشاريع',
      'project.attendees.aria': 'عرض مشروع نظام إدارة الحضور على GitHub',
      'project.attendees.media': 'عرض نظام إدارة الحضور بالذكاء الاصطناعي',
      'project.focus.aria': 'عرض مشروع منصة تحليل التركيز على GitHub',
      'project.focus.media': 'عرض تتبع انتباه الطلاب في الفصل الافتراضي',
      'project.kharaf.aria': 'عرض مشروع خراف للتمور على GitHub',
      'project.kharaf.media': 'تحليل جودة التمور',
      'project.diabetes.aria': 'عرض تحليل مرض السكري',
      'project.diabetes.media': 'تحليل عوامل خطر السكري',
      'project.food.aria': 'عرض تحليل طلبات الطعام أونلاين',
      'project.food.media': 'تحليل اتجاهات طلب الطعام أونلاين',
      'project.tuwaiq.aria': 'عرض تحليل بيانات طلاب أكاديمية طويق على Kaggle',
      'project.tuwaiq.media': 'تحليل بيانات 6,500 طالب من أكاديمية طويق',
      'project.powerbi.aria': 'عرض مشروع لوحة Power BI على GitHub',
      'project.powerbi.media': 'لوحة معلومات Power BI',
      'project.halaorder.aria': 'عرض مشروع منصة هلا أوردر على GitHub',
      'project.halaorder.media': 'عرض متجر المطعم وإدارة الطلبات',
      'project.portfolio-builder.aria': 'عرض مشروع منشئ الملف الشخصي على GitHub',
      'project.portfolio-builder.media': 'عرض منشئ الملف الشخصي بدون تسجيل',
      'project.guess.aria': 'عرض مشروع لعبة تخمين الرقم على GitHub',
      'project.guess.media': 'لعبة تخمين الرقم',
      'bottomNav.aria': 'قائمة التنقل',
      'backToTop.aria': 'ارجع للأعلى'
    }
  }
};

let currentLang = 'en';

const t = (key) => translations[currentLang][key] || translations.en[key] || '';

// data-i18n-attr="aria-label:key; alt:key" -> [['aria-label', 'key'], ['alt', 'key']]
const readI18nAttrs = (el) => el.dataset.i18nAttr.split(';')
  .map(pair => pair.split(':').map(part => part.trim()))
  .filter(([name, key]) => name && key);

// Runs before any language is applied, so everything it reads is still the English markup.
const captureEnglish = () => {
  const en = translations.en;
  const keep = (map, key, value) => {
    if (!(key in map)) map[key] = value;
  };

  en.title = document.title;
  en.description = metaDescription?.content || '';
  en.langButtonAria = langToggle?.getAttribute('aria-label') || '';
  en.menuOpen = navToggle?.getAttribute('aria-label') || '';
  en.themeDark = themeToggle?.getAttribute('aria-label') || '';

  document.querySelectorAll('[data-i18n]').forEach(el => keep(en.text, el.dataset.i18n, el.textContent));
  document.querySelectorAll('[data-i18n-html]').forEach(el => keep(en.text, el.dataset.i18nHtml, el.innerHTML));
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    readI18nAttrs(el).forEach(([name, key]) => keep(en.attrs, key, el.getAttribute(name) || ''));
  });
};

// A key missing from Arabic falls back to English rather than leaving the previous language behind.
const applyStrings = (dict) => {
  const { en } = translations;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = dict.text[el.dataset.i18n] ?? en.text[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = dict.text[el.dataset.i18nHtml] ?? en.text[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    readI18nAttrs(el).forEach(([name, key]) => {
      const value = dict.attrs[key] ?? en.attrs[key];
      if (value !== undefined) el.setAttribute(name, value);
    });
  });
};

const isLanguage = (lang) => lang === 'en' || lang === 'ar';

const saveLanguage = (lang) => {
  try { localStorage.setItem('portfolio-lang', lang); } catch (_) { /* Language still works without storage. */ }
};

// The inline head script resolves the same order to set dir before first paint; keep the two in step.
const readInitialLanguage = () => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(fromUrl)) {
    saveLanguage(fromUrl);
    return fromUrl;
  }
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (isLanguage(saved)) return saved;
  } catch (_) { /* Storage can be unavailable in private or embedded contexts. */ }
  return 'en';
};

const syncThemeControl = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  if (!themeToggle) return;
  const label = t(isDark ? 'themeLight' : 'themeDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
  themeToggle.setAttribute('aria-pressed', String(isDark));
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = theme === 'dark' ? '#15130f' : '#f3eee4';
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Theme still works without storage. */ }
  syncThemeControl();
};

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

const setLanguage = (lang) => {
  currentLang = lang === 'ar' ? 'ar' : 'en';
  const dict = translations[currentLang];
  const railOffset = readCertRailOffset();

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.title = dict.title;
  if (metaDescription) metaDescription.content = dict.description;

  applyStrings(dict);

  document.querySelectorAll('.cert-card[href]').forEach(card => {
    const name = card.querySelector('.cert-name');
    if (name) card.setAttribute('aria-label', `${dict.certOpenLabel}: ${name.textContent}`);
  });

  if (langToggle) {
    langToggle.dataset.lang = currentLang;
    langToggle.setAttribute('aria-label', dict.langButtonAria);
    langToggle.setAttribute('aria-checked', String(currentLang === 'ar'));
  }

  if (navToggle && navMenu) {
    navToggle.setAttribute('aria-label', t(navMenu.classList.contains('open') ? 'menuClose' : 'menuOpen'));
  }

  syncThemeControl();
  applyCertRailOffset(railOffset);
};

/* Flipping the language swaps the rail's keyframes, which restarts the animation.
   Carrying the loop offset across as a negative delay keeps the cards where they were. */
function readCertRailOffset() {
  if (!certTrack || !certSet) return null;
  const setWidth = certSet.scrollWidth;
  const transform = getComputedStyle(certTrack).transform;
  if (!setWidth || transform === 'none') return null;
  const x = new DOMMatrix(transform).m41;
  return (((x % setWidth) + setWidth) % setWidth) / setWidth;
}

function applyCertRailOffset(offset) {
  if (offset === null || !certTrack) return;
  const duration = parseFloat(getComputedStyle(certTrack).animationDuration);
  if (!duration) return;
  // The two keyframes run opposite ways, so one offset sits at mirrored points in time.
  const progress = document.documentElement.dir === 'rtl' ? 1 - offset : offset;
  certTrack.style.animationDelay = `${-progress * duration}s`;
}

const setMenuOpen = (open, { restoreFocus = true } = {}) => {
  if (!navMenu || !navBackdrop || !navToggle || !navIcon) return;
  const wasOpen = navMenu.classList.contains('open');
  navMenu.classList.toggle('open', open);
  navBackdrop.hidden = !open;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
  navIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  document.body.classList.toggle('menu-open', open);
  menuBackground.forEach(element => {
    if (open) element.setAttribute('inert', '');
    else element.removeAttribute('inert');
  });

  if (open && !wasOpen) {
    requestAnimationFrame(() => navMenu.querySelector('a[href]')?.focus());
  } else if (!open && wasOpen && restoreFocus) {
    navToggle.focus();
  }
};

captureEnglish();
setLanguage(readInitialLanguage());

/* ===== Navbar: scrolled state ===== */
const syncScrollState = () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
  if (backToTop) backToTop.hidden = window.scrollY < 500;
};

window.addEventListener('scroll', syncScrollState, { passive: true });
syncScrollState();

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    setMenuOpen(!navMenu.classList.contains('open'));
  });
}

if (navBackdrop) navBackdrop.addEventListener('click', () => setMenuOpen(false));

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const lang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(lang);
    saveLanguage(lang);

    // A shared ?lang= link stays in step, so the address bar never contradicts the page.
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      history.replaceState(history.state, '', url);
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('open')) {
    setMenuOpen(false);
    return;
  }

  if (event.key !== 'Tab' || !navMenu?.classList.contains('open')) return;
  const focusable = [...navMenu.querySelectorAll('a[href], button:not([disabled])'), navToggle];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menuWasOpen = navMenu?.classList.contains('open');
    const target = document.querySelector(link.getAttribute('href'));
    setMenuOpen(false, { restoreFocus: !menuWasOpen });
    if (menuWasOpen && target) {
      window.setTimeout(() => {
        const destinationHeading = target.querySelector('h1, h2') || target;
        destinationHeading.setAttribute('tabindex', '-1');
        destinationHeading.focus({ preventScroll: true });
        destinationHeading.addEventListener('blur', () => destinationHeading.removeAttribute('tabindex'), { once: true });
      }, 350);
    }
  });
});

if (navMenu) {
  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
}

menuMedia.addEventListener('change', event => {
  if (!event.matches) setMenuOpen(false, { restoreFocus: false });
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

const getBottomNavTarget = (sectionId) => {
  if (sectionId === 'experience' || sectionId === 'skills') return 'about';
  return sectionId;
};

const setActiveNav = (id) => {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  const bottomTarget = getBottomNavTarget(id);
  bottomNavLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${bottomTarget}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

setActiveNav('home');

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => sectionObserver.observe(section));
}

/* ===== Portfolio filtering ===== */
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterProjects = (selected) => {
  filterItems.forEach(item => {
    const category = (item.dataset.category || '').toLowerCase();
    item.classList.toggle('active', selected === 'all' || category === selected);
  });
};

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    filterProjects((btn.dataset.filterBtn || 'all').toLowerCase());
  });
});

/* ===== Certificate stream ===== */
if (certStream && certTrack && certSet) {
  const CERT_SPEED = 55; // px per second, so the rail reads the same at any width

  // A second copy of the set makes the -50% loop seamless.
  const certClone = certSet.cloneNode(true);
  certClone.removeAttribute('data-cert-set');
  certClone.setAttribute('aria-hidden', 'true');
  certClone.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', '-1'));
  certTrack.appendChild(certClone);

  const syncCertDuration = () => {
    const width = certSet.scrollWidth;
    if (width > 0) certStream.style.setProperty('--cert-duration', `${(width / CERT_SPEED).toFixed(1)}s`);
  };

  syncCertDuration();
  certStream.classList.add('is-ready');

  if ('ResizeObserver' in window) {
    let certResizeFrame = 0;
    new ResizeObserver(() => {
      cancelAnimationFrame(certResizeFrame);
      certResizeFrame = requestAnimationFrame(syncCertDuration);
    }).observe(certSet);
  } else {
    window.addEventListener('resize', syncCertDuration);
  }

  // Hovering or focusing a certificate holds the stream still while it pops open.
  const inCertCard = (node) => !!(node && node.nodeType === 1 && node.closest('.cert-card'));
  const setCertPaused = (paused) => certStream.classList.toggle('is-paused', paused);

  certStream.addEventListener('pointerover', (event) => {
    if (event.pointerType !== 'touch' && inCertCard(event.target)) setCertPaused(true);
  });

  certStream.addEventListener('pointerout', (event) => {
    if (event.pointerType !== 'touch' && !inCertCard(event.relatedTarget)) setCertPaused(false);
  });

  certStream.addEventListener('pointerleave', () => setCertPaused(false));
  certStream.addEventListener('focusin', (event) => setCertPaused(inCertCard(event.target)));
  certStream.addEventListener('focusout', (event) => {
    if (!inCertCard(event.relatedTarget)) setCertPaused(false);
  });


  /* ===== Drag the rail ===== */
  // Under reduced motion the rail is a plain scroll container, so the browser
  // already gives the visitor manual control and a custom drag would fight it.
  const certStillMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // A running CSS animation outranks an inline transform, so hand-driving the rail
  // means switching the animation off and back on around the gesture.
  const CERT_DRAG_SLOP = 6;      // px of travel before this counts as a drag, not a click
  const CERT_GLIDE_DECAY = 0.94; // per frame, how quickly a flick runs out
  const CERT_GLIDE_STOP = 0.4;   // px per frame, below which the flick has settled

  let certDrag = null;
  let certDragDistance = 0;
  let certGlideFrame = 0;

  // The rail is two identical sets wide, so any position is equivalent to one
  // inside a single set — which is what keeps dragging endless in both directions.
  const wrapCertX = (x) => {
    const width = certSet.scrollWidth;
    return width ? (((x % width) + width) % width) - width : x;
  };

  const readCertX = () => {
    const transform = getComputedStyle(certTrack).transform;
    return transform === 'none' ? 0 : new DOMMatrix(transform).m41;
  };

  const holdCertRail = () => {
    cancelAnimationFrame(certGlideFrame);
    certTrack.style.animation = 'none';
    certStream.classList.add('is-dragging');
  };

  const releaseCertRail = (x) => {
    const width = certSet.scrollWidth;
    certStream.classList.remove('is-dragging');
    certTrack.style.transform = '';
    certTrack.style.animation = '';
    if (width) applyCertRailOffset((((x % width) + width) % width) / width);
  };

  const glideCertRail = (x, velocity) => {
    let position = x;
    let speed = velocity;
    const step = () => {
      speed *= CERT_GLIDE_DECAY;
      position = wrapCertX(position + speed);
      certTrack.style.transform = `translate3d(${position}px, 0, 0)`;
      if (Math.abs(speed) > CERT_GLIDE_STOP) certGlideFrame = requestAnimationFrame(step);
      else releaseCertRail(position);
    };
    certGlideFrame = requestAnimationFrame(step);
  };

  certStream.addEventListener('pointerdown', (event) => {
    if (certStillMotion || (event.pointerType === 'mouse' && event.button !== 0)) return;
    holdCertRail();
    certDragDistance = 0;
    certDrag = { id: event.pointerId, from: event.clientX, last: event.clientX, x: wrapCertX(readCertX()), velocity: 0 };
    certTrack.style.transform = `translate3d(${certDrag.x}px, 0, 0)`;
  });

  certStream.addEventListener('pointermove', (event) => {
    if (!certDrag || event.pointerId !== certDrag.id) return;
    const step = event.clientX - certDrag.last;
    certDrag.last = event.clientX;
    certDrag.velocity = certDrag.velocity * 0.7 + step * 0.3;
    certDragDistance = Math.max(certDragDistance, Math.abs(event.clientX - certDrag.from));
    certTrack.style.transform = `translate3d(${wrapCertX(certDrag.x + (event.clientX - certDrag.from))}px, 0, 0)`;

    // Capture only once this is unmistakably a drag: a captured pointer retargets
    // the click to the rail, which would stop a plain click opening the card.
    if (certDragDistance > CERT_DRAG_SLOP && !certStream.hasPointerCapture(event.pointerId)) {
      certStream.setPointerCapture(event.pointerId);
    }
  });

  const endCertDrag = (event) => {
    if (!certDrag || event.pointerId !== certDrag.id) return;
    const { velocity } = certDrag;
    const x = wrapCertX(readCertX());
    certDrag = null;
    if (certDragDistance > CERT_DRAG_SLOP && Math.abs(velocity) > CERT_GLIDE_STOP * 3) glideCertRail(x, velocity);
    else releaseCertRail(x);
  };

  certStream.addEventListener('pointerup', endCertDrag);
  certStream.addEventListener('pointercancel', endCertDrag);

  // A drag that ends on a card must not also open that card's PDF.
  certStream.addEventListener('click', (event) => {
    if (certDragDistance > CERT_DRAG_SLOP) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  certStream.addEventListener('dragstart', (event) => event.preventDefault());

  // No reason to animate a rail nobody can see.
  if ('IntersectionObserver' in window) {
    const certVisibility = new IntersectionObserver(entries => {
      entries.forEach(entry => certStream.classList.toggle('is-offscreen', !entry.isIntersecting));
    }, { rootMargin: '200px 0px' });

    certVisibility.observe(certStream);
  }
}

/* ===== Lazy project videos ===== */
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const loadVideo = (video) => {
  const sources = video.querySelectorAll('source[data-src]');
  if (!sources.length) return;
  sources.forEach(source => {
    source.src = source.dataset.src;
    source.removeAttribute('data-src');
  });
  video.load();
};

const playVideo = (video) => {
  loadVideo(video);
  const play = video.play();
  if (play) play.catch(() => {});
};

if (projectVideos.length && !prefersReducedMotion) {
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) playVideo(video);
        else video.pause();
      });
    }, { rootMargin: '200px 0px' });

    projectVideos.forEach(video => videoObserver.observe(video));
  } else {
    projectVideos.forEach(playVideo);
  }
}

/* ===== Scroll reveal ===== */
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealElements.forEach(el => revealObserver.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('visible'));
}
