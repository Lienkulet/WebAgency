import { Translation } from "./types";

const en: Translation = {
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    testimonials: "Testimonials",
    bookCall: "Book a Call",
  },
  hero: {
    badge: "A creative studio for the modern web.",
    heading: "The Website Your Brand Deserves",
    subtext: "We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof.",
    getStarted: "Get Started",
    textNow: "Text Now",
  },
  partners: {
    trustedBy: "Trusted by the teams behind",
  },
  services: {
    badge: "How It Works",
    heading: "How we work.",
    subtext: "Share your vision. We handle the rest — strategy, design, development, and launch. From brief to live in days, not quarters.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    items: [
      { title: "Web Design & Development", description: "Custom websites built for performance and user experience, using the latest technologies." },
      { title: "E-Commerce Solutions", description: "High-performing online stores that turn visitors into loyal customers and grow sales fast." },
      { title: "SEO Optimisation", description: "We improve your search engine rankings and grow your online visibility to attract more clients." },
      { title: "Branding & Identity", description: "Memorable brand identities that resonate with your audience and set you apart from the competition." },
      { title: "Web Maintenance", description: "Ongoing support and maintenance to keep your site fast, secure, and up to date." },
      { title: "Digital Marketing", description: "Digital marketing strategies that drive measurable results — from SEO to paid campaigns." },
    ],
  },
  work: {
    badge: "Our Work",
    heading: "Projects we're proud of.",
    drag: "Drag to explore",
    viewSite: "View Site",
    viewAll: "View all projects",
    projects: [
      { description: "Conversion-focused contractor site built to generate qualified leads." },
      { description: "Exterior services website designed to attract local homeowners." },
      { description: "Modern real estate site built to showcase premium listings." },
      { description: "Property platform designed for seamless buying and renting." },
      { description: "Specialty coffee website focused on community and inclusivity." },
      { description: "Fashion eCommerce store built for smooth online shopping." },
      { description: "Pet grooming website designed to build trust with owners." },
      { description: "Modern barber shop site focused on bookings and branding." },
      { description: "Veterinary products platform built to support animal wellbeing." },
      { description: "Natural honey brand website showcasing raw hive products." },
    ],
  },
  stats: {
    items: [
      { value: "200+", label: "Sites launched" },
      { value: "98%", label: "Client satisfaction" },
      { value: "3.2x", label: "More conversions" },
      { value: "5 days", label: "Average delivery" },
    ],
  },
  testimonials: {
    badge: "What They Say",
    heading: "Don't take our word for it.",
    items: [
      { role: "Owner, CebanBarber", quote: "The site went live in days and immediately started bringing in new bookings. Clients tell me it looks exactly like the experience in the shop — clean, sharp, professional." },
      { role: "Director, Dialog Imobil", quote: "We needed a site that could handle hundreds of listings and still feel premium. They delivered exactly that — and our leads from organic search doubled within the first two months." },
      { role: "Founder, Comoara Stupului", quote: "I had a vision for how I wanted the brand to feel and they brought it to life better than I imagined. The website now tells our story in a way that resonates with every customer." },
    ],
  },
  contact: {
    badge: "Contact",
    heading: "Let's talk about your project.",
    subtext: "We'd love to hear what you're building. Drop us a message and we'll get back to you within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your project...",
    send: "Send Message",
    sending: "Sending…",
    success: "Message sent! We'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    validation: {
      nameRequired: "Name is required.",
      nameMin: "Name must be at least 2 characters.",
      nameLetters: "Name can only contain letters.",
      emailRequired: "Email is required.",
      emailInvalid: "Enter a valid email address.",
    },
  },
  cta: {
    heading: "Let's build something worth visiting.",
    subtext: "Book a free strategy call. No decks, no fluff — just an honest conversation about what your site needs.",
    bookCall: "Book a Call",
    textNow: "Text Now",
  },
  footer: {
    copyright: "© 2026 Studio",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
  },
};

export default en;
