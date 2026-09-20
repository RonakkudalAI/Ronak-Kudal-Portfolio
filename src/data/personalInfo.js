// Central Personal Information & Portfolio Configuration File for Ronak Kudal

export const profile = {
    name: 'Ronak Kudal',
    givenName: 'Ronak',
    familyName: 'Kudal',
    title: 'AI/ML Engineer | Generative AI | RAG | AI Agents',
    tagline: 'I build <span class="bg-gradient-to-r from-[#e879f9] via-[#c084fc] to-[#38bdf8] bg-clip-text text-transparent font-semibold">AI-powered products</span> — from ML & deep learning to GenAI agents and full-stack AI.',
    subtagline: 'PGCP-AI @ CDAC · PG-DAC @ CDAC Pune · 150+ LeetCode. Specialized in LLMs, RAG, LangChain, LangGraph, FastAPI, and Computer Vision.',
    location: 'Udaipur, Rajasthan, India',
    phone: '+91-7627095497',
    email: 'ronakkudal@gmail.com',
    avatarUrl: './ronak.jpg',
    resumeUrl: './resume.pdf', // Replace with your resume PDF in public/
    siteUrl: 'https://RonakkudalAI.github.io/portfolio',
    bioParagraphs: [
        `Hello! I'm Ronak Kudal, an AI/ML Engineer passionate about building intelligent solutions.`,
        `Skilled in ML, DL, GenAI, LLMs, RAG, LangChain, and LangGraph. I enjoy solving real-world problems with data-driven insights and shipping full-stack applications.`,
        `Currently seeking an AI / ML Engineer role to gain industry experience and contribute to impactful work.`,
    ],
    stats: [
        { value: '150+', label: 'LeetCode Problems', tone: 'maroon' },
        { value: '10+', label: 'Featured AI Systems', tone: 'blue' },
        { value: '83.5%', label: 'PGCP-AI Score', tone: 'coffee' },
        { value: '15+', label: 'Certifications', tone: 'plum' },
    ],
    highlights: [
        'AI/ML & Generative AI Specialist',
        'RAG & LangGraph Multi-Agent Architect',
        'Computer Vision & Multimodal Verification',
        'Full-Stack AI Application Developer',
    ],
};

export const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ronak-k-2b1974214/', color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/RonakkudalAI', color: 'currentColor' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ronakkudal/', color: '#FFA116' },
    { name: 'Instagram', url: 'https://www.instagram.com/ronak_kudal/', color: '#E4405F' },
    { name: 'Email', url: 'mailto:ronakkudal@gmail.com', color: '#EA4335' },
    { name: 'Phone', url: 'tel:+917627095497', color: '#34A853' },
];

export const experiences = [
    {
        role: 'AI / ML Project Lead',
        company: 'SnapClass AI Project',
        companyUrl: '#',
        location: 'Udaipur, Rajasthan',
        duration: '2026',
        points: [
            'Led the development of SnapClass, a Smart AI Attendance System with multimodal identity verification using face and voice recognition.',
            'Architected analytics dashboards, role-based authentication, and automated session tracking.',
        ],
    },
    {
        role: 'WordPress Developer & Content Writer',
        company: 'Freelance & US Client Projects',
        companyUrl: '#',
        location: 'Remote',
        duration: '2023',
        points: [
            'Developed and customized WordPress websites, optimizing UI/UX layouts, page speed, and SEO performance.',
            'Authored educational and financial content tailored for US-based clients and audiences.',
        ],
    },
    {
        role: 'E-Commerce & Online Business Founder',
        company: 'Independent Online Business',
        companyUrl: '#',
        location: 'Udaipur, Rajasthan',
        duration: '2021 – Present',
        points: [
            'Founded and managed an online business serving 500+ customers, developing customer communication, sales, and business management skills.',
            'Managed customer relations, digital marketing, product delivery, and business operations alongside technical studies.',
        ],
    },
];

export const education = [
    {
        school: 'Centre for Development of Advanced Computing (CDAC), Mumbai',
        degree: 'Post Graduate Certification Programme in Artificial Intelligence (PGCP-AI)',
        duration: '2026',
        grade: '83.57%',
        logoUrl: './cdac.jpg',
    },
    {
        school: 'Government Engineering College, Ajmer',
        degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
        duration: '2020 – 2024',
        grade: '78.8%',
        logoUrl: './gec_ajmer.jpg',
    },
    {
        school: 'Tulsi Amrit Academy, Rajasthan',
        degree: 'Class XII – RBSE',
        duration: '2020',
        grade: '79.4%',
        logoUrl: './tulsi_amrit.jpg',
    },
];

