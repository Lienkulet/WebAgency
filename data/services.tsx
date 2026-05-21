import { Award, Megaphone, Monitor, Search, ShoppingBag, Wrench } from "lucide-react";

export interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom websites built for performance and user experience, using the latest technologies.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "High-performing online stores that turn visitors into loyal customers and grow sales fast.",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description: "We improve your search engine rankings and grow your online visibility to attract more clients.",
  },
  {
    icon: Award,
    title: "Branding & Identity",
    description: "Memorable brand identities that resonate with your audience and set you apart from the competition.",
  },
  {
    icon: Wrench,
    title: "Web Maintenance",
    description: "Ongoing support and maintenance to keep your site fast, secure, and up to date.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Digital marketing strategies that drive measurable results — from SEO to paid campaigns.",
  },
];