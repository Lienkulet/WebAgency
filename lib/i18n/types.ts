export type Locale = "en" | "ro" | "ru";

export interface Translation {
  nav: {
    home: string;
    services: string;
    work: string;
    testimonials: string;
    bookCall: string;
  };
  hero: {
    badge: string;
    heading: string;
    subtext: string;
    getStarted: string;
    textNow: string;
  };
  partners: {
    trustedBy: string;
  };
  services: {
    badge: string;
    heading: string;
    subtext: string;
    getStarted: string;
    learnMore: string;
    items: { title: string; description: string }[];
  };
  work: {
    badge: string;
    heading: string;
    drag: string;
    viewSite: string;
    viewAll: string;
    projects: { description: string }[];
  };
  stats: {
    items: { value: string; label: string }[];
  };
  testimonials: {
    badge: string;
    heading: string;
    items: { role: string; quote: string }[];
  };
  contact: {
    badge: string;
    heading: string;
    subtext: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    validation: {
      nameRequired: string;
      nameMin: string;
      nameLetters: string;
      emailRequired: string;
      emailInvalid: string;
    };
  };
  cta: {
    heading: string;
    subtext: string;
    bookCall: string;
    textNow: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    contact: string;
  };
}