export const skillCategories = [
    {
        title: 'Generative AI & LLMs',
        skills: [
            'LLMs',
            'RAG',
            'LangChain',
            'LangGraph',
            'Prompt Engineering',
            'AI Agents',
            'Semantic Retrieval',
            'Cosine Similarity',
            'Groq Llama 3.3',
            'NVIDIA AI APIs',
        ],
    },
    {
        title: 'Machine Learning & Deep Learning',
        skills: [
            'Classification',
            'Regression',
            'Clustering',
            'Feature Engineering',
            'Data Preprocessing',
            'Exploratory Data Analysis',
            'Model Evaluation',
            'Scikit-learn',
            'Pandas',
            'NumPy',
        ],
    },
    {
        title: 'Mathematics for AI & ML',
        skills: [
            'Linear Algebra',
            'Probability & Statistics',
            'Multivariable Calculus',
            'Optimization Algorithms',
            'Gradient Descent',
            'Matrix Factorization',
            'Hypothesis Testing',
            'Dimensionality Reduction (PCA)',
            'Vector Calculus',
            'Loss Functions',
        ],
    },
    {
        title: 'NLP & Computer Vision',
        skills: [
            'Text Processing',
            'Embeddings',
            'Semantic Search',
            'BERT',
            'spaCy',
            'OpenCV',
            'Face Recognition',
            'Gaze Tracking',
        ],
    },
    {
        title: 'Programming & Web Frameworks',
        skills: [
            'Python',
            'Java',
            'SQL',
            'LeetCode (150+ Solved)',
            'Data Structures & Algorithms',
            'FastAPI',
            'React 19',
            'Tailwind CSS',
            'Streamlit',
            'PostgreSQL',
            'Supabase',
            'Cloud Firestore',
        ],
    },
];


