import { Translation } from "./types";

const ro: Translation = {
  nav: {
    home: "Acasă",
    services: "Servicii",
    work: "Portofoliu",
    testimonials: "Recenzii",
    bookCall: "Programează o discuție",
  },

  hero: {
    badge: "Studio digital pentru branduri moderne.",
    heading: "Website-ul pe care brandul tău îl merită",
    subtext:
      "Creăm site-uri moderne, rapide și gândite să atragă atenția. De la strategie și design până la dezvoltare — ne ocupăm de tot.",
    getStarted: "Începe acum",
    textNow: "Scrie-ne",
  },

  partners: {
    trustedBy: "Colaborăm cu branduri și echipe care apreciază calitatea",
  },

  services: {
    badge: "Procesul nostru",
    heading: "Cum lucrăm.",
    subtext:
      "Tu vii cu ideea, noi o transformăm într-un website complet funcțional. Planificare, design, dezvoltare și lansare — rapid și fără complicații.",
    getStarted: "Începe acum",
    learnMore: "Detalii",
    items: [
      {
        title: "Website-uri personalizate",
        description:
          "Construim website-uri moderne și rapide, adaptate perfect brandului și obiectivelor tale.",
      },
      {
        title: "Magazine online",
        description:
          "Magazine online optimizate pentru vânzări și o experiență excelentă pentru clienți.",
      },
      {
        title: "SEO & vizibilitate",
        description:
          "Optimizăm site-ul pentru Google astfel încât să atragi mai mulți clienți organic.",
      },
      {
        title: "Identitate vizuală",
        description:
          "Creăm branding memorabil care oferă personalitate și consistență afacerii tale.",
      },
      {
        title: "Suport & mentenanță",
        description:
          "Asigurăm actualizări, securitate și suport continuu pentru website-ul tău.",
      },
      {
        title: "Promovare online",
        description:
          "Strategii digitale orientate spre rezultate reale și creșterea afacerii.",
      },
    ],
  },
  work: {
    badge: "Proiectele noastre",
    heading: "Câteva proiecte realizate cu pasiune.",
    drag: "Glisează pentru a explora",
    viewSite: "Vezi website-ul",
    viewAll: "Vezi toate proiectele",
    projects: [
      { description: "Website pentru construcții creat pentru generarea de clienți noi." },
      { description: "Website pentru servicii exterioare destinat atragerii clienților locali." },
      { description: "Website imobiliar modern creat pentru prezentarea proprietăților premium." },
      { description: "Platformă imobiliară construită pentru cumpărări și închirieri rapide." },
      { description: "Website pentru cafea specialty axat pe comunitate și incluziune." },
      { description: "Magazin online de fashion creat pentru cumpărături rapide și simple." },
      { description: "Website pentru grooming dedicat încrederii și îngrijirii animalelor." },
      { description: "Website modern pentru barber shop axat pe programări și imagine." },
      { description: "Platformă veterinară creată pentru sănătatea și bunăstarea animalelor." },
      { description: "Website pentru brand de miere naturală și produse din stup." },
    ],
  },

  stats: {
    items: [
      { value: "200+", label: "Website-uri lansate" },
      { value: "98%", label: "Clienți mulțumiți" },
      { value: "3x", label: "Mai multe conversii" },
      { value: "5 zile", label: "Timp mediu de livrare" },
    ],
  },

  testimonials: {
    badge: "Părerea clienților",
    heading: "Rezultatele vorbesc de la sine.",
    items: [
      { role: "Proprietar, CebanBarber", quote: "Site-ul a fost lansat în câteva zile și imediat a început să aducă rezervări noi. Clienții îmi spun că arată exact ca experiența din frizerie — curat, precis, profesionist." },
      { role: "Director, Dialog Imobil", quote: "Aveam nevoie de un site care să gestioneze sute de anunțuri și să rămână premium. Au livrat exact asta — iar lead-urile din căutare organică s-au dublat în primele două luni." },
      { role: "Fondator, Comoara Stupului", quote: "Aveam o viziune clară despre cum voiam să se simtă brandul și au adus-o la viață mai bine decât mi-am imaginat. Site-ul acum spune povestea noastră într-un mod care rezonează cu fiecare client." },
    ],
  },

  contact: {
    badge: "Contact",
    heading: "Spune-ne despre proiectul tău.",
    subtext:
      "Trimite-ne câteva detalii, iar noi revenim cu un răspuns în cel mai scurt timp.",
    name: "Nume",
    email: "Email",
    message: "Mesaj",
    namePlaceholder: "Cum te numești?",
    emailPlaceholder: "emailultau@email.com",
    messagePlaceholder: "Descrie pe scurt proiectul tău...",
    send: "Trimite mesajul",
    sending: "Se trimite...",
    success: "Mesaj trimis cu succes!",
    error: "A apărut o problemă. Încearcă din nou.",
    validation: {
      nameRequired: "Completează numele.",
      nameMin: "Numele trebuie să aibă minim 2 caractere.",
      nameLetters: "Numele poate conține doar litere.",
      emailRequired: "Completează adresa de email.",
      emailInvalid: "Introdu un email valid.",
    },
  },

  cta: {
    heading: "Hai să construim ceva memorabil.",
    subtext:
      "Programează o discuție gratuită și vedem împreună cum poate arăta viitorul website-ului tău.",
    bookCall: "Programează o discuție",
    textNow: "Scrie-ne",
  },

  footer: {
    copyright: "© 2026 Studio",
    privacy: "Confidențialitate",
    terms: "Termeni și condiții",
    contact: "Contact",
  },
};

export default ro;