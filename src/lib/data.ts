import { Github, Linkedin, Mail, Twitter, Award, Code, Briefcase, User, MessageSquare, BrainCircuit, Rss } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const NAME = "John Doe";
export const INTRO = "I'm a passionate Computer Science student with a focus on web development and artificial intelligence. I love building things that solve real-world problems.";
export const LOCATION = "San Francisco, CA";
export const CONTACT_EMAIL = "john.doe@email.com";

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];

export const ABOUT_ME = {
  image: 'https://placehold.co/300x300.png',
  bio: "Hello! I'm John Doe, a dedicated and curious Computer Science student based in San Francisco. My journey in tech began with a simple 'Hello, World!' and has since evolved into a passion for creating elegant, efficient, and user-centric applications. I thrive on challenges and am constantly exploring new technologies to broaden my skillset.",
  background: "I am currently pursuing my Bachelor's degree in Computer Science at a prestigious university. My coursework has provided me with a strong foundation in data structures, algorithms, software engineering, and machine learning. Outside of academics, I actively contribute to open-source projects and participate in hackathons, which have been invaluable for my practical learning.",
  goals: "My primary goal is to leverage my skills in a challenging role as a software engineer, where I can contribute to meaningful projects and continue to grow as a developer. I am particularly interested in the fields of AI-driven applications and full-stack web development. In the long term, I aspire to lead a team and mentor upcoming developers.",
};

export const SKILLS = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  databases: ['MongoDB', 'PostgreSQL', 'Firebase'],
  tools: ['Git', 'Docker', 'Figma', 'Vercel', 'Genkit'],
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