export const projects = [
    {
        title: 'AI Career Copilot – AI-Powered Career Development Platform',
        projectImages: ['./projects/career_copilot.png'],
        descriptionPoints: [
            'Built a full-stack AI career platform for resume analysis, interview preparation, skill-gap analysis, and job recommendations.',
            'Developed a RAG-based career assistant using LangChain, term-frequency vectorization, and Cosine Similarity for personalized, context-grounded responses.',
            'Designed a LangGraph multi-agent workflow for skill-gap analysis, resume improvement, and validation of AI-generated recommendations.',
            'Implemented an ATS scoring engine and AI voice mock-interview system with STAR-based evaluation, interview scoring, and webcam gaze tracking.',
        ],
        techstack: ['Python', 'FastAPI', 'React 19', 'LangChain', 'LangGraph', 'RAG'],
        links: [
            {
                title: 'Live Demo',
                url: 'https://lnkd.in/dJKGnb5v',
            },
            {
                title: 'GitHub',
                url: 'https://lnkd.in/dUpMZ_SS',
            },
        ],
    },
    {
        title: 'SnapClass – Smart AI Attendance System',
        projectImages: ['./projects/snapclass.png'],
        descriptionPoints: [
            'Built an AI attendance management system with Teacher and Student portals, scheduling, monitoring, and attendance reporting.',
            'Implemented multimodal identity verification using face and voice recognition for secure attendance marking.',
            'Developed analytics dashboards with attendance insights, session tracking, subject management, and role-based authentication.',
        ],
        techstack: ['Python', 'Streamlit', 'OpenCV', 'Dlib', 'Resemblyzer', 'Supabase'],
        links: [
            {
                title: 'Live Demo',
                url: 'https://lnkd.in/dKzT4e5K',
            },
            {
                title: 'GitHub',
                url: 'https://lnkd.in/dqmNPPxC',
            },
        ],
    },
    {
        title: 'SkillGraph — AI Job Market & Layoff Analytics',
        projectImages: ['./projects/skillgraph.jpg'],
        descriptionPoints: [
            'Built SkillGraph, a Machine Learning and Data Analytics platform focused on analyzing tech layoffs and workforce trends (2020–2026), built with guidance from C-DAC.',
            'Trained a Random Forest classification model with SMOTE achieving high accuracy for AI-related layoff prediction.',
            'Integrated K-Means clustering to uncover company workforce reduction patterns and industry behavior.',
            'Designed interactive analytics dashboards with Plotly and Streamlit for country-wise, industry-wise, and business trend insights.',
        ],
        techstack: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Plotly', 'Random Forest', 'K-Means', 'SMOTE'],
        links: [
            {
                title: 'Live Demo',
                url: 'https://lnkd.in/dtAgsZgP',
            },
            {
                title: 'GitHub',
                url: 'https://lnkd.in/dbSiQExD',
            },
        ],
    },
    {
        title: 'AI Gym Coach – Real-Time AI Exercise Coaching System',
        projectImages: ['./projects/ai_gym_coach.png'],
        descriptionPoints: [
            'Built a real-time exercise-coaching system using Computer Vision and Pose Estimation for automated rep counting and live posture correction.',
            'Analyzes body joint angles and keypoints in real time with sub-100ms latency to detect form flaws instantly.',
            'Supports 5+ exercise types with 95% form accuracy evaluation and personalized visual coaching feedback.',
        ],
        techstack: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Pose Estimation', 'Streamlit'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/RonakkudalAI/AI_Gym_Coach',
            },
        ],
    },
    {
        title: 'Sentiment Analyzer — Full-Stack AI Call Intelligence Platform',
        projectImages: ['./projects/sentiment_analyzer.png'],
        descriptionPoints: [
            'Built a full-stack AI call intelligence platform for conversation transcript analysis, emotion breakdown, and call-center KPI dashboards.',
            'Architected a clean three-layer architecture (UI → n8n workflow automation → AI models) for the AI Centre of Excellence (CoE).',
            'Evaluates 16 contact-center KPIs with production-grade interactive UX, role-based login (admin / admin123), and automated sentiment scoring.',
        ],
        techstack: ['Python', 'n8n', 'React', 'FastAPI', 'Sentiment Analysis', 'NLP', 'Tailwind CSS'],
        links: [
            {
                title: 'Live Demo',
                url: 'https://sentiment-analyzer-ai-alpha.vercel.app/login',
            },
            {
                title: 'GitHub',
                url: 'https://github.com/RonakkudalAI/Sentiment-Analyzer',
            },
        ],
    },
    {
        title: 'Employee Attrition Prediction — End-to-End Machine Learning System',
        projectImages: ['./projects/employee_attrition.jpg'],
        descriptionPoints: [
            'Built an end-to-end ML pipeline for employee attrition prediction with EDA, data preprocessing, feature engineering, and model comparison.',
            'Implemented multiple classification algorithms with cross-validation, hyperparameter tuning, and ROC-AUC evaluation.',
            'Developed an interactive prediction workflow using Python, Scikit-learn, and Streamlit to uncover key workforce retention factors.',
        ],
        techstack: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Streamlit', 'EDA', 'Classification'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/RonakkudalAI/Practical-Machine-Learning',
            },
        ],
    },
    {
        title: 'Text Summarization using Hugging Face Transformers',
        projectImages: ['./projects/text_summarizer.png'],
        descriptionPoints: [
            'Built an end-to-end abstractive text summarization workflow using Hugging Face Transformers (DistilBART / BART) for long campaign and business reports.',
            'Implemented hierarchical chunking and summarization for long documents, overcoming context window limits.',
            'Integrated an automated business recommendation layer that translates generated summaries into actionable marketing decisions.',
        ],
        techstack: ['Python', 'Hugging Face', 'Transformers', 'DistilBART', 'Pandas', 'Streamlit', 'NLP'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/RonakkudalAI/Text_Summarizer',
            },
        ],
    },
    {
        title: 'Student Placement Tracking & Analysis',
        projectImages: ['./projects/student_placement.png'],
        descriptionPoints: [
            'Developed a data-driven Streamlit application for tracking student placement records and analyzing hiring trends using Python, SQL, and interactive visualizations.',
            'Implemented machine learning classification models to predict student placement probability based on academic scores, branch, and skill profiles.',
            'Built interactive dashboards with Matplotlib, Seaborn, and Pandas for branch-wise placement metrics, salary distributions, and historical trends.',
        ],
        techstack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SQL'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/RonakkudalAI/Student-Placement-Tracking-and-Analysis-Model',
            },
        ],
    },
    {
        title: 'BTech With TRRK — Tech Blog & Web Development Project',
        projectImages: ['./projects/btech_trrk.png'],
        descriptionPoints: [
            'Designed, built, and managed a tech blog and educational portal during B.Tech to share Computer Science tutorials.',
            'Customized UI/UX layouts, SEO optimization, and content publishing workflows for technical articles.',
            'Built and maintained digital web presence with dedicated reader engagement and organic search reach.',
        ],
        techstack: ['Web Development', 'WordPress', 'Blogger', 'HTML/CSS', 'SEO', 'UI/UX'],
        links: [
            {
                title: 'Visit Website',
                url: 'https://btechwithtrrk.blogspot.com/',
            },
        ],
    },
];

