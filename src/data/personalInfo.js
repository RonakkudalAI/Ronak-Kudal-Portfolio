// Central Personal Information & Portfolio Configuration File for Ronak Kudal

export const profile = {
    name: 'Ronak Kudal',
    givenName: 'Ronak',
    familyName: 'Kudal',
    title: 'AI/ML Engineer | Generative AI | RAG | AI Agents',
    tagline: 'Building end-to-end Machine Learning and Generative AI applications.',
    subtagline: 'Specialized in LLMs, RAG, LangChain, LangGraph, FastAPI, and Computer Vision.',
    location: 'Udaipur, Rajasthan, India',
    phone: '+91-7627095497',
    email: 'ronakkudal00@gmail.com',
    avatarUrl: './ronak.jpg',
    resumeUrl: './resume.pdf', // Replace with your resume PDF in public/
    siteUrl: 'https://ronakkudal.github.io/portfolio',
    bioParagraphs: [
        `Hello! I'm Ronak Kudal, an AI/ML Engineer with hands-on experience building end-to-end Machine Learning and Generative AI applications using Python, LLMs, RAG, LangChain, LangGraph, and FastAPI.`,
        `I have extensive experience developing intelligent systems for resume analysis, interview preparation, skill-gap analysis, semantic retrieval, AI agents, and multimodal identity verification.`,
        `With a strong foundation in Machine Learning, Deep Learning, NLP, Computer Vision, SQL, and Data Structures, I specialize in bringing full-stack AI products from concept to production.`,
    ],
    stats: [
        { value: '150+', label: 'LeetCode Problems', tone: 'maroon' },
        { value: '2+', label: 'Featured AI Systems', tone: 'blue' },
        { value: '83.5%', label: 'PGCP-AI Score', tone: 'coffee' },
        { value: '4+', label: 'AI Certifications', tone: 'plum' },
    ],
    highlights: [
        'AI/ML & Generative AI Specialist',
        'RAG & LangGraph Multi-Agent Architect',
        'Computer Vision & Multimodal Verification',
        'Full-Stack AI Application Developer',
    ],
};

export const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ronakkudal/', color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/ronakkudal', color: 'currentColor' },
    { name: 'Email', url: 'mailto:ronakkudal00@gmail.com', color: '#EA4335' },
    { name: 'Phone', url: 'tel:+917627095497', color: '#34A853' },
];

export const experiences = [
    {
        role: 'AI / ML Project Lead',
        company: 'SnapClass AI Project',
        companyUrl: '#',
        location: 'Udaipur, Rajasthan',
        duration: '2024 – Present',
        points: [
            'Led the development of SnapClass, a Smart AI Attendance System with multimodal identity verification using face and voice recognition.',
            'Architected analytics dashboards, role-based authentication, and automated session tracking.',
        ],
    },
];

