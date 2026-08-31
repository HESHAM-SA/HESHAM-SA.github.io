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
const projectVideos = document.querySelectorAll('[data-project-video]');
const certStream = document.querySelector('[data-cert-stream]');
const certTrack = certStream && certStream.querySelector('[data-cert-track]');
const certSet = certStream && certStream.querySelector('[data-cert-set]');

const translations = {
  en: {
    title: 'Hesham Alsadan — AI Engineer & Data Science',
    description: 'Portfolio of Hesham Alsadan — AI Engineer and Data Scientist in Riyadh, looking for opportunities in EdTech. 1,500+ hours of training across KAUST, SDAIA, Tuwaiq, and SDA.',
    langButtonAria: 'Switch to Arabic',
    certOpenLabel: 'Open certificate',
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
      '.hero-text': 'AI Engineer and Data Scientist based in Riyadh, building practical AI and data solutions — looking for opportunities in EdTech.',
      '.hero-actions .btn-primary': 'View Projects',
      '.hero-actions .btn-outline': 'Contact Me',
      '#about .section-eyebrow': 'Get to know me',
      '#about .section-title': 'About Me',
      '#about .section-lead': 'Who I am, what I focus on, and the kind of work I\'m looking for.',
      '.about-text p:nth-of-type(1)': 'I\'m an AI Engineer and Data Scientist focused on building intelligent systems and data-driven solutions — and I\'m looking to work in EdTech.',
      '.about-text p:nth-of-type(2)': 'Through 6 bootcamps and 5 programs at KAUST, SDAIA, Tuwaiq Academy, and SDA, I\'ve completed 1,500+ hours of training in Python, AI, data science, full-stack development, IoT, cloud, and GPU infrastructure.',
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
      '#experience > .container > .section-lead': 'Training and professional growth.',
      '[data-exp="cs-instructor"] .timeline-date': 'Aug 2025 - Present',
      '[data-exp="cs-instructor"] .timeline-title': 'Computer Science Instructor',
      '[data-exp="cs-instructor"] .timeline-org': 'Ministry of Education',
      '[data-exp="cs-instructor"] .timeline-text': 'Teaching over 170 elementary and middle school students with a hands-on, \u201Clearn-by-doing\u201D approach, powered by custom-built AI educational platforms that turn core computing concepts into interactive, practical projects.',
      '[data-exp="gpu"] .timeline-date': 'Jun 2026 - Aug 2026',
      '[data-exp="gpu"] .timeline-title': "Tasar'u — GPU Engineering Bootcamp | تسارُع",
      '[data-exp="gpu"] .timeline-org': 'Tuwaiq Academy',
      '[data-exp="gpu"] .timeline-text': 'Completed 9 intensive hands-on weeks across the full AI-infrastructure stack: LLMs and Transformers, agentic AI, GPU and datacenter architecture, CUDA, high-performance PyTorch, multi-GPU and multi-node distributed training, fine-tuning, evaluation, and production inference at scale. Graduated with a professional NVIDIA certification in AI Infrastructure.',
      '[data-exp="sda-python"] .timeline-date': 'May 10, 2026 - Jun 25, 2026',
      '[data-exp="sda-python"] .timeline-title': 'Software Development using Python Bootcamp Trainee',
      '[data-exp="sda-python"] .timeline-org': 'SDA — Saudi Digital Academy',
      '[data-exp="sda-python"] .timeline-text': 'Completed a 7-week intensive journey in software development using Python, FastAPI, React, and PostgreSQL, building practical programming skills and real-world application experience.',
      '[data-exp="kaust-ai"] .timeline-date': 'Jan - Feb 2026',
      '[data-exp="kaust-ai"] .timeline-title': 'Advanced Artificial Intelligence',
      '[data-exp="kaust-ai"] .timeline-org': 'KAUST — King Abdullah University of Science and Technology',
      '[data-exp="kaust-ai"] .timeline-text': 'Completed 80 hours of advanced training in artificial intelligence, deepening expertise in modern AI techniques, models, and applications.',
      '[data-exp="web-dev"] .timeline-date': 'Jun 2025 - Aug 2025',
      '[data-exp="web-dev"] .timeline-title': 'Web Development Bootcamp Trainee',
      '[data-exp="web-dev"] .timeline-org': 'Tuwaiq Academy',
      '[data-exp="web-dev"] .timeline-text': 'Completed 300 hours of intensive training in Python and full-stack web development, with a focus on Django and modern web technologies.',
      '[data-exp="ai-bootcamp"] .timeline-date': 'Sep 2024 - Oct 2024',
      '[data-exp="ai-bootcamp"] .timeline-title': 'AI Bootcamp Trainee',
      '[data-exp="ai-bootcamp"] .timeline-org': 'Tuwaiq Academy',
      '[data-exp="ai-bootcamp"] .timeline-text': 'Completed 200 hours of intensive training, gaining hands-on experience in AI, machine learning, and deep learning.',
      '[data-exp="t5"] .timeline-date': 'Mar 2024 - Jun 2024',
      '[data-exp="t5"] .timeline-title': 'Data Science and AI T5 Bootcamp Trainee',
      '[data-exp="t5"] .timeline-org': 'SDAIA',
      '[data-exp="t5"] .timeline-text': 'Completed 360 hours of intensive training, covering SQL, Python, data analysis, machine learning, deep learning (CNN, RNN), and MLOps.',
      '[data-exp="ds-ml"] .timeline-date': 'Oct 2023 - Dec 2023',
      '[data-exp="ds-ml"] .timeline-title': 'Data Science and Machine Learning Bootcamp Trainee',
      '[data-exp="ds-ml"] .timeline-org': 'Tuwaiq Academy',
      '[data-exp="ds-ml"] .timeline-text': 'Completed 200 hours of intensive training, building 5 projects and 50 labs using Python, SQL, Pandas, Tableau, and TensorFlow. Gained expertise in machine learning (SVM, Decision Tree, Random Forest) and deep learning (CNNs).',
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
      '#skills .cert-lead': 'A live stream of everything I\'ve earned. Drag it left or right to browse at your own pace, hover a certificate to enlarge it, or click to open the original.',
      '#skills .cert-issuers-label': 'Issued by',
      '[data-cert="nvidia-ai-infra"] .cert-name': 'NVIDIA Certified Associate — AI Infrastructure & Operations',
      '[data-cert="nvidia-ai-infra"] .cert-meta': 'NVIDIA · Aug 2026',
      '[data-cert="sda-python"] .cert-name': 'Software Development using Python Bootcamp',
      '[data-cert="sda-python"] .cert-meta': 'Saudi Digital Academy · 300 hrs · Jun 2026',
      '[data-cert="nvidia-transformers"] .cert-name': 'Building Transformer-Based NLP Applications',
      '[data-cert="nvidia-transformers"] .cert-meta': 'NVIDIA · Mar 2026',
      '[data-cert="kaust-ai"] .cert-name': 'Advanced Artificial Intelligence — Computer Vision',
      '[data-cert="kaust-ai"] .cert-meta': 'KAUST Academy · 80+ hrs · Feb 2026',
      '[data-cert="web-bootcamp"] .cert-name': 'Web Development using Python Bootcamp',
      '[data-cert="web-bootcamp"] .cert-meta': 'Tuwaiq Academy · 300 hrs · Sep 2025',
      '[data-cert="drones"] .cert-name': 'Drone Building & Calibration',
      '[data-cert="drones"] .cert-meta': 'SAFCSP · 20 hrs · May 2025',
      '[data-cert="iot"] .cert-name': 'IoT Fundamentals',
      '[data-cert="iot"] .cert-meta': 'Tuwaiq Academy · 25 hrs · May 2025',
      '[data-cert="cloud"] .cert-name': 'Cloud Computing Engineer',
      '[data-cert="cloud"] .cert-meta': 'Alibaba Cloud · Mar 2025',
      '[data-cert="ai-bootcamp"] .cert-name': 'Building & Developing AI Models Bootcamp',
      '[data-cert="ai-bootcamp"] .cert-meta': 'Tuwaiq Academy · 200 hrs · Oct 2024',
      '[data-cert="t5"] .cert-name': 'T5 Data Science & AI Bootcamp',
      '[data-cert="t5"] .cert-meta': 'SDAIA Academy · 360 hrs · Jun 2024',
      '[data-cert="ds-bootcamp"] .cert-name': 'Data Science Bootcamp',
      '[data-cert="ds-bootcamp"] .cert-meta': 'Tuwaiq Academy · 200 hrs · Dec 2023',
      '[data-cert="llm-apps"] .cert-name': 'LLM Application Development',
      '[data-cert="llm-apps"] .cert-meta': 'King Salman Global Academy · 16 hrs · Dec 2023',
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
      '[data-project="attendees"] .project-title': 'Attendees Management System',
      '[data-project="attendees"] .project-description': 'Automated classroom attendance with face recognition and AI-backed verification.',
      '[data-project="attendees"] .project-link-label': 'View GitHub',
      '[data-project="focus"] .project-title': 'AI Platform for Focus Analysis in E-Learning',
      '[data-project="focus"] .project-description': 'Tracks learner attention in e-learning sessions using face analysis and quiz performance.',
      '[data-project="focus"] .project-link-label': 'View GitHub',
      '[data-project="kharaf"] .project-title': 'Kharaf Dates',
      '[data-project="kharaf"] .project-description': 'CNN-based date-quality classifier for type, maturity, grade, and palm disease signals.',
      '[data-project="kharaf"] .project-link-label': 'View report',
      '[data-project="diabetes"] .project-title': 'Diabetes Analysis',
      '[data-project="diabetes"] .project-description': 'Data analysis report exploring diabetes risk factors and health patterns.',
      '[data-project="diabetes"] .project-link-label': 'View report',
      '[data-project="food"] .project-title': 'Online Food Order Analysis',
      '[data-project="food"] .project-description': 'EDA report uncovering customer behavior and trends in online food orders.',
      '[data-project="food"] .project-link-label': 'View report',
      '[data-project="tuwaiq"] .project-title': 'Tuwaiq Academy Student EDA',
      '[data-project="tuwaiq"] .project-description': 'Exploratory analysis of 6,500 Tuwaiq Academy students and training patterns.',
      '[data-project="tuwaiq"] .project-link-label': 'View report',
      '[data-project="powerbi"] .project-title': 'Dashboard using Power BI',
      '[data-project="powerbi"] .project-description': 'Interactive Power BI dashboard for cleaning, modeling, and visualizing business data.',
      '[data-project="powerbi"] .project-link-label': 'View GitHub',
      '[data-project="halaorder"] .project-title': 'HalaOrder Restaurant Platform',
      '[data-project="halaorder"] .project-description': 'Multi-tenant Django platform where restaurants launch a storefront, manage menus and branches, and track orders live.',
      '[data-project="halaorder"] .project-link-label': 'View GitHub',
      '[data-project="portfolio-builder"] .project-title': 'Portfolio Builder',
      '[data-project="portfolio-builder"] .project-description': 'Django app that turns a name and a few career events into a shareable timeline portfolio, with no signup.',
      '[data-project="portfolio-builder"] .project-link-label': 'View GitHub',
      '[data-project="guess"] .project-title': 'Guess Number Game',
      '[data-project="guess"] .project-description': 'Simple Python number guessing game focused on control flow and user input.',
      '[data-project="guess"] .project-link-label': 'View GitHub',
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
      '.hero-subtitle': 'AI Engineer <span class="accent">|</span> Data Science',
      '.quick-link[href="#about"]': '<i class="fa-solid fa-user"></i> About',
      '.quick-link[href="#experience"]': '<i class="fa-solid fa-briefcase"></i> Experience',
      '.quick-link[href="#skills"]': '<i class="fa-solid fa-star"></i> Skills',
      '.quick-link[href="#portfolio"]': '<i class="fa-solid fa-folder-open"></i> Projects',
      '.about-facts li:nth-child(1)': '<i class="fa-solid fa-location-dot accent"></i> Riyadh, KSA',
      '.about-facts li:nth-child(2)': '<i class="fa-solid fa-phone accent"></i> <span dir="ltr">966-507-050-338</span>',
      '.about-facts li:nth-child(3)': '<i class="fa-solid fa-envelope accent"></i> <span dir="ltr">HeshamAlsadan@gmail.com</span>',
      '.about-facts li:nth-child(4)': '<i class="fa-solid fa-language accent"></i> Arabic &amp; English',
      '[data-exp="gpu"] .timeline-capstone': '<strong>Research Paper — Recovering Accuracy After Low-Bit Quantization:</strong> studied and extended prior work on model compression, then presented a paper on improving the accuracy of AI models quantized from FP16 down to NVFP4. <em>Tools: PyTorch, CUDA, NVIDIA TensorRT Model Optimizer.</em>',
      '[data-exp="ai-bootcamp"] .timeline-capstone': '<strong>Capstone — AI Focus Analyzer for E-Learning:</strong> developed an AI platform to analyze student focus during e-learning using facial recognition and quiz performance. <em>Tools: MediaPipe, OpenAI GPT-3.5, Whisper, Streamlit.</em>',
      '[data-exp="t5"] .timeline-capstone': '<strong>Capstone — Hadir, Management Attendance System:</strong> developed an automated student attendance system using facial recognition that classifies student images and records attendance as students enter the classroom. <em>Tools: YOLO, Keras, Roboflow.</em>',
      '[data-exp="ds-ml"] .timeline-capstone': '<strong>Capstone — Haraf, Your Farming Companion:</strong> built from scratch, this CNN-based image classification project identifies date types, maturity, grades, and palm tree diseases. <em>Tools: Python, TensorFlow, Plotly Dash.</em>',
      '#skills .skill-card:nth-child(1) h3': '<i class="fa-solid fa-code accent"></i> Programming Languages',
      '#skills .skill-card:nth-child(2) h3': '<i class="fa-solid fa-network-wired accent"></i> ML / DL Frameworks',
      '#skills .skill-card:nth-child(3) h3': '<i class="fa-solid fa-toolbox accent"></i> Tools &amp; Technologies',
      '#skills .skill-card:nth-child(4) h3': '<i class="fa-solid fa-lightbulb accent"></i> Core Competencies'
    },
    attrs: {
      '[data-nav-menu]': { 'aria-label': 'Main navigation' },
      '.hero-quick-nav': { 'aria-label': 'Quick section links' },
      '.filter-list': { 'aria-label': 'Project categories' },
      '[data-cert-stream]': { 'aria-label': 'Certificates' },
      '[data-edu="ksu"] .timeline-logo': { alt: 'King Saud University' },
      '[data-exp="cs-instructor"] .timeline-logo': { alt: 'Ministry of Education' },
      '[data-bottom-nav]': { 'aria-label': 'Mobile section navigation' },
      '.hero-avatar img': { alt: 'Hesham Alsadan' },
      '[data-project="attendees"] > a': { 'aria-label': 'View Attendees Management System GitHub Repository' },
      '[data-project="focus"] > a': { 'aria-label': 'View AI Platform for Focus Analysis GitHub Repository' },
      '[data-project="kharaf"] > a': { 'aria-label': 'View Kharaf Dates quality report (PDF)' },
      '[data-project="diabetes"] > a': { 'aria-label': 'View diabetes analysis case study' },
      '[data-project="food"] > a': { 'aria-label': 'Comprehensive food order online analysis report' },
      '[data-project="tuwaiq"] > a': { 'aria-label': 'Comprehensive exploratory data analysis for Tuwaiq Academy students' },
      '[data-project="powerbi"] > a': { 'aria-label': 'View Power BI dashboard GitHub Repository' },
      '[data-project="halaorder"] > a': { 'aria-label': 'View HalaOrder Restaurant Platform GitHub Repository' },
      '[data-project="portfolio-builder"] > a': { 'aria-label': 'View Portfolio Builder GitHub Repository' },
      '[data-project="guess"] > a': { 'aria-label': 'View Guess Number Game GitHub Repository' },
      'video[poster$="attendees_poster.jpg"]': { 'aria-label': 'AI-powered attendee management system' },
      'video[poster$="focus_analysis_poster.jpg"]': { 'aria-label': 'Real-time attention tracking demo in virtual classroom' },
      'video[poster$="portfolio_builder_poster.jpg"]': { 'aria-label': 'No-signup portfolio builder demo' },
      'video[poster$="halaorder_poster.jpg"]': { 'aria-label': 'Restaurant storefront and order management demo' },
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
    title: 'هشام السعدان — مهندس ذكاء اصطناعي وعلوم بيانات',
    description: 'معرض أعمال هشام السعدان — مهندس ذكاء اصطناعي وعالم بيانات في الرياض، أبحث عن فرص في EdTech. أكثر من 1,500 ساعة تدريب مع كاوست وسدايا وطويق وSDA.',
    langButtonAria: 'التبديل إلى الإنجليزية',
    certOpenLabel: 'فتح الشهادة',
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
      '.hero-text': 'مهندس ذكاء اصطناعي وعالم بيانات في الرياض، أبني حلول ذكاء اصطناعي وتحليل بيانات عملية — أبحث عن فرص في EdTech.',
      '.hero-actions .btn-primary': 'شوف مشاريعي',
      '.hero-actions .btn-outline': 'تواصل معي',
      '#about .section-eyebrow': 'تعرّف عليّ',
      '#about .section-title': 'من أنا',
      '#about .section-lead': 'نبذة عني، مجالات اهتمامي، ونوع المشاريع اللي أبحث عنها.',
      '.about-text p:nth-of-type(1)': 'أنا مهندس ذكاء اصطناعي وعالم بيانات، أركّز على بناء أنظمة ذكية وحلول مبنية على البيانات — وأبحث عن العمل في EdTech.',
      '.about-text p:nth-of-type(2)': 'شاركت في 6 معسكرات و5 برامج مع كاوست وسدايا وأكاديمية طويق وSDA — أكثر من 1,500 ساعة تدريب في Python والذكاء الاصطناعي وعلوم البيانات وتطوير الويب وإنترنت الأشياء والحوسبة السحابية والبنية التحتية لـ GPU.',
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
      '#experience > .container > .section-lead': 'تدريب ونمو مهني.',
      '[data-exp="cs-instructor"] .timeline-date': 'أغسطس 2025 - حتى الآن',
      '[data-exp="cs-instructor"] .timeline-title': 'معلم علوم حاسب',
      '[data-exp="cs-instructor"] .timeline-org': 'وزارة التعليم',
      '[data-exp="cs-instructor"] .timeline-text': 'أدرّس أكثر من 170 طالباً في المرحلتين الابتدائية والمتوسطة بأسلوب عملي قائم على التطبيق، مدعوماً بمنصات تعليمية بنيتها بالذكاء الاصطناعي تحوّل مفاهيم الحاسب الأساسية إلى مشاريع تفاعلية وعملية.',
      '[data-exp="gpu"] .timeline-date': 'يونيو 2026 - أغسطس 2026',
      '[data-exp="gpu"] .timeline-title': "تسارُع — معسكر هندسة GPU",
      '[data-exp="gpu"] .timeline-org': 'أكاديمية طويق',
      '[data-exp="gpu"] .timeline-text': '9 أسابيع مكثفة في البنية التحتية للذكاء الاصطناعي: نماذج LLM والمحولات، الذكاء الاصطناعي الوكيلي، بنية GPU ومراكز البيانات، CUDA، PyTorch عالي الأداء، التدريب الموزع على عدة معالجات وعدة أجهزة، الضبط الدقيق، والتقييم والتشغيل الإنتاجي. وتُوّجت بشهادة احترافية معتمدة من NVIDIA في البنية التحتية للذكاء الاصطناعي.',
      '[data-exp="sda-python"] .timeline-date': '10 مايو 2026 - 25 يونيو 2026',
      '[data-exp="sda-python"] .timeline-title': 'معسكر تطوير البرمجيات بـ Python',
      '[data-exp="sda-python"] .timeline-org': 'الأكاديمية السعودية الرقمية — SDA',
      '[data-exp="sda-python"] .timeline-text': '7 أسابيع في تطوير البرمجيات بـ Python وFastAPI وReact وPostgreSQL، مع مشاريع عملية حقيقية.',
      '[data-exp="kaust-ai"] .timeline-date': 'يناير - فبراير 2026',
      '[data-exp="kaust-ai"] .timeline-title': 'الذكاء الاصطناعي المتقدم',
      '[data-exp="kaust-ai"] .timeline-org': 'كاوست — جامعة الملك عبدالله للعلوم والتقنية',
      '[data-exp="kaust-ai"] .timeline-text': '80 ساعة تدريب متقدم في الذكاء الاصطناعي، طوّرت فيها فهمي للتقنيات والنماذج الحديثة.',
      '[data-exp="web-dev"] .timeline-date': 'يونيو 2025 - أغسطس 2025',
      '[data-exp="web-dev"] .timeline-title': 'معسكر تطوير الويب',
      '[data-exp="web-dev"] .timeline-org': 'أكاديمية طويق',
      '[data-exp="web-dev"] .timeline-text': '300 ساعة في Python وتطوير الويب الكامل، مع التركيز على Django وتقنيات الويب الحديثة.',
      '[data-exp="ai-bootcamp"] .timeline-date': 'سبتمبر 2024 - أكتوبر 2024',
      '[data-exp="ai-bootcamp"] .timeline-title': 'معسكر الذكاء الاصطناعي',
      '[data-exp="ai-bootcamp"] .timeline-org': 'أكاديمية طويق',
      '[data-exp="ai-bootcamp"] .timeline-text': '200 ساعة في الذكاء الاصطناعي والتعلم الآلي والتعلم العميق، مع تطبيق عملي مباشر.',
      '[data-exp="t5"] .timeline-date': 'مارس 2024 - يونيو 2024',
      '[data-exp="t5"] .timeline-title': 'معسكر علوم البيانات والذكاء الاصطناعي T5',
      '[data-exp="t5"] .timeline-org': 'سدايا',
      '[data-exp="t5"] .timeline-text': '360 ساعة شملت SQL وPython وتحليل البيانات والتعلم الآلي والعميق (CNN وRNN) وMLOps.',
      '[data-exp="ds-ml"] .timeline-date': 'أكتوبر 2023 - ديسمبر 2023',
      '[data-exp="ds-ml"] .timeline-title': 'معسكر علوم البيانات وتعلم الآلة',
      '[data-exp="ds-ml"] .timeline-org': 'أكاديمية طويق',
      '[data-exp="ds-ml"] .timeline-text': '200 ساعة، 5 مشاريع و50 تمريناً باستخدام Python وSQL وPandas وTableau وTensorFlow. تعلّمت تعلم الآلة (SVM وDecision Tree وRandom Forest) والتعلم العميق (CNNs).',
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
      '#skills .cert-lead': 'شريط متحرك يعرض كل الشهادات اللي حصلت عليها. اسحبه يمين أو يسار للتصفح براحتك، ومرّر المؤشر على أي شهادة عشان تكبر، واضغط عليها لفتح الأصل.',
      '#skills .cert-issuers-label': 'الجهات المانحة',
      '[data-cert="nvidia-ai-infra"] .cert-name': 'شهادة NVIDIA المعتمدة — البنية التحتية للذكاء الاصطناعي وتشغيلها',
      '[data-cert="nvidia-ai-infra"] .cert-meta': 'NVIDIA · أغسطس 2026',
      '[data-cert="sda-python"] .cert-name': 'معسكر تطوير البرمجيات باستخدام بايثون',
      '[data-cert="sda-python"] .cert-meta': 'الأكاديمية السعودية الرقمية · 300 ساعة · يونيو 2026',
      '[data-cert="nvidia-transformers"] .cert-name': 'بناء تطبيقات معالجة اللغة الطبيعية بالمحوّلات',
      '[data-cert="nvidia-transformers"] .cert-meta': 'NVIDIA · مارس 2026',
      '[data-cert="kaust-ai"] .cert-name': 'الذكاء الاصطناعي المتقدم — الرؤية الحاسوبية',
      '[data-cert="kaust-ai"] .cert-meta': 'أكاديمية كاوست · 80+ ساعة · فبراير 2026',
      '[data-cert="web-bootcamp"] .cert-name': 'معسكر تطوير الويب باستخدام بايثون',
      '[data-cert="web-bootcamp"] .cert-meta': 'أكاديمية طويق · 300 ساعة · سبتمبر 2025',
      '[data-cert="drones"] .cert-name': 'بناء ومعايرة الدرونز',
      '[data-cert="drones"] .cert-meta': 'الاتحاد السعودي للأمن السيبراني والبرمجة · 20 ساعة · مايو 2025',
      '[data-cert="iot"] .cert-name': 'أساسيات إنترنت الأشياء',
      '[data-cert="iot"] .cert-meta': 'أكاديمية طويق · 25 ساعة · مايو 2025',
      '[data-cert="cloud"] .cert-name': 'مهندس الحوسبة السحابية',
      '[data-cert="cloud"] .cert-meta': 'علي بابا كلاود · مارس 2025',
      '[data-cert="ai-bootcamp"] .cert-name': 'معسكر بناء وتطوير نماذج الذكاء الاصطناعي',
      '[data-cert="ai-bootcamp"] .cert-meta': 'أكاديمية طويق · 200 ساعة · أكتوبر 2024',
      '[data-cert="t5"] .cert-name': 'معسكر T5 لعلوم البيانات والذكاء الاصطناعي',
      '[data-cert="t5"] .cert-meta': 'أكاديمية سدايا · 360 ساعة · يونيو 2024',
      '[data-cert="ds-bootcamp"] .cert-name': 'معسكر علم البيانات',
      '[data-cert="ds-bootcamp"] .cert-meta': 'أكاديمية طويق · 200 ساعة · ديسمبر 2023',
      '[data-cert="llm-apps"] .cert-name': 'تطوير تطبيقات النماذج اللغوية الكبيرة',
      '[data-cert="llm-apps"] .cert-meta': 'مجمع الملك سلمان العالمي · 16 ساعة · ديسمبر 2023',
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
      '[data-project="attendees"] .project-title': 'نظام إدارة الحضور',
      '[data-project="attendees"] .project-description': 'نظام حضور تلقائي يستخدم التعرف على الوجوه لتسجيل الطلاب عند دخول الصف.',
      '[data-project="attendees"] .project-link-label': 'عرض GitHub',
      '[data-project="focus"] .project-title': 'منصة تحليل تركيز الطلاب في التعليم الإلكتروني',
      '[data-project="focus"] .project-description': 'يتابع انتباه المتعلمين في التعليم الإلكتروني باستخدام تحليل الوجه ونتائج الاختبارات.',
      '[data-project="focus"] .project-link-label': 'عرض GitHub',
      '[data-project="kharaf"] .project-title': 'خراف للتمور',
      '[data-project="kharaf"] .project-description': 'مصنف جودة تمور بالـ CNN يحدد النوع والنضج والجودة ومؤشرات أمراض النخيل.',
      '[data-project="kharaf"] .project-link-label': 'عرض التقرير',
      '[data-project="diabetes"] .project-title': 'تحليل مرض السكري',
      '[data-project="diabetes"] .project-description': 'تقرير تحليل بيانات يستكشف عوامل خطر السكري والأنماط الصحية.',
      '[data-project="diabetes"] .project-link-label': 'عرض التقرير',
      '[data-project="food"] .project-title': 'تحليل طلبات الطعام أونلاين',
      '[data-project="food"] .project-description': 'تحليل استكشافي يكشف سلوك العملاء واتجاهات طلبات الطعام أونلاين.',
      '[data-project="food"] .project-link-label': 'عرض التقرير',
      '[data-project="tuwaiq"] .project-title': 'تحليل بيانات طلاب أكاديمية طويق',
      '[data-project="tuwaiq"] .project-description': 'تحليل استكشافي لـ 6,500 طالب من أكاديمية طويق وأنماط التدريب.',
      '[data-project="tuwaiq"] .project-link-label': 'عرض التقرير',
      '[data-project="powerbi"] .project-title': 'لوحة معلومات Power BI',
      '[data-project="powerbi"] .project-description': 'لوحة Power BI تفاعلية لتنظيف البيانات ونمذجتها وعرضها بصرياً.',
      '[data-project="powerbi"] .project-link-label': 'عرض GitHub',
      '[data-project="halaorder"] .project-title': 'منصة هلا اوردر للمطاعم',
      '[data-project="halaorder"] .project-description': 'منصة Django متعددة المطاعم لإطلاق متجر إلكتروني وإدارة القوائم والفروع ومتابعة الطلبات لحظيًا.',
      '[data-project="halaorder"] .project-link-label': 'عرض GitHub',
      '[data-project="portfolio-builder"] .project-title': 'منشئ الملف الشخصي',
      '[data-project="portfolio-builder"] .project-description': 'تطبيق Django يحوّل الاسم وبعض المحطات المهنية إلى ملف شخصي زمني قابل للمشاركة بدون تسجيل.',
      '[data-project="portfolio-builder"] .project-link-label': 'عرض GitHub',
      '[data-project="guess"] .project-title': 'لعبة تخمين الرقم',
      '[data-project="guess"] .project-description': 'لعبة Python بسيطة لتخمين الرقم تركز على التحكم بالتدفق وإدخال المستخدم.',
      '[data-project="guess"] .project-link-label': 'عرض GitHub',
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
      '.hero-subtitle': 'مهندس ذكاء اصطناعي <span class="accent">|</span> علوم بيانات',
      '.quick-link[href="#about"]': '<i class="fa-solid fa-user"></i> عني',
      '.quick-link[href="#experience"]': '<i class="fa-solid fa-briefcase"></i> خبراتي',
      '.quick-link[href="#skills"]': '<i class="fa-solid fa-star"></i> مهاراتي',
      '.quick-link[href="#portfolio"]': '<i class="fa-solid fa-folder-open"></i> مشاريعي',
      '.about-facts li:nth-child(1)': '<i class="fa-solid fa-location-dot accent"></i> الرياض، السعودية',
      '.about-facts li:nth-child(2)': '<i class="fa-solid fa-phone accent"></i> <span dir="ltr">966-507-050-338</span>',
      '.about-facts li:nth-child(3)': '<i class="fa-solid fa-envelope accent"></i> <span dir="ltr">HeshamAlsadan@gmail.com</span>',
      '.about-facts li:nth-child(4)': '<i class="fa-solid fa-language accent"></i> العربية والإنجليزية',
      '[data-exp="gpu"] .timeline-capstone': '<strong>ورقة بحثية — رفع دقة النماذج بعد التصغير:</strong> قرأت أبحاث من سبقوني في ضغط النماذج وأكملت من بعدهم، وقدّمت ورقة بحثية عن رفع دقة نماذج الذكاء الاصطناعي بعد تصغيرها من FP16 إلى NVFP4. <em>الأدوات: PyTorch, CUDA, NVIDIA TensorRT Model Optimizer.</em>',
      '[data-exp="ai-bootcamp"] .timeline-capstone': '<strong>مشروع التخرج — محلل التركيز للتعليم الإلكتروني:</strong> بنيت منصة تستخدم التعرف على الوجوه ونتائج الاختبارات لقياس تركيز الطلاب أثناء التعلم عن بُعد. <em>الأدوات: MediaPipe, OpenAI GPT-3.5, Whisper, Streamlit.</em>',
      '[data-exp="t5"] .timeline-capstone': '<strong>مشروع التخرج — حاضر:</strong> نظام حضور ذكي يتعرّف على وجوه الطلاب ويسجّل حضورهم تلقائياً عند دخولهم الصف. <em>الأدوات: YOLO, Keras, Roboflow.</em>',
      '[data-exp="ds-ml"] .timeline-capstone': '<strong>مشروع التخرج — خراف:</strong> مشروع تصنيف صور بالـ CNN يحدد نوع التمر ومستوى النضج والأمراض. <em>الأدوات: Python, TensorFlow, Plotly Dash.</em>',
      '#skills .skill-card:nth-child(1) h3': '<i class="fa-solid fa-code accent"></i> لغات البرمجة',
      '#skills .skill-card:nth-child(2) h3': '<i class="fa-solid fa-network-wired accent"></i> أطر التعلم الآلي والعميق',
      '#skills .skill-card:nth-child(3) h3': '<i class="fa-solid fa-toolbox accent"></i> الأدوات والتقنيات',
      '#skills .skill-card:nth-child(4) h3': '<i class="fa-solid fa-lightbulb accent"></i> المهارات الأساسية'
    },
    attrs: {
      '[data-nav-menu]': { 'aria-label': 'القائمة الرئيسية' },
      '.hero-quick-nav': { 'aria-label': 'روابط سريعة' },
      '.filter-list': { 'aria-label': 'أنواع المشاريع' },
      '[data-cert-stream]': { 'aria-label': 'الشهادات' },
      '[data-edu="ksu"] .timeline-logo': { alt: 'جامعة الملك سعود' },
      '[data-exp="cs-instructor"] .timeline-logo': { alt: 'وزارة التعليم' },
      '[data-bottom-nav]': { 'aria-label': 'قائمة التنقل' },
      '.hero-avatar img': { alt: 'هشام السعدان' },
      '[data-project="attendees"] > a': { 'aria-label': 'عرض مشروع نظام إدارة الحضور على GitHub' },
      '[data-project="focus"] > a': { 'aria-label': 'عرض مشروع منصة تحليل التركيز على GitHub' },
      '[data-project="kharaf"] > a': { 'aria-label': 'عرض تقرير خراف للتمور (PDF)' },
      '[data-project="diabetes"] > a': { 'aria-label': 'عرض تحليل مرض السكري' },
      '[data-project="food"] > a': { 'aria-label': 'عرض تحليل طلبات الطعام أونلاين' },
      '[data-project="tuwaiq"] > a': { 'aria-label': 'عرض تحليل بيانات طلاب أكاديمية طويق' },
      '[data-project="powerbi"] > a': { 'aria-label': 'عرض مشروع لوحة Power BI على GitHub' },
      '[data-project="halaorder"] > a': { 'aria-label': 'عرض مشروع منصة هلا اوردر على GitHub' },
      '[data-project="portfolio-builder"] > a': { 'aria-label': 'عرض مشروع منشئ الملف الشخصي على GitHub' },
      '[data-project="guess"] > a': { 'aria-label': 'عرض مشروع لعبة تخمين الرقم على GitHub' },
      'video[poster$="attendees_poster.jpg"]': { 'aria-label': 'عرض نظام إدارة الحضور بالذكاء الاصطناعي' },
      'video[poster$="focus_analysis_poster.jpg"]': { 'aria-label': 'عرض تتبع انتباه الطلاب في الفصل الافتراضي' },
      'video[poster$="portfolio_builder_poster.jpg"]': { 'aria-label': 'عرض منشئ الملف الشخصي بدون تسجيل' },
      'video[poster$="halaorder_poster.jpg"]': { 'aria-label': 'عرض متجر المطعم وإدارة الطلبات' },
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

const setLanguage = (lang) => {
  currentLang = lang === 'ar' ? 'ar' : 'en';
  const dict = translations[currentLang];
  const railOffset = readCertRailOffset();

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

const setMenuOpen = (open) => {
  if (!navMenu || !navBackdrop || !navToggle || !navIcon) return;
  navMenu.classList.toggle('open', open);
  navBackdrop.hidden = !open;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
  navIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  document.body.classList.toggle('menu-open', open);
};

setLanguage('en');

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
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

if (navMenu) {
  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
}

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