export const achievements = [
    {
        title: 'Selected for Udyam Project Showcase',
        badge: 'Udyam Showcase',
        description: 'Selected to showcase AI Career Copilot at the Udyam Technical Innovation Exhibition.',
        image: './achievements/udyam_showcase.jpg',
        links: [],
    },
    {
        title: 'Post Graduate Certification in Artificial Intelligence (PGCP-AI)',
        badge: 'PGCP-AI (83.57%)',
        description: 'Graduated with 83.57% score in Post Graduate Certification Programme in Artificial Intelligence from CDAC Mumbai.',
        image: './achievements/pgcp_ai_convocation.jpg',
        links: [],
    },
    {
        title: 'Participated in C-DAC Hackathon 2026',
        badge: 'C-DAC Hackathon',
        description: 'Collaborated with team in building innovative AI solutions during the intense C-DAC Hackathon 2026.',
        image: './achievements/cdac_hackathon.jpg',
        links: [],
    },
];

export const certifications = [
    {
        title: 'AWS Academy Graduate - Generative AI Foundations',
        issuer: 'AWS Academy',
        issueDate: 'Sep 2026',
        credentialUrl: 'https://www.credly.com/badges/dd471668-b217-433d-8a8d-65e740ac0404',
        image: './certificates/AWS_Generative_AI_Foundations_1.png',
    },
    {
        title: 'Prime Batch – Artificial Intelligence & Machine Learning',
        issuer: 'Apna College',
        issueDate: '2025',
        credentialUrl: '#',
        image: './certificates/Prime_AIML_Certificate.jpg',
    },
    {
        title: 'Data Structure and Algorithms Using Java (Elite + Silver)',
        issuer: 'NPTEL (IIT Kharagpur) - Score: 81%',
        issueDate: 'Oct 2023',
        credentialUrl: '#',
        image: './certificates/NPTL DSA.jpg',
    },
    {
        title: 'Python (Basic)',
        issuer: 'HackerRank',
        issueDate: 'Jul 2021',
        credentialUrl: 'https://www.hackerrank.com/certificates/4C3074E81802',
        image: './certificates/pythone.webp',
    },
    {
        title: 'Selected for Udyam Program',
        issuer: 'Udyam Technical Initiative Program',
        issueDate: '2024',
        credentialUrl: '#',
        image: './certificates/udyam.png',
    },

    {
        title: 'Machine Learning Certificate',
        issuer: 'Government Engineering College, Ajmer',
        issueDate: 'Aug 2023',
        credentialUrl: '#',
        image: './certificates/ML.jpg',
    },
    {
        title: 'Alpha Batch – Data Structures & Algorithms with Java',
        issuer: 'Apna College',
        issueDate: '2023',
        credentialUrl: '#',
        image: './certificates/Alpha batch java-dsa.jpg',
    },
    {
        title: 'TCS iON Career Edge - Young Professional',
        issuer: 'TCS iON (Tata Consultancy Services)',
        issueDate: 'Jun 2023',
        credentialUrl: '#',
        image: './certificates/tcs-ion.jpg',
    },
    {
        title: 'Web Development Internship',
        issuer: 'TechnoHacks EduTech',
        issueDate: 'Jul 2023',
        credentialUrl: '#',
        image: './certificates/internship.jpg',
    },
    {
        title: 'Artificial Intelligence Foundations',
        issuer: 'SkillUp Online / SSC NASSCOM',
        issueDate: 'Aug 2021',
        credentialUrl: '#',
        image: './certificates/skillup.jpeg',
    },
    {
        title: 'Java (Basic)',
        issuer: 'HackerRank',
        issueDate: 'Jul 2021',
        credentialUrl: 'https://www.hackerrank.com/certificates/DBC7829E91FD',
        image: './certificates/java-basic.webp',
    },
    {
        title: 'JavaScript (Basic)',
        issuer: 'HackerRank',
        issueDate: 'Jul 2021',
        credentialUrl: 'https://www.hackerrank.com/certificates/1E08D6867E52',
        image: './certificates/js-basic.webp',
    },
    {
        title: 'Cyber Security White Hacker Lev#1 (Score: 89%)',
        issuer: 'Microsoft Online Certification Training (MOCT College)',
        issueDate: 'Aug 2021',
        credentialUrl: '#',
        image: './certificates/cyber security.jpeg',
    },
    {
        title: 'Environmental Awareness and Climate Change Workshop',
        issuer: 'Engineering College Ajmer & IEI',
        issueDate: 'Jul 2021',
        credentialUrl: '#',
        image: './certificates/Environment and healthcare.jpeg',
    },
    {
        title: 'Integrity Pledge Commitment',
        issuer: 'Central Vigilance Commission, Govt. of India',
        issueDate: '2023',
        credentialUrl: '#',
        image: './certificates/PLEDGE.jpeg',
    },
];
