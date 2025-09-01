import { Github, Linkedin, Mail, Twitter, Award, Code, Briefcase, User, MessageSquare, BrainCircuit, Rss } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const NAME = "S M Siddalingaswamy";
export const INTRO = "Final-year Computer Science student (CGPA 8.32) with expertise in Software Development, DSA, and Cloud-based Applications. Skilled in Python, Java, C++, Firebase, and Android Development.";
export const LOCATION = "Bangalore, Karnataka";
export const CONTACT_EMAIL = "smsiddu2266@gmail.com";

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com/navi-siddu-1103', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/s-m-siddalingaswamy-938671274', icon: Linkedin },
];

export const ABOUT_ME = {
  image: 'https://placehold.co/300x300.png',
  bio: "Aspiring Software Engineer and a final-year Computer Science student at A.M.C. Engineering College with a CGPA of 8.32. I have a strong foundation in software development, data structures, algorithms, and cloud-based applications.",
  background: "I'm currently a Web Development Intern at SkillsForge, where I collaborate on front-end and back-end development, design and optimize UI components, integrate REST APIs, and apply problem-solving techniques to resolve cross-browser compatibility issues.",
  goals: "I am seeking a Google Apprenticeship to apply my problem-solving and engineering skills in real-world scalable systems. My expertise includes Python, Java, C++, Firebase, and Android Development.",
};

export const SKILLS = {
  languages: ['Python', 'Java', 'C++', 'JavaScript', 'HTML/CSS'],
  frameworks: ['Node.js', 'React', 'Next.js', 'Tailwind CSS'],
  databases: ['Firebase'],
  tools: ['Git', 'GitHub', 'Android Development', 'Docker'],
};

export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process. Integrated with Stripe for payments.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online store',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot for customer service, capable of understanding natural language and providing instant support.',
    techStack: ['Python', 'Flask', 'Genkit', 'React', 'Docker'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot conversation',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize their work with boards, lists, and cards.',
    techStack: ['React', 'Firebase', 'Node.js', 'Express'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'task board',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects. Built with performance and aesthetics in mind.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit'],
    repoUrl: 'https://github.com',
    liveUrl: '#',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'code editor',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Winner, TechSprint Hackathon 2023',
    description: 'Developed a prize-winning mobile app for local community engagement in under 48 hours.',
    icon: Award,
  },
  {
    title: 'Certified TensorFlow Developer',
    description: 'Completed the official TensorFlow Developer certification, demonstrating proficiency in building and training machine learning models.',
    icon: Rss,
  },
  {
    title: 'Top 5% in University Coding Competition',
    description: 'Placed among the top competitors in a university-wide algorithmic programming contest.',
    icon: Code,
  },
  {
    title: 'Open Source Contributor',
    description: 'Actively contributed to several open-source projects, including documentation, bug fixes, and feature development.',
    icon: BrainCircuit,
  },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: BrainCircuit },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#achievements', label: 'Achievements', icon: Award },
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];