export const education = [
    {
        school: 'Centre for Development of Advanced Computing (CDAC), Mumbai',
        degree: 'Post Graduate Certification Programme in Artificial Intelligence (PGCP-AI)',
        duration: '2026',
        grade: '83.57%',
        logoUrl: './marwadiuniversity.jpeg',
    },
    {
        school: 'Centre for Development of Advanced Computing (C-DAC), ACTS Pune',
        degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
        duration: 'Feb 2025 – Aug 2025',
        grade: '78%',
        logoUrl: './marwadiuniversity.jpeg',
    },
    {
        school: 'Government Engineering College, Ajmer',
        degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
        duration: '2020 – 2024',
        grade: '78.8%',
        logoUrl: './marwadiuniversity.jpeg',
    },
    {
        school: 'Tulsi Amrit Academy, Rajasthan',
        degree: 'Class XII – RBSE',
        duration: '2020',
        grade: '79.4%',
        logoUrl: './marwadiuniversity.jpeg',
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
        projectImages: ['./projects/11/ss1.png'],
        descriptionPoints: [
            'Built a full-stack AI career platform for resume analysis, interview preparation, skill-gap analysis, and job recommendations.',
            'Developed a RAG-based career assistant using LangChain, term-frequency vectorization, and Cosine Similarity for personalized, context-grounded responses.',
            'Designed a LangGraph multi-agent workflow for skill-gap analysis, resume improvement, and validation of AI-generated recommendations.',
            'Implemented an ATS scoring engine and AI voice mock-interview system with STAR-based evaluation, interview scoring, and webcam gaze tracking.',
        ],
        techstack: ['Python', 'FastAPI', 'React 19', 'LangChain', 'LangGraph', 'RAG'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/ronakkudal',
            },
        ],
    },
    {
        title: 'SnapClass – Smart AI Attendance System',
        projectImages: ['./projects/1/ss1.png'],
        descriptionPoints: [
            'Built an AI attendance management system with Teacher and Student portals, scheduling, monitoring, and attendance reporting.',
            'Implemented multimodal identity verification using face and voice recognition for secure attendance marking.',
            'Developed analytics dashboards with attendance insights, session tracking, subject management, and role-based authentication.',
        ],
        techstack: ['Python', 'Streamlit', 'OpenCV', 'Dlib', 'Resemblyzer', 'Supabase'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/ronakkudal',
            },
        ],
    },
];

export const achievements = [
    {
        title: 'LeetCode Problem Solver',
        badge: '150+ Solved',
        description: 'Solved 150+ Data Structures and Algorithms problems on LeetCode.',
        links: [],
    },
    {
        title: 'Project Lead – SnapClass AI',
        badge: 'Lead',
        description: 'Led the end-to-end architecture and implementation of SnapClass AI Attendance System.',
        links: [],
    },
    {
        title: 'Selected for Udyam Program',
        badge: 'Selected',
        description: 'Selected for the prestigious Udyam Program for technical innovation.',
        links: [],
    },
    {
        title: 'Coding Challenges & Hackathons',
        badge: 'Participant',
        description: 'Actively participated in competitive coding challenges and hackathons.',
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
        title: 'Machine Learning Certificate',
        issuer: 'Government Engineering College, Ajmer',
        issueDate: 'Aug 2023',
        credentialUrl: '#',
        image: './certificates/ML.jfif',
    },
    {
        title: 'Python (Basic)',
        issuer: 'HackerRank',
        issueDate: 'Jul 2021',
        credentialUrl: 'https://www.hackerrank.com/certificates/4C3074E81802',
        image: './certificates/pythone.webp',
    },
    {
        title: 'Data Structure and Algorithms Using Java (Elite + Silver)',
        issuer: 'NPTEL (IIT Kharagpur) - Score: 81%',
        issueDate: 'Oct 2023',
        credentialUrl: '#',
        image: './certificates/NPTL DSA.jfif',
    },
    {
        title: 'Alpha Batch – Data Structures & Algorithms with Java',
        issuer: 'Apna College',
        issueDate: '2023',
        credentialUrl: '#',
        image: './certificates/Alpha batch java-dsa.jfif',
    },
    {
        title: 'TCS iON Career Edge - Young Professional',
        issuer: 'TCS iON (Tata Consultancy Services)',
        issueDate: 'Jun 2023',
        credentialUrl: '#',
        image: './certificates/tcs-ion.jfif',
    },
    {
        title: 'Web Development Internship',
        issuer: 'TechnoHacks EduTech',
        issueDate: 'Jul 2023',
        credentialUrl: '#',
        image: './certificates/internship.jfif',
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
        title: 'Upcoming Opportunities in Robotics & Mechatronics',
        issuer: 'Government Engineering College, Ajmer',
        issueDate: 'Aug 2023',
        credentialUrl: '#',
        image: './certificates/1698821257970.jfif',
    },
    {
        title: 'Financial Wellness Enhancement',
        issuer: 'KPMG Learning Academy & Mentoring Matters',
        issueDate: 'Aug 2023',
        credentialUrl: '#',
        image: './certificates/1698821285553.jfif',
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
