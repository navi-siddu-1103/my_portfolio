import { Github, Linkedin, Mail, Twitter, Award, Code, Briefcase, User, MessageSquare, BrainCircuit, Rss } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import profileImage from '../profile.jpg';

export const NAME = "S M Siddalingaswamy";
export const INTRO = "A final-year Computer Science student specializing in Software Development, Data Structures & Algorithms, and Cloud-based Applications. Proficient in Python, Java, C++, Firebase, and Android Development.";
export const LOCATION = "Bangalore, Karnataka";
export const CONTACT_EMAIL = "smsiddu2266@gmail.com";

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com/navi-siddu-1103', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/s-m-siddalingaswamy-938671274', icon: Linkedin },
];

export const ABOUT_ME = {
  image: profileImage,
  bio: "💻 I’m a Computer Science student and Student Automation Developer Associate, passionate about software engineering, automation, and AI-powered application development. With hands-on experience in Python, Java, C++, SQL, Firebase, and REST APIs, I enjoy solving problems, building scalable systems, and exploring the intersection of Generative AI and software development.",
  background: "I'm completed a Web Development Intern at SkillsForge, where I collaborate on front-end and back-end development, design and optimize UI components, integrate REST APIs, and apply problem-solving techniques to resolve cross-browser compatibility issues.",
  goals: "I'm committed to continuous learning and applying problem-solving skills to create innovative solutions that make a real-world impact. My goal is to contribute to meaningful projects that leverage AI and modern technologies to solve complex problems and improve user experiences.",
};

export const SKILLS = {
  languages: ['Python', 'Java', 'C++', 'JavaScript'],
  frameworks: ['Django', 'Node.js'],
  databases: ['MongoDB', 'Firebase Firestore', 'MySQL'],
  tools: ['XAMPP', 'Docker', 'Git', 'GitHub', 'Android Studio', 'Firebase Studio', 'REST APIs', 'GitHub Copilot', 'Claude AI', 'Gemini AI', 'Canva Coding'],
};

export const PROJECTS = [
  {
    title: 'Anna-Seva Portal: E-ration App',
    description: 'A full-stack web application for digitizing India\'s Public Distribution System (PDS), enabling beneficiaries to locate Fair Price Shops, check stock availability, book ration tokens, and manage complaints. Built with Next.js 15, TypeScript, MongoDB, and Google Maps API, featuring JWT-based authentication, real-time inventory management, and role-based access for distributors and cardholders.',
    techStack: ['Next.js 15', 'TypeScript', 'MongoDB', 'Google Maps API', 'JWT'],
    repoUrl: 'https://github.com/navi-siddu-1103',
    liveUrl: '#',
    image: '/my_portfolio/images/anna-seva-portal.jpeg', 
    dataAiHint: 'e-ration public distribution system',
    timeline: 'Sept 2025 - Present',
  },
  {
    title: 'AetherCare (MediConnect AI)',
    description: 'Designed a smart healthcare system integrating hospital locator (with doctor availability), AI-based skin disease detection, and multilingual blood report analysis for better accessibility. Enhanced patient experience through an intelligent chatbot delivering clear, actionable medical insights.',
    techStack: ['Next.js', 'AI/ML', 'Node.js', 'Google Maps API', 'Firebase', 'NLP'],
    repoUrl: 'https://github.com/navi-siddu-1103',
    liveUrl: '#',
    image: '/my_portfolio/images/aethercare-mediconnect.jpeg',
    dataAiHint: 'healthcare AI medical assistant',
    timeline: 'Mar 2025 - Present',
  },
  {
    title: 'Text Summarization of News Articles',
    description: 'Created an ML-based system that generates concise summaries of long articles. Applied NLP to capture key points and improve readability.',
    techStack: ['Machine Learning', 'NLP'],
    repoUrl: 'https://github.com/navi-siddu-1103/news_summarizer.git',
    liveUrl: '#',
    image: '/my_portfolio/images/text-summarization.svg',
    dataAiHint: 'news article',
  },
  {
    title: 'AI-Powered E-Commerce Website',
    description: 'Engineered an e-commerce site with Firebase Authentication, Firestore, and Hosting. Optimized product search & recommendations using AI-assisted development. Designed responsive UI with Canva & Gemini.',
    techStack: ['Firebase', 'React', 'AI'],
    repoUrl: 'https://github.com/navi-siddu-1103/ShopSphere.git',
    liveUrl: '#',
    image: '/my_portfolio/images/ecommerce-ai.svg',
    dataAiHint: 'online store',
  },
  {
    title: 'Voice-Controlled PDF Reader',
    description: 'Implemented speech recognition APIs for PDF navigation. Enabled page-turning, scrolling, and quick navigation via voice commands.',
    techStack: ['Speech Recognition', 'PDF Processing', 'JavaScript'],
    repoUrl: 'https://github.com/navi-siddu-1103/voice-controlled-pdf-reader.git',
    liveUrl: '#',
    image: '/my_portfolio/images/voice-pdf-reader.jpeg',
    dataAiHint: 'pdf reader',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Built with Node.js, Socket.io, and Firebase for real-time messaging. Implemented authentication and message persistence.',
    techStack: ['Node.js', 'Socket.io', 'Firebase'],
    repoUrl: 'https://github.com/navi-siddu-1103/chat-application.git',
    liveUrl: '#',
    image: '/my_portfolio/images/chat-app.jpeg',
    dataAiHint: 'chat application',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Google AI/ML Virtual Training (Feb - Apr 2024)',
    description: 'Hands-on with ML tools & frameworks.',
    icon: BrainCircuit,
  },
  {
    title: 'Google Android Development Internship (Jul - Sep 2024)',
    description: 'Java/Kotlin, Android Studio.',
    icon: Code,
  },
  {
    title: 'Juniper Networking Virtual Internship (Jan - Mar 2025)',
    description: 'Routing, switching, Junos OS.',
    icon: Rss,
  },
  {
    title: 'Palo Alto Cybersecurity Virtual Internship (Apr - Jun 2025)',
    description: 'Firewalls, threat analysis, incident response.',
    icon: Award,
  },
  {
    title: 'Class Representative',
    description: 'Served as Class Representative, coordinating between faculty and peers.',
    icon: User,
  },
  {
    title: 'Hackathon Participant',
    description: 'Participated in Hackathon, built prototype women safety mobile app (alert system).',
    icon: Briefcase,
  },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: BrainCircuit },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#achievements', label: 'Achievements', icon: Award },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];
