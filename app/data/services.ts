export type Service = {
  title: string;
  description: string;
  points?: string[];
  image?: string;
  images?: string[];
  video?: string;
  mediaBackground?: string;
  mediaPadding?: string;
  mediaFit?: "cover" | "contain";
};

export const services: Service[] = [
  {
    title: "Custom Software",
    description:
      "Custom software development tailored to your business processes, from internal systems to customer-facing platforms, built to scale as your business grows.",
    points: [
      "Web Applications",
      "Internal Systems",
      "Customer Portals",
      "Enterprise Platforms",
      "API Integrations",
    ],
    image: "/images/services/software-1.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "AI Solutions",
    description:
      "AI solutions designed to automate workflows, streamline operations, and enhance decision-making. From AI agents to intelligent automation, we integrate AI into everyday business operations.",
    points: [
      "AI Agents",
      "Workflow Automation",
      "AI Chatbots",
      "AI Integration",
    ],
    image: "/images/clients/ydc.png",
    video: "/images/services/ai.mp4",
    mediaBackground: "#323232",
    mediaFit: "cover",
  },
  {
    title: "Energy Management Systems",
    description:
      "Intelligent systems that monitor, control, and optimise BESS, solar, grid supply, generators, and energy loads—improving efficiency, reducing costs, and enhancing reliability.",
    points: [
      "Operational Dashboards",
      "Real-time Monitoring",
      "Data Visualization",
    ],
    image: "/images/services/ems.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "Website Design",
    description:
      "Websites that combine thoughtful design, seamless user experience, and modern development. Built to perform and strengthen your digital presence.",
    points: ["Corporate Websites", "CMS Integration", "CMS Builds"],
    image: "/images/services/t1.png",
    images: [
      "/images/services/website-design-1.png",
      "/images/services/website-design-2.png",
      "/images/services/website-design-3.png",
    ],
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
  {
    title: "Product Design",
    description:
      "From research and strategy to interface design, we create digital products that are intuitive, functional, and built around real user needs.",
    points: ["UX Research", "UI Design", "Design Systems", "Prototyping"],
    image: "/images/services/ux.png",
    mediaBackground: "#ffffff",
    mediaFit: "cover",
  },
];
