export interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  liveDemo: string;
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "R&D Perez Construction",
    description:
      "Website for a professional construction company specializing in residential and commercial building services, showcasing renovation projects, custom construction solutions, and a commitment to quality craftsmanship and reliable client service.",
    image: "/projects/rdperezconstruction.png",
    tags: ["React", "Next.js"],
    github: "",
    liveDemo: "https://rdperezconstruction.com/",
  },
  {
    number: "02",
    title: "Clean & Bright Solutions",
    description:
      "Website for a locally owned exterior home services company specializing in professional window cleaning, gutter cleaning, solar panel cleaning, and holiday lighting installation, focused on delivering spotless results, reliable service, and long-term home care solutions for residential properties.",
    image: "/projects/cleanandbright.png",
    tags: ["React", "Next.js"],
    github: "",
    liveDemo: "https://clearandbrightsolutions.com/",
  },
  {
    number: "03",
    title: "Dialog Imobil",
    description:
      "Website for a modern real estate agency in Moldova, offering residential and commercial property listings, investment opportunities, legal support, and personalized consulting services for buyers, sellers, renters, and investors across Chișinău and beyond.",
    image: "/projects/dialogimobil.png",
    tags: ["React", "Next.js"],
    github: "",
    liveDemo: "https://www.dialogimobil.md/en",
  },
  {
    number: "04",
    title: "Premier Imobil",
    description:
      "Website for a modern real estate platform in Chișinău, connecting people with premium property opportunities, including apartments, houses, commercial spaces, and land—designed to simplify buying, selling, and renting through a seamless and user-friendly experience",
    image: "/projects/PremierImobil.png",
    tags: ["React", "Next.js", "MongoDB"],
    github: "",
    liveDemo: "https://premierimobil.md/en",
  },
  {
    number: "05",
    title: "INC Coffee Roasters",
    description:
      "Website for a mission-driven coffee roastery and café, offering freshly roasted specialty coffee while promoting inclusivity through meaningful employment opportunities for individuals of all abilities.",
    image: "/projects/inccoffeeroasters.png",
    tags: ["React", "Next.js"],
    github: "",
    liveDemo: "https://www.inccoffeeroasters.com/",
  },
    {
    number: "06",
    title: "Brandy Store",
    description:
      "eCommerce for a local clothing store, offering a curated selection of stylish apparel with seamless shopping features to enhance your online shopping experience.",
    image: "/projects/clothes.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    github: "",
    liveDemo: "https://brandy-store.vercel.app/",
  },
   {
    number: "07",
    title: "BeautyPaw Grooming",
    description:
      "Website for a pet care and grooming service, offering specialized treatments and products to keep your pets healthy, clean, and looking their best",
    image: "/projects/beautypaw.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    liveDemo: "https://beauty-paws.vercel.app/",
  },
  {
    number: "08",
    title: "CebanBarber",
    description:
      "Website for a local barber shop, offering expert grooming services to help you look and feel your best.",
    image: "/projects/cebanbarber.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    liveDemo: "https://www.cebanbarber.com/",
  },
    {
    number: "09",
    title: "VetMaxiTeh",
    description:
      "Website for a local veterinary products platform dedicated to supporting animal health and wellbeing.",
    image: "/projects/vetmaxi.png",
    tags: ["React", "Next.js", "NextAuth", "MongoDB", "Tailwind CSS"],
    github: "",
    liveDemo: "https://vetmaxiteh.com/",
  },
    {
    number: "10",
    title: "Comoara Stupului",
    description:
      "Website for a local honey brand showcasing natural bee products and offering raw, minimally processed honey and other hive-based goods.",
    image: "/projects/ComoaraStupului.png",
    tags: ["React", "Next.js", "MongoDB"],
    github: "",
    liveDemo: "https://comoarastupului.netlify.app/",
  },
];