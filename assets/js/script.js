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
const metaDescription = document.querySelector('meta[name="description"]');
const sections = document.querySelectorAll('section[id]');

const LANG_KEY = 'portfolio-language';

const translations = {
  en: {
    title: 'Hesham Alsadan — Data Scientist & AI',
    description: 'Portfolio of Hesham Alsadan — Computer Science teacher, Data Scientist and AI engineer with 1,500+ hours of training across KAUST, SDAIA, Tuwaiq, and SDA.',
    langButton: 'العربية',
    langButtonAria: 'Switch to Arabic',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    text: {
      '.nav-links .nav-link[href="#home"]': 'Home',
      '.nav-links .nav-link[href="#about"]': 'About',
      '.nav-links .nav-link[href="#experience"]': 'Experience',
      '.nav-links .nav-link[href="#skills"]': 'Skills',
      '.nav-links .nav-link[href="#portfolio"]': 'Portfolio',
      '.nav-links .nav-link[href="#contact"]': 'Contact',
      '.hero-eyebrow': "Hello, I'm",
      '.hero-title': 'Hesham Alsadan',
      '.hero-text': 'Computer Science teacher and AI practitioner in Riyadh — 1,500+ hours of intensive training across KAUST, SDAIA, Tuwaiq, and SDA in Python, AI, cloud, and GPU infrastructure.',
      '.hero-actions .btn-primary': 'View Projects',
      '.hero-actions .btn-outline': 'Contact Me',
      '#about .section-eyebrow': 'Get to know me',
      '#about .section-title': 'About Me',
      '#about .section-lead': 'Who I am and what I focus on.',
      '.about-text p:nth-of-type(1)': 'Results-driven Data Scientist, AI engineer, and Computer Science teacher with hands-on experience in machine learning, computer vision, and full-stack development.',
      '.about-text p:nth-of-type(2)': 'I completed 6 bootcamps and 5 programs through KAUST, SDAIA, Tuwaiq Academy, and SDA — over 1,500 hours of training in Python, AI, data science, full-stack web development, IoT, cloud computing, and GPU infrastructure, with 100% attendance. I currently teach computer science to 170 students at the Ministry of Education while building production-ready AI solutions.',
      '.service-card:nth-child(1) h3': 'Data Science',
      '.service-card:nth-child(1) p': 'Advanced analytical techniques for extracting insights from data.',
      '.service-card:nth-child(2) h3': 'Artificial Intelligence',
      '.service-card:nth-child(2) p': 'Development of intelligent systems, computer vision, and deep learning models.',
      '.service-card:nth-child(3) h3': 'Visualization',
      '.service-card:nth-child(3) p': 'Producing dashboards for data visualization and storytelling.',
      '.service-card:nth-child(4) h3': 'Web Development',
      '.service-card:nth-child(4) p': 'Building full-stack web apps with Python and Django, focused on user experience.',
      '#experience > .container > h2.section-title:first-of-type': 'Experience',
      '#experience > .container > .section-eyebrow': 'My journey',
      '#experience > .container > .section-lead': 'Training, teaching, and professional growth.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-date': 'Jun 2026 - Present',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-title': "Tasar'u — GPU Engineering Bootcamp | تسارُع",
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-org': 'Tuwaiq Academy',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-text': 'Over 8 intensive hands-on weeks, participants go deep into the full AI-infrastructure stack: LLMs and Transformers, agentic AI, GPU and datacenter architecture, CUDA, high-performance PyTorch, multi-GPU and multi-node distributed training, fine-tuning, evaluation, and production inference at scale.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-date': 'Aug 2025 - Present',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-title': 'Computer Science Teacher',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-org': 'Ministry of Education',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-text': 'Teach primary and intermediate students (170 total) computer science fundamentals.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-date': 'May 10, 2026 - Jun 25, 2026',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-title': 'Software Development using Python Bootcamp Trainee',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-org': 'SDA — Saudi Digital Academy',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-text': 'Completed a 7-week intensive journey in software development using Python, FastAPI, React, and PostgreSQL, building practical programming skills and real-world application experience.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-date': 'Jan - Feb 2026',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-title': 'Advanced Artificial Intelligence',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-org': 'KAUST — King Abdullah University of Science and Technology',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-text': 'Completed 80 hours of advanced training in artificial intelligence, deepening expertise in modern AI techniques, models, and applications.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-date': 'Jun 2025 - Aug 2025',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-title': 'Web Development Bootcamp Trainee',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-org': 'Tuwaiq Academy',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-text': 'Completed 300 hours of intensive training in Python and full-stack web development, with a focus on Django and modern web technologies.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-date': 'Sep 2024 - Oct 2024',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-title': 'AI Bootcamp Trainee',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-org': 'Tuwaiq Academy',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-text': 'Completed 200 hours of intensive training, gaining hands-on experience in AI, machine learning, and deep learning.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-date': 'Mar 2024 - Jun 2024',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-title': 'Data Science and AI T5 Bootcamp Trainee',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-org': 'SDAIA',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-text': 'Completed 360 hours of intensive training, covering SQL, Python, data analysis, machine learning, deep learning (CNN, RNN), and MLOps.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-date': 'Oct 2023 - Dec 2023',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-title': 'Data Science and Machine Learning Bootcamp Trainee',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-org': 'Tuwaiq Academy',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-text': 'Completed 200 hours of intensive training, building 5 projects and 50 labs using Python, SQL, Pandas, Tableau, and TensorFlow. Gained expertise in machine learning (SVM, Decision Tree, Random Forest) and deep learning (CNNs).',
      '#experience .section-title-secondary': 'Education',
      '#experience ol.timeline:last-of-type .timeline-title': "Bachelor's Degree in Computer Science",
      '#experience ol.timeline:last-of-type .timeline-org': 'King Saud University',
      '#experience ol.timeline:last-of-type .timeline-text': 'Focused on core areas such as programming, algorithms, data structures, databases, operating systems, and software development.',
      '#skills .section-eyebrow': 'What I work with',
      '#skills .section-title': 'Skills & Certifications',
      '#skills .section-lead': 'Technologies, tools, and certified skills.',
      '#skills .skill-card:nth-child(1) .tag-list li:nth-child(3)': 'JavaScript',
      '#skills .skill-card:nth-child(3) .tag-list li:nth-child(4)': 'Cloud Computing',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(1)': 'Data Analysis',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(2)': 'Deep Learning',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(3)': 'Problem Solving',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(4)': 'Teamwork',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(5)': 'Leadership',
      '#skills .cert-heading': 'Certifications',
      '#skills .cert-item:nth-child(1) .cert-name': 'Transformer-Based NLP Applications',
      '#skills .cert-item:nth-child(1) .cert-meta': 'NVIDIA · Jan 2026',
      '#skills .cert-item:nth-child(2) .cert-name': 'Drone Building & Calibration',
      '#skills .cert-item:nth-child(2) .cert-meta': 'SAFCSP · May 2025',
      '#skills .cert-item:nth-child(3) .cert-name': 'IoT Certificate',
      '#skills .cert-item:nth-child(3) .cert-meta': 'Tuwaiq Academy · May 2025',
      '#skills .cert-item:nth-child(4) .cert-name': 'Cloud Computing Engineer',
      '#skills .cert-item:nth-child(4) .cert-meta': 'Tuwaiq Academy · Mar 2025',
      '#skills .cert-item:nth-child(5) .cert-name': 'LLM Application Development',
      '#skills .cert-item:nth-child(5) .cert-meta': 'King Salman Global Complex for Arabic Language · Dec 2023',
      '#portfolio .section-eyebrow': 'Selected work',
      '#portfolio .section-title': 'Portfolio',
      '#portfolio .section-lead': 'Tap a category to filter projects.',
      '.filter-btn[data-filter-btn="all"]': 'All',
      '.filter-btn[data-filter-btn="ai"]': 'AI',
      '.filter-btn[data-filter-btn="data-analytics"]': 'Data Analytics',
      '.filter-btn[data-filter-btn="apps"]': 'Apps',
      '[data-category="ai"] .project-category': 'AI',
      '[data-category="data-analytics"] .project-category': 'Data Analytics',
      '[data-category="apps"] .project-category': 'Apps',
      'a[href*="Capstone-Project-Majed-"] .project-title': 'Attendees Management System',
      'a[href*="AI-Platform-for-Focus-Analysis"] .project-title': 'AI Platform for Focus Analysis in E-Learning',
      'a[href*="KharafDates.pdf"] .project-title': 'Kharaf Dates',
      'a[href*="diabetes_1.pdf"] .project-title': 'Diabetes Analysis',
      'a[href*="Analysing%20food%20order"] .project-title': 'Online Food Order Analysis',
      'a[href*="EDA%20for%206%2C500"] .project-title': 'Tuwaiq Academy Student EDA',
      'a[href*="PowerBI-Dashboard"] .project-title': 'Dashboard using Power BI',
      'a[href*="Bootcamp-Project-1-Python"] .project-title': 'Guess Number Game',
      '#contact .section-eyebrow': 'Get in touch',
      '#contact .section-title': 'Contact',
      '#contact .section-lead': 'Reach out by email or phone.',
      '#contact .contact-card:nth-child(1) .contact-label': 'Email',
      '#contact .contact-card:nth-child(2) .contact-label': 'Phone',
      '#contact .contact-card:nth-child(3) .contact-label': 'Location',
      '#contact .contact-card:nth-child(3) .contact-value': 'Riyadh, KSA',
      '.footer p': '© 2026 Hesham Alsadan. All rights reserved.',
      '.bottom-nav-link[href="#home"] span': 'Home',
      '.bottom-nav-link[href="#about"] span': 'About',
      '.bottom-nav-link[href="#portfolio"] span': 'Work',
      '.bottom-nav-link[href="#contact"] span': 'Contact'
    },
    html: {
      '.nav-cv-desktop': '<i class="fa-solid fa-download"></i> CV',
      '.nav-cv-mobile': '<i class="fa-solid fa-download"></i> Download CV',
      '.hero-subtitle': 'Data Scientist <span class="accent">&amp;</span> AI Engineer',
      '.quick-link[href="#about"]': '<i class="fa-solid fa-user"></i> About',
      '.quick-link[href="#experience"]': '<i class="fa-solid fa-briefcase"></i> Experience',
      '.quick-link[href="#skills"]': '<i class="fa-solid fa-star"></i> Skills',
      '.quick-link[href="#portfolio"]': '<i class="fa-solid fa-folder-open"></i> Projects',
      '.about-facts li:nth-child(1)': '<i class="fa-solid fa-location-dot accent"></i> Riyadh, KSA',
      '.about-facts li:nth-child(2)': '<i class="fa-solid fa-phone accent"></i> <span dir="ltr">966-507-050-338</span>',
      '.about-facts li:nth-child(3)': '<i class="fa-solid fa-envelope accent"></i> <span dir="ltr">HeshamAlsadan@gmail.com</span>',
      '.about-facts li:nth-child(4)': '<i class="fa-solid fa-language accent"></i> Arabic &amp; English',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-capstone': '<strong>Capstone — AI Focus Analyzer for E-Learning:</strong> developed an AI platform to analyze student focus during e-learning using facial recognition and quiz performance. <em>Tools: MediaPipe, OpenAI GPT-3.5, Whisper, Streamlit.</em>',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-capstone': '<strong>Capstone — Hadir, Management Attendance System:</strong> developed an automated student attendance system using facial recognition that classifies student images and records attendance as students enter the classroom. <em>Tools: YOLO, Keras, Roboflow.</em>',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-capstone': '<strong>Capstone — Haraf, Your Farming Companion:</strong> built from scratch, this CNN-based image classification project identifies date types, maturity, grades, and palm tree diseases. <em>Tools: Python, TensorFlow, Plotly Dash.</em>',
      '#skills .skill-card:nth-child(1) h3': '<i class="fa-solid fa-code accent"></i> Programming Languages',
      '#skills .skill-card:nth-child(2) h3': '<i class="fa-solid fa-network-wired accent"></i> ML / DL Frameworks',
      '#skills .skill-card:nth-child(3) h3': '<i class="fa-solid fa-toolbox accent"></i> Tools &amp; Technologies',
      '#skills .skill-card:nth-child(4) h3': '<i class="fa-solid fa-lightbulb accent"></i> Core Competencies'
    },
    attrs: {
      '[data-nav-menu]': { 'aria-label': 'Main navigation' },
      '.hero-quick-nav': { 'aria-label': 'Quick section links' },
      '.filter-list': { 'aria-label': 'Project categories' },
      '[data-bottom-nav]': { 'aria-label': 'Mobile section navigation' },
      '.hero-avatar img': { alt: 'Hesham Alsadan' },
      'a[href*="Capstone-Project-Majed-"]': { 'aria-label': 'View Attendees Management System GitHub Repository' },
      'a[href*="KharafDates.pdf"]': { 'aria-label': 'View Kharaf Dates quality report (PDF)' },
      'a[href*="diabetes_1.pdf"]': { 'aria-label': 'View diabetes analysis case study' },
      'a[href*="Analysing%20food%20order"]': { 'aria-label': 'Comprehensive food order online analysis report' },
      'a[href*="EDA%20for%206%2C500"]': { 'aria-label': 'Comprehensive exploratory data analysis for Tuwaiq Academy students' },
      'video[poster$="attendees_poster.jpg"]': { 'aria-label': 'AI-powered attendee management system' },
      'video[poster$="focus_analysis_poster.jpg"]': { 'aria-label': 'Real-time attention tracking demo in virtual classroom' },
      'img[src$="KharafDates.jpg"]': { alt: 'Date quality analysis visualization' },
      'img[src$="diabetes.jpg"]': { alt: 'Diabetes risk factor visualization' },
      'img[src$="Analysing_food_order_online.jpg"]': { alt: 'Detailed analysis of online food ordering trends' },
      'img[src*="EDA for 6,500 students"]': { alt: 'Exploratory Data Analysis of 6,500 Tuwaiq Academy students' },
      'img[src$="dashboard.png"]': { alt: 'Power BI dashboard' },
      'img[src$="Guess.jpg"]': { alt: 'Guess Number Game' },
      '[data-back-to-top]': { 'aria-label': 'Back to top' }
    }
  },
  ar: {
    title: 'هشام السعدان — عالم بيانات وذكاء اصطناعي',
    description: 'معرض أعمال هشام السعدان — معلّم حاسب، عالم بيانات ومهندس ذكاء اصطناعي. أكثر من 1,500 ساعة تدريب مع كاوست وسدايا وطويق وSDA.',
    langButton: 'English',
    langButtonAria: 'التبديل إلى الإنجليزية',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    text: {
      '.nav-links .nav-link[href="#home"]': 'الرئيسية',
      '.nav-links .nav-link[href="#about"]': 'عني',
      '.nav-links .nav-link[href="#experience"]': 'خبراتي',
      '.nav-links .nav-link[href="#skills"]': 'مهاراتي',
      '.nav-links .nav-link[href="#portfolio"]': 'مشاريعي',
      '.nav-links .nav-link[href="#contact"]': 'تواصل معي',
      '.hero-eyebrow': 'مرحباً، أنا',
      '.hero-title': 'هشام السعدان',
      '.hero-text': 'معلّم حاسب ومهتم بالذكاء الاصطناعي في الرياض — أكثر من 1,500 ساعة تدريب مع كاوست وسدايا وطويق وSDA في Python والذكاء الاصطناعي والحوسبة السحابية والبنية التحتية لـ GPU.',
      '.hero-actions .btn-primary': 'شوف مشاريعي',
      '.hero-actions .btn-outline': 'تواصل معي',
      '#about .section-eyebrow': 'تعرّف عليّ',
      '#about .section-title': 'من أنا',
      '#about .section-lead': 'نبذة سريعة عني ومجالات اهتمامي.',
      '.about-text p:nth-of-type(1)': 'أعمل في علوم البيانات والذكاء الاصطناعي، وأدرّس الحاسب الآلي. عندي خبرة عملية في التعلم الآلي والرؤية الحاسوبية وتطوير تطبيقات الويب.',
      '.about-text p:nth-of-type(2)': 'شاركت في 6 معسكرات و5 برامج مع كاوست وسدايا وأكاديمية طويق وSDA — أكثر من 1,500 ساعة تدريب في Python والذكاء الاصطناعي وعلوم البيانات وتطوير الويب وإنترنت الأشياء والحوسبة السحابية والبنية التحتية لـ GPU، وحضوري كان 100%. حالياً أدرّس الحاسب لـ170 طالباً في وزارة التعليم، وأطوّر حلول ذكاء اصطناعي قابلة للتطبيق.',
      '.service-card:nth-child(1) h3': 'علوم البيانات',
      '.service-card:nth-child(1) p': 'أحلل البيانات وأستخرج منها رؤى تساعد في اتخاذ القرار.',
      '.service-card:nth-child(2) h3': 'الذكاء الاصطناعي',
      '.service-card:nth-child(2) p': 'أبني أنظمة ذكية ونماذج رؤية حاسوبية وتعلم عميق.',
      '.service-card:nth-child(3) h3': 'عرض البيانات',
      '.service-card:nth-child(3) p': 'أصمم لوحات معلومات تخلي البيانات أسهل للفهم والمتابعة.',
      '.service-card:nth-child(4) h3': 'تطوير الويب',
      '.service-card:nth-child(4) p': 'أطوّر تطبيقات ويب بـ Python وDjango مع تركيز على تجربة المستخدم.',
      '#experience > .container > h2.section-title:first-of-type': 'خبراتي',
      '#experience > .container > .section-eyebrow': 'مسيرتي',
      '#experience > .container > .section-lead': 'تدريب، تعليم، ونمو مهني.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-date': 'يونيو 2026 - الآن',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-title': "تسارُع — معسكر هندسة GPU",
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-org': 'أكاديمية طويق',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(1) .timeline-text': 'أكثر من 8 أسابيع عملية في البنية التحتية للذكاء الاصطناعي: نماذج LLM والمحولات، الذكاء الاصطناعي الوكيلي، بنية GPU ومراكز البيانات، CUDA، PyTorch، التدريب الموزع على عدة معالجات، الضبط الدقيق، والتقييم والتشغيل الإنتاجي.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-date': 'أغسطس 2025 - الآن',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-title': 'معلّم حاسب آلي',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-org': 'وزارة التعليم',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(2) .timeline-text': 'أدرّس الحاسب لطلاب ابتدائي ومتوسط — 170 طالباً.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-date': '10 مايو 2026 - 25 يونيو 2026',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-title': 'معسكر تطوير البرمجيات بـ Python',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-org': 'الأكاديمية السعودية الرقمية — SDA',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(3) .timeline-text': '7 أسابيع في تطوير البرمجيات بـ Python وFastAPI وReact وPostgreSQL، مع مشاريع عملية حقيقية.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-date': 'يناير - فبراير 2026',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-title': 'الذكاء الاصطناعي المتقدم',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-org': 'كاوست — جامعة الملك عبدالله للعلوم والتقنية',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(4) .timeline-text': '80 ساعة تدريب متقدم في الذكاء الاصطناعي، طوّرت فيها فهمي للتقنيات والنماذج الحديثة.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-date': 'يونيو 2025 - أغسطس 2025',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-title': 'معسكر تطوير الويب',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-org': 'أكاديمية طويق',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(5) .timeline-text': '300 ساعة في Python وتطوير الويب الكامل، مع التركيز على Django وتقنيات الويب الحديثة.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-date': 'سبتمبر 2024 - أكتوبر 2024',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-title': 'معسكر الذكاء الاصطناعي',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-org': 'أكاديمية طويق',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-text': '200 ساعة في الذكاء الاصطناعي والتعلم الآلي والتعلم العميق، مع تطبيق عملي مباشر.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-date': 'مارس 2024 - يونيو 2024',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-title': 'معسكر علوم البيانات والذكاء الاصطناعي T5',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-org': 'سدايا',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-text': '360 ساعة شملت SQL وPython وتحليل البيانات والتعلم الآلي والعميق (CNN وRNN) وMLOps.',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-date': 'أكتوبر 2023 - ديسمبر 2023',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-title': 'معسكر علوم البيانات وتعلم الآلة',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-org': 'أكاديمية طويق',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-text': '200 ساعة، 5 مشاريع و50 تمريناً باستخدام Python وSQL وPandas وTableau وTensorFlow. تعلّمت تعلم الآلة (SVM وDecision Tree وRandom Forest) والتعلم العميق (CNNs).',
      '#experience .section-title-secondary': 'التعليم',
      '#experience ol.timeline:last-of-type .timeline-title': 'بكالوريوس علوم الحاسب',
      '#experience ol.timeline:last-of-type .timeline-org': 'جامعة الملك سعود',
      '#experience ol.timeline:last-of-type .timeline-text': 'درست البرمجة والخوارزميات وهياكل البيانات وقواعد البيانات وأنظمة التشغيل وتطوير البرمجيات.',
      '#skills .section-eyebrow': 'أدواتي ومهاراتي',
      '#skills .section-title': 'المهارات والشهادات',
      '#skills .section-lead': 'التقنيات والشهادات اللي أستخدمها.',
      '#skills .skill-card:nth-child(1) .tag-list li:nth-child(3)': 'جافاسكريبت',
      '#skills .skill-card:nth-child(3) .tag-list li:nth-child(4)': 'الحوسبة السحابية',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(1)': 'تحليل البيانات',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(2)': 'التعلم العميق',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(3)': 'حل المشكلات',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(4)': 'العمل الجماعي',
      '#skills .skill-card:nth-child(4) .tag-list li:nth-child(5)': 'القيادة',
      '#skills .cert-heading': 'الشهادات',
      '#skills .cert-item:nth-child(1) .cert-name': 'تطبيقات معالجة اللغة بالمحولات',
      '#skills .cert-item:nth-child(1) .cert-meta': 'NVIDIA · يناير 2026',
      '#skills .cert-item:nth-child(2) .cert-name': 'بناء ومعايرة الدرونز',
      '#skills .cert-item:nth-child(2) .cert-meta': 'SAFCSP · مايو 2025',
      '#skills .cert-item:nth-child(3) .cert-name': 'شهادة إنترنت الأشياء',
      '#skills .cert-item:nth-child(3) .cert-meta': 'أكاديمية طويق · مايو 2025',
      '#skills .cert-item:nth-child(4) .cert-name': 'مهندس حوسبة سحابية',
      '#skills .cert-item:nth-child(4) .cert-meta': 'أكاديمية طويق · مارس 2025',
      '#skills .cert-item:nth-child(5) .cert-name': 'تطوير تطبيقات النماذج اللغوية الكبيرة',
      '#skills .cert-item:nth-child(5) .cert-meta': 'مجمع الملك سلمان العالمي للغة العربية · ديسمبر 2023',
      '#portfolio .section-eyebrow': 'مشاريع مختارة',
      '#portfolio .section-title': 'مشاريعي',
      '#portfolio .section-lead': 'اختر نوع المشروع للتصفية.',
      '.filter-btn[data-filter-btn="all"]': 'الكل',
      '.filter-btn[data-filter-btn="ai"]': 'ذكاء اصطناعي',
      '.filter-btn[data-filter-btn="data-analytics"]': 'تحليل بيانات',
      '.filter-btn[data-filter-btn="apps"]': 'تطبيقات',
      '[data-category="ai"] .project-category': 'ذكاء اصطناعي',
      '[data-category="data-analytics"] .project-category': 'تحليل بيانات',
      '[data-category="apps"] .project-category': 'تطبيقات',
      'a[href*="Capstone-Project-Majed-"] .project-title': 'نظام إدارة الحضور',
      'a[href*="AI-Platform-for-Focus-Analysis"] .project-title': 'منصة تحليل تركيز الطلاب في التعليم الإلكتروني',
      'a[href*="KharafDates.pdf"] .project-title': 'خراف للتمور',
      'a[href*="diabetes_1.pdf"] .project-title': 'تحليل مرض السكري',
      'a[href*="Analysing%20food%20order"] .project-title': 'تحليل طلبات الطعام أونلاين',
      'a[href*="EDA%20for%206%2C500"] .project-title': 'تحليل بيانات طلاب أكاديمية طويق',
      'a[href*="PowerBI-Dashboard"] .project-title': 'لوحة معلومات Power BI',
      'a[href*="Bootcamp-Project-1-Python"] .project-title': 'لعبة تخمين الرقم',
      '#contact .section-eyebrow': 'تواصل معي',
      '#contact .section-title': 'تواصل معي',
      '#contact .section-lead': 'راسلني على الإيميل أو الجوال.',
      '#contact .contact-card:nth-child(1) .contact-label': 'الإيميل',
      '#contact .contact-card:nth-child(2) .contact-label': 'الجوال',
      '#contact .contact-card:nth-child(3) .contact-label': 'الموقع',
      '#contact .contact-card:nth-child(3) .contact-value': 'الرياض، السعودية',
      '.footer p': '© 2026 هشام السعدان. جميع الحقوق محفوظة.',
      '.bottom-nav-link[href="#home"] span': 'الرئيسية',
      '.bottom-nav-link[href="#about"] span': 'عني',
      '.bottom-nav-link[href="#portfolio"] span': 'مشاريعي',
      '.bottom-nav-link[href="#contact"] span': 'تواصل'
    },
    html: {
      '.nav-cv-desktop': '<i class="fa-solid fa-download"></i> السيرة',
      '.nav-cv-mobile': '<i class="fa-solid fa-download"></i> حمّل السيرة الذاتية',
      '.hero-subtitle': 'عالم بيانات <span class="accent">و</span> مهندس ذكاء اصطناعي',
      '.quick-link[href="#about"]': '<i class="fa-solid fa-user"></i> عني',
      '.quick-link[href="#experience"]': '<i class="fa-solid fa-briefcase"></i> خبراتي',
      '.quick-link[href="#skills"]': '<i class="fa-solid fa-star"></i> مهاراتي',
      '.quick-link[href="#portfolio"]': '<i class="fa-solid fa-folder-open"></i> مشاريعي',
      '.about-facts li:nth-child(1)': '<i class="fa-solid fa-location-dot accent"></i> الرياض، السعودية',
      '.about-facts li:nth-child(2)': '<i class="fa-solid fa-phone accent"></i> <span dir="ltr">966-507-050-338</span>',
      '.about-facts li:nth-child(3)': '<i class="fa-solid fa-envelope accent"></i> <span dir="ltr">HeshamAlsadan@gmail.com</span>',
      '.about-facts li:nth-child(4)': '<i class="fa-solid fa-language accent"></i> العربية والإنجليزية',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(6) .timeline-capstone': '<strong>مشروع التخرج — محلل التركيز للتعليم الإلكتروني:</strong> بنيت منصة تستخدم التعرف على الوجوه ونتائج الاختبارات لقياس تركيز الطلاب أثناء التعلم عن بُعد. <em>الأدوات: MediaPipe, OpenAI GPT-3.5, Whisper, Streamlit.</em>',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(7) .timeline-capstone': '<strong>مشروع التخرج — حاضر:</strong> نظام حضور ذكي يتعرّف على وجوه الطلاب ويسجّل حضورهم تلقائياً عند دخولهم الصف. <em>الأدوات: YOLO, Keras, Roboflow.</em>',
      '#experience ol.timeline:first-of-type .timeline-item:nth-child(8) .timeline-capstone': '<strong>مشروع التخرج — خراف:</strong> مشروع تصنيف صور بالـ CNN يحدد نوع التمر ومستوى النضج والأمراض. <em>الأدوات: Python, TensorFlow, Plotly Dash.</em>',
      '#skills .skill-card:nth-child(1) h3': '<i class="fa-solid fa-code accent"></i> لغات البرمجة',
      '#skills .skill-card:nth-child(2) h3': '<i class="fa-solid fa-network-wired accent"></i> أطر التعلم الآلي والعميق',
      '#skills .skill-card:nth-child(3) h3': '<i class="fa-solid fa-toolbox accent"></i> الأدوات والتقنيات',
      '#skills .skill-card:nth-child(4) h3': '<i class="fa-solid fa-lightbulb accent"></i> المهارات الأساسية'
    },
    attrs: {
      '[data-nav-menu]': { 'aria-label': 'القائمة الرئيسية' },
      '.hero-quick-nav': { 'aria-label': 'روابط سريعة' },
      '.filter-list': { 'aria-label': 'أنواع المشاريع' },
      '[data-bottom-nav]': { 'aria-label': 'قائمة التنقل' },
      '.hero-avatar img': { alt: 'هشام السعدان' },
      'a[href*="Capstone-Project-Majed-"]': { 'aria-label': 'عرض مشروع نظام إدارة الحضور على GitHub' },
      'a[href*="KharafDates.pdf"]': { 'aria-label': 'عرض تقرير خراف للتمور (PDF)' },
      'a[href*="diabetes_1.pdf"]': { 'aria-label': 'عرض تحليل مرض السكري' },
      'a[href*="Analysing%20food%20order"]': { 'aria-label': 'عرض تحليل طلبات الطعام أونلاين' },
      'a[href*="EDA%20for%206%2C500"]': { 'aria-label': 'عرض تحليل بيانات طلاب أكاديمية طويق' },
      'video[poster$="attendees_poster.jpg"]': { 'aria-label': 'عرض نظام إدارة الحضور بالذكاء الاصطناعي' },
      'video[poster$="focus_analysis_poster.jpg"]': { 'aria-label': 'عرض تتبع انتباه الطلاب في الفصل الافتراضي' },
      'img[src$="KharafDates.jpg"]': { alt: 'تحليل جودة التمور' },
      'img[src$="diabetes.jpg"]': { alt: 'تحليل عوامل خطر السكري' },
      'img[src$="Analysing_food_order_online.jpg"]': { alt: 'تحليل اتجاهات طلب الطعام أونلاين' },
      'img[src*="EDA for 6,500 students"]': { alt: 'تحليل بيانات 6,500 طالب من أكاديمية طويق' },
      'img[src$="dashboard.png"]': { alt: 'لوحة معلومات Power BI' },
      'img[src$="Guess.jpg"]': { alt: 'لعبة تخمين الرقم' },
      '[data-back-to-top]': { 'aria-label': 'ارجع للأعلى' }
    }
  }
};

