import { Project, Experience, Skill } from '../types';

export const personalInfo = {
  name: "Alex Rivera",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that make a difference",
  email: "alex@alexrivera.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/alexrivera",
    github: "https://github.com/alexrivera",
    twitter: "https://twitter.com/alexrivera"
  }
};

export const aboutMe = `I'm a passionate full-stack developer with 5+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern JavaScript frameworks, with a strong focus on user experience and performance optimization.

My journey in tech started with a Computer Science degree from UC Berkeley, and I've since worked with startups and established companies to build scalable solutions that impact thousands of users daily. I'm particularly excited about the intersection of AI and web development, constantly exploring new ways to enhance user experiences through intelligent applications.

When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring the beautiful hiking trails around the Bay Area.`;

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel", "Netlify"]
  },
  {
    category: "Tools & Other",
    items: ["Git", "VS Code", "Figma", "Jest", "Cypress", "GraphQL", "REST APIs"]
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
    company: "TechFlow Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of a microservices architecture serving 100K+ daily active users",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
      "Mentored 4 junior developers and established code review best practices",
      "Optimized database queries resulting in 40% performance improvement"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Built responsive web applications from concept to production",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Integrated third-party APIs and payment systems (Stripe, PayPal)",
      "Developed automated testing suite increasing code coverage to 90%"
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Jest", "Cypress"]
  },
  {
    id: "3",
    company: "Freelance",
    position: "Web Developer",
    duration: "2019 - 2020",
    description: [
      "Delivered 15+ custom websites for small businesses and startups",
      "Specialized in e-commerce solutions and content management systems",
      "Provided ongoing maintenance and performance optimization services",
      "Achieved 98% client satisfaction rate and 100% project delivery on time"
    ],
    technologies: ["WordPress", "Shopify", "JavaScript", "PHP", "MySQL"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    year: "2019",
    details: "Graduated Magna Cum Laude, GPA: 3.8/4.0"
  }
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "MongoDB Certified Developer"
];