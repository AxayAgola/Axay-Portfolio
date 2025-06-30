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
    link: "#",
  },
  {
    id: 3,
    title: "E-Learning Platform Design",
    description:
      "Clean and intuitive dashboard design for personal E-Leaarning application.",
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
    title: "Why do we need JWT? JSON Web Token",
    excerpt:
      "JSON Web Token (JWT) is a compact, self-contained way of securely transmitting information between two parties as a JSON object. It's commonly used for authentication and authorization in modern web applications.",
    category: "Development",
    readTime: "5 min read",
    date: "June 21, 2025",
    image: "images/hq720.jpg",
    slug: "Jwt-Content",
  },
];
