import { Project, Experience, Skill } from '../types';

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
    linkedin: "linkedin.com/in/satyam-chaturvedi-031199",
    github: "linkedin.com/in/satyam-chaturvedi-031199",
    twitter: ""
  }
};

export const aboutMe = `I'm a passionate full-stack developer with 3+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern JavaScript frameworks, with a strong focus on user experience and performance optimization.

My journey in tech started with Electrical and Electronics degree from VIT Vellore, and I've since worked with startups and established companies to build scalable solutions that impact thousands of users daily. I'm particularly excited about the intersection of AI and web development, constantly exploring new ways to enhance user experiences through intelligent applications.

When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring the beautiful hiking trails around the Bay Area.`;

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["NextJs","Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "Tools & Other",
    items: ["Git", "VS Code", "Figma", "Jest", "GraphQL", "REST APIs"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "TaskFlow Pro",
    description: "A collaborative project management platform with real-time updates",
    longDescription: "Built a comprehensive project management solution that enables teams to collaborate seamlessly with real-time updates, kanban boards, and advanced reporting features. The platform supports file sharing, time tracking, and integrates with popular tools like Slack and GitHub.",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "AWS"],
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/alexrivera/taskflow-pro",
    liveUrl: "https://taskflow-pro.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "EcoTracker",
    description: "Mobile app for tracking personal carbon footprint with AI insights",
    longDescription: "Developed a React Native application that helps users track their daily carbon footprint through smart categorization and AI-powered insights. Features include habit tracking, community challenges, and personalized reduction recommendations.",
    techStack: ["React Native", "TypeScript", "Firebase", "TensorFlow.js"],
    imageUrl: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/alexrivera/ecotracker",
    liveUrl: "https://ecotracker.app",
    featured: true
  },
  {
    id: "3",
    title: "DataViz Dashboard",
    description: "Interactive analytics dashboard for e-commerce businesses",
    longDescription: "Created a powerful analytics dashboard that provides e-commerce businesses with actionable insights through beautiful data visualizations. Features real-time metrics, custom reporting, and automated insights generation.",
    techStack: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    imageUrl: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/alexrivera/dataviz-dashboard",
    liveUrl: "https://dataviz-demo.netlify.app",
    featured: true
  },
  {
    id: "4",
    title: "Recipe AI",
    description: "AI-powered recipe generator based on available ingredients",
    longDescription: "Built an intelligent recipe suggestion platform that analyzes available ingredients and dietary preferences to generate personalized recipes. Includes nutritional analysis, shopping list generation, and meal planning features.",
    techStack: ["Next.js", "OpenAI API", "Prisma", "Supabase"],
    imageUrl: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "https://github.com/alexrivera/recipe-ai",
    liveUrl: "https://recipe-ai.vercel.app",
    featured: false
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