import { Project, Experience } from '../types';

export const personalInfo = {
  name: "Satyam Chaturvedi",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that make a difference",
  email: "satyamchaturvedi71@gmail.com",
  phone: "+91 6393014394",
  location: "Noida, India",
  avatar: "/avatar.jpeg",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/satyam-chaturvedi-031199",
    github: "https://github.com/Satyam031199",
    twitter: ""
  }
};

export const aboutMe = `I'm a passionate full-stack developer with 3+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern JavaScript frameworks, with a strong focus on user experience and performance optimization. I believe in writing clean, readable, maintainable code and staying up to date with the latest technologies.

My journey in tech started with Electrical and Electronics degree from VIT Vellore. I'm particularly excited about the intersection of AI and web development, constantly exploring new ways to enhance user experiences through intelligent applications.

When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers and playing football.`;

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/icons/react.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
      { name: "Next.js", icon: "/icons/nextjs.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.png" },
      { name: "Express.js", icon: "/icons/express.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: "/icons/github.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "AWS", icon: "/icons/aws.png" },
      { name: "Kubernetes", icon: "/icons/k8s.png" },
      { name: "Terraform", icon: "/icons/terraform.png" },
      { name: "Jenkins", icon: "/icons/jenkins.png" },
    ],
  },
  {
    title: "Curretly Learning",
    skills: [
      { name: "GraphQL", icon: "/icons/graphql.png" },
      { name: "Prometheus", icon: "/icons/prometheus.png" },
      { name: "Ansible", icon: "/icons/ansible.png" },
      { name: "React Native", icon: "/icons/react.png" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kanban Board",
    description: "Production Workflow Management",
    longDescription: "SaaS app made with Vite and Supabase featuring user authentication and Kanban Board functionalities like filtering, searching, Drag and Drop feature along with analytics dashboard.",
    techStack: ["Vite", "Supabase", "RadixUI"],
    imageUrl: "/images/kanban-board.png",
    githubUrl: "https://github.com/Satyam031199/kanban-board",
    liveUrl: "https://kanban-board.satyamcodes.xyz",
    featured: true
  },
  {
    id: "2",
    title: "Store-It",
    description: "Storage based solution like google drive",
    longDescription: "Storage based solution like google drive made using NextJs application made with using Appwrite for storage, authentication and database, shadcn for UI and react-hook-form with zod for forms.",
    techStack: ["NextJs", "Zod", "Typescript", "Appwrite", "Shadcn", "React-Hook-Form"],
    imageUrl: "/images/store-it.png",
    githubUrl: "https://github.com/Satyam031199/store-it",
    liveUrl: "https://store-it.satyamcodes.xyz/sign-in",
    featured: true
  },
  {
    id: "3",
    title: "Idea Vault",
    description: "Idea Vault is a platform for storing and sharing ideas",
    longDescription: "A NextJs application made by Next-Auth using Github Provider for authentication, Shadcn, Sanity as CMS, Sentry for performance and error handling, Zod for form validations and using nextJs latest PPR rendering for showing dynamic and static content on same page",
    techStack: ["NextJs", "Typescript", "Sanity", "Shadcn", "Next-Auth"],
    imageUrl: "/images/idea-vault.png",
    githubUrl: "https://github.com/Satyam031199/idea-vault",
    liveUrl: "https://ideavault-startup.vercel.app/",
    featured: false
  },
  {
    id: "4",
    title: "Converso",
    description: "Your AI learning companion",
    longDescription: "SaaS app featuring user authentication, subscriptions and payments using Next.js, Clerk and Supabase. Integrates Vapi AI voice agent for seamless, interactive learning sessions.",
    techStack: ["NextJs", "Zod", "Supabase", "Vapi", "Sentry", "Clerk", "Shadcn"],
    imageUrl: "/images/converso.png",
    githubUrl: "https://github.com/Satyam031199/converso",
    liveUrl: "https://converso.satyamcodes.xyz/",
    featured: true
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Accenture",
    position: "Advanced Application Engineering Analyst",
    duration: "2018 - Present",
    description: [
      "Developed a RESTful API for a web application, improving scalability and reducing latency by 40%.",
      "Refactored existing codebase, enhancing readability and maintainability, leading to a 30% reduction in development time.",
      "Built a responsive web application using React, implementing code splitting and lazy loading, which improved page load times by 60% and increased mobile user retention by 25%.",
      "Optimized database queries resulting in 40% performance improvement.",
      "Implemented CI/CD pipelines, reducing deployment times by 50% and increasing deployment frequency by 3x.",
      "Engineered a Node.js backend API, ensuring seamless data flow and smooth integration with the React frontend."
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology",
    school: "Vellore Institute of Technology, Vellore",
    year: "2022",
    details: "Graduated with CGPA: 8.48/10"
  }
];

export const certifications = [
  "AWS Certified Developer Associate",
  "MongoDB Certified SI Associate"
];