let currentLang = 'en';

const t = (key) => translations[currentLang][key] || translations.en[key] || '';

const getSavedLanguage = () => {
  try {
    return localStorage.getItem(LANG_KEY) === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
};

const saveLanguage = (lang) => {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Ignore blocked storage; the switch still works for this page load.
  }
};

const setLanguage = (lang) => {
  currentLang = lang === 'ar' ? 'ar' : 'en';
  const dict = translations[currentLang];

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.title = dict.title;
  if (metaDescription) metaDescription.content = dict.description;

  Object.entries(dict.text).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = value;
    });
  });

  Object.entries(dict.html).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = value;
    });
  });

  Object.entries(dict.attrs).forEach(([selector, attrs]) => {
    document.querySelectorAll(selector).forEach(el => {
      Object.entries(attrs).forEach(([name, value]) => el.setAttribute(name, value));
    });
  });

  if (langToggle) {
    langToggle.textContent = dict.langButton;
    langToggle.setAttribute('aria-label', dict.langButtonAria);
  }

  if (navToggle) {
    navToggle.setAttribute('aria-label', t(navMenu.classList.contains('open') ? 'menuClose' : 'menuOpen'));
  }

  saveLanguage(currentLang);
};

const setMenuOpen = (open) => {
  navMenu.classList.toggle('open', open);
  navBackdrop.hidden = !open;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
  navIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  document.body.classList.toggle('menu-open', open);
};

setLanguage(getSavedLanguage());

/* ===== Navbar: scrolled state ===== */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  if (backToTop) backToTop.hidden = window.scrollY < 500;
}, { passive: true });

navToggle.addEventListener('click', () => {
  setMenuOpen(!navMenu.classList.contains('open'));
});

navBackdrop.addEventListener('click', () => setMenuOpen(false));

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const getBottomNavTarget = (sectionId) => {
  if (sectionId === 'experience' || sectionId === 'skills') return 'about';
  return sectionId;
};

const setActiveNav = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  const bottomTarget = getBottomNavTarget(id);
  bottomNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${bottomTarget}`);
  });
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActiveNav(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

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
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects((btn.dataset.filterBtn || 'all').toLowerCase());
  });
});

/* ===== Scroll reveal ===== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealElements.forEach(el => revealObserver.observe(el));
