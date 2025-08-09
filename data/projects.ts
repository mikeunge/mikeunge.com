import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Ö-Energie - Customer & Contract Management",
    shortDescription:
      "Comprehensive Platform for Energy Management and Customer Engagement",
    description:
      "Ö-Energie is a robust web application designed to streamline customer and contract management for energy providers. Built with Next.js, React, and TypeScript, it features a modern, responsive UI using Tailwind CSS and Shadcn components. The platform includes advanced functionalities such as customer onboarding, contract management, and real-time data analytics, all while ensuring high performance and security through server-side rendering and API integration.",
    image: "/images/oe-energy.png",
    tags: [
      "CRM",
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn",
      "NestJS",
      "MongoDB",
      "Meili Search",
      "Docker",
      "VPS",
    ],
    features: [
      "Contract creation and digital signature integration",
      "Real-time data analytics and reporting",
      "Customer onboarding and management",
      "Search functionality with Meili Search",
      "Responsive design for mobile and desktop",
    ],
    websiteLink: "https://ö-energie.at",
    githubLink: undefined,
  },
  {
    id: 2,
    title: "Spar-Fuchs",
    shortDescription:
      "Modern Landing page for a financial service with custom admin panel for data analytics and management",
    description:
      "Spar-Fuchs is a modern landing page designed for a financial service, featuring a custom admin panel for data analytics and management. Built with Vue3, and TypeScript, the site utilizes Tailwind CSS for styling and Shadcn components for a sleek user interface, the backend is fully built using supabase and supabase function for more complex tasks. The admin panel allows for real-time data management and analytics, providing insights into customer interactions and service performance.",
    image: "/images/spar-fuchs.png",
    tags: [
      "Vue3",
      "Typescript",
      "Tailwind CSS",
      "Shadcn",
      "Supabase",
      "Supabase Functions",
    ],
    features: [
      "Custom admin panel for data management",
      "Real-time analytics and reporting",
      "Responsive design for optimal user experience",
      "SEO optimization for better search visibility",
      "Secure authentication and data handling",
    ],
    websiteLink: "https://spar-fuchs.at",
    githubLink: undefined,
  },
  {
    id: 3,
    title: "KISS Photography",
    shortDescription:
      "Elegant Portfolio Website for a Professional Photography Brand",
    description:
      "KISS Photography is a bespoke portfolio website designed to showcase a professional photographer's best work. Built using Squarespace with custom design elements from Canva, the site balances visual appeal with functional simplicity. It's crafted to highlight imagery while offering smooth navigation, SEO-friendly structure, and easy client contact through a built-in form.",
    image: "/images/kiss-photography.png",
    tags: ["Canva", "Squarespace"],
    features: [
      "Curated photo gallery to highlight work",
      "Integrated contact form for client inquiries",
      "SEO optimization for better search visibility",
    ],
    websiteLink: "https://kiss-photography.com",
    githubLink: undefined,
  },
  {
    id: 4,
    title: "Rette dein Geld",
    shortDescription:
      "Modern Landing Page for Customer Engagement & Data Collection",
    description:
      "Rette dein Geld is a sleek and responsive landing page built to inform customers and streamline data collection. Designed with user experience and engagement in mind, this project features a fully animated interface, a custom-built questionnaire, and seamless backend integration for real-time data handling. Developed using Nuxt.js, Vue 3, and TypeScript, the site leverages Tailwind CSS with DaisyUI for rapid UI development, supported by a PHP & MySQL backend.",
    image: "/images/rette-dein-geld.at.webp",
    tags: [
      "Nuxt.js",
      "Vue3",
      "Typescript",
      "Tailwind CSS",
      "DaisyUI",
      "PHP",
      "MySQL",
    ],
    features: [
      "Google ReCAPTCHA for spam protection",
      "Custom-built questionnaire for user input",
      "Fully animated UI to enhance engagement",
      "Backend integration with automated email workflows",
      "Zapier connection for extended automation and workflow control",
    ],
    websiteLink: "https://rette-dein-geld.at/",
    githubLink: undefined,
  },
  {
    id: 5,
    title: "Shareify",
    shortDescription:
      "Export your (private) liked songs into a public playlist in spotify.",
    description:
      "Shareify transforms your private Spotify “Liked Songs” into a shareable public playlist. Whether you're looking to show off your music taste or simply make sharing easier, this tool provides a smooth and intuitive way to curate and export your favorites. Built with Next.js and React, the app integrates directly with the Spotify API and features a clean, responsive UI using Tailwind CSS and Shadcn.",
    image: "/images/shareify.webp",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Shadcn",
      "Tailwind CSS",
      "Spotify API",
    ],
    features: [
      "Secure login with Spotify OAuth",
      "Set a custom name for your playlist",
      "Upload your own playlist cover image",
      "Toggle between public and private playlist",
    ],
    websiteLink: "https://shareify-three.vercel.app/",
    githubLink: "https://github.com/mikeunge/shareify",
  },
  {
    id: 6,
    title: "SSHMan",
    shortDescription:
      "Effortless SSH Profile Management for Sysadmins & DevOps",
    description:
      "SSHMan is a lightweight, terminal-based tool designed to streamline SSH session management for system administrators and developers. Built with Go, it offers a secure and efficient way to organize SSH profiles, manage keys, and connect to servers quickly—without the clutter. Profiles are stored with strong encryption, ensuring sensitive data stays protected, and the app supports multiple platforms for maximum flexibility.",
    image: "/images/sshman.webp",
    tags: ["Go", "SSH", "Encryption", "SQLite"],
    features: [
      "Terminal User Interface (TUI)",
      "Keyboard driven workflow",
      "Built-in SSH key management",
      "Encrypted storage for SSH profiles",
      "Cross-platform compatibility",
    ],
    websiteLink: undefined,
    githubLink: "https://github.com/mikeunge/sshman",
  },
];
