import { Github, Linkedin, Mail, Twitter, Award, Code, Briefcase, User, MessageSquare, BrainCircuit, Rss } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const NAME = "S M Siddalingaswamy";
export const INTRO = "A final-year Computer Science student specializing in Software Development, Data Structures & Algorithms, and Cloud-based Applications. Proficient in Python, Java, C++, Firebase, and Android Development.";
export const LOCATION = "Bangalore, Karnataka";
export const CONTACT_EMAIL = "smsiddu2266@gmail.com";

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com/navi-siddu-1103', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/s-m-siddalingaswamy-938671274', icon: Linkedin },
];

export const ABOUT_ME = {
  image: '/profile.png',
  bio: "Aspiring Software Engineer and a final-year Computer Science student at A.M.C. Engineering College with a CGPA of 8.32. I have a strong foundation in software development, data structures, algorithms, and cloud-based applications.",
  background: "I'm currently a Web Development Intern at SkillsForge, where I collaborate on front-end and back-end development, design and optimize UI components, integrate REST APIs, and apply problem-solving techniques to resolve cross-browser compatibility issues.",
  goals: "I am seeking a Google Apprenticeship to apply my problem-solving and engineering skills in real-world scalable systems. My expertise includes Python, Java, C++, Firebase, and Android Development.",
};

export const SKILLS = {
  languages: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  frameworks: ['Django', 'Node.js'],
  databases: ['MongoDB', 'Firebase'],
  tools: ['XAMPP', 'Docker', 'Git', 'GitHub', 'Android Studio', 'REST APIs', 'GitHub Copilot', 'Claude', 'Gemini', 'Canva'],
};

export const PROJECTS = [
  {
    title: 'Text Summarization of News Articles',
    description: 'Created an ML-based system that generates concise summaries of long articles. Applied NLP to capture key points and improve readability.',
    techStack: ['Machine Learning', 'NLP'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'news article',
  },
  {
    title: 'AI-Powered E-Commerce Website',
    description: 'Engineered an e-commerce site with Firebase Authentication, Firestore, and Hosting. Optimized product search & recommendations using AI-assisted development. Designed responsive UI with Canva & Gemini.',
    techStack: ['Firebase', 'Canva', 'Gemini'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online store',
  },
  {
    title: 'Voice-Controlled PDF Reader',
    description: 'Implemented speech recognition APIs for PDF navigation. Enabled page-turning, scrolling, and quick navigation via voice commands.',
    techStack: ['Speech Recognition', 'PDF'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pdf reader',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Built with Node.js, Socket.io, and Firebase for real-time messaging. Implemented authentication and message persistence.',
    techStack: ['Node.js', 'Socket.io', 'Firebase'],
    repoUrl: '#',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
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
