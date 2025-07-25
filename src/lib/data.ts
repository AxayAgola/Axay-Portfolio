export interface Project {
  id: number;
  title: string;
  description: string;
  category: "ui-ux" | "development";
  tags: string[];
  image: string;
  link: string;
}
export interface BlogArticle {
  slug: string;
  title: string;
  cover: string;
  content: (
    | string
    | {
        type: "heading";
        text: string;
        level: number;
      }
    | {
        type: "image";
        src: string;
        alt: string;
        width?: number;
        height?: number;
      }
    | {
        type: "list";
        items: string[];
        ordered: boolean;
      }
    | {
        type: "code";
        code: string;
      }
    | {
        type: "table";
        headers: string[];
        rows: string[][];
      }
  )[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "e-Discovery Process",
    description:
      "We create a file handling process web application, using web Api with responsive Ui design",
    category: "development",
    tags: ["Web Application", "Full Stack"],
    image: "/images/ediscovery.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description:
      "Full-stack web application built with React, Node.js, and PostgreSQL for team collaboration.",
    category: "development",
    tags: ["Development", "Full-Stack"],
    image: "/images/elearning.jpg",
    link: "https://github.com/AxayAgola/E_Learning_Platform",
  },
  {
    id: 3,
    title: "JWT Authentication",
    description:
      "This system using ASP.NET Core Web API for the backend and a modern HTML/CSS/JavaScript frontend. It supports JWT-based login and registration, along with role-based authorization.",
    category: "development",
    tags: ["Devlopment", "Full-Stack"],
    image: "/images/jwt.jpg",
    link: "https://github.com/AxayAgola/JWT-Authentication",
  },
  {
    id: 4,
    title: "E-Learning Platform Design",
    description:
      "Clean and intuitive dashboard design for personal E-Learning application.",
    category: "ui-ux",
    tags: ["UI/UX", "Web"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    link: "#",
  },
];
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "Life2Article",
    title: "Learn from your past — but don’t let it define your future",
    excerpt:
      "A personal growth story about learning from mistakes and moving forward.",
    category: "Motivation",
    image: "/images/life-articles.png",
    readTime: "5 min read",
    date: "July 10, 2025",
  },
  {
    id: 2,
    slug: "Article-Jwt",
    title: "Why Do We Need JWT? JSON Web Token",
    excerpt:
      "JWT is a compact and secure way to transmit data between parties...",
    category: "Development",
    image: "/images/jwt.jpg",
    readTime: "4 min read",
    date: "July 11, 2025",
  },
  // ✅ Make sure each post has a unique slug!
];
