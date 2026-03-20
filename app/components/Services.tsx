import { ArrowRight, Monitor, ShoppingBag, Search, Award, Wrench, Megaphone } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Design & Dezvoltare Web",
    description:
      "Creăm site-uri web personalizate, optimizate pentru performanță și experiența utilizatorului, folosind cele mai noi tehnologii.",
  },
  {
    icon: ShoppingBag,
    title: "Soluții E-Commerce",
    description:
      "Construim magazine online performante care transformă vizitatorii în clienți fideli și cresc vânzările rapid și eficient.",
  },
  {
    icon: Search,
    title: "Optimizare SEO",
    description:
      "Optimizăm site-ul tău pentru motoarele de căutare și creștem vizibilitatea online pentru a atrage mai mulți clienți.",
  },
  {
    icon: Award,
    title: "Branding & Identitate",
    description:
      "Creăm identități de brand memorabile care rezonează cu publicul tău și te diferențiază de competiție.",
  },
  {
    icon: Wrench,
    title: "Mentenanță Web",
    description:
      "Oferim suport continuu și mentenanță pentru a asigura performanța optimă a site-ului tău, actualizări și securitate.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Strategii de marketing digital care generează rezultate măsurabile și cresc prezența ta online, de la SEO la campanii PPC.",
  },
];

export default function Services() {
  return (
    <section className="section-px" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <div className="flex flex-col items-center text-center" style={{ marginBottom: "64px" }}>
        <div
          className="liquid-glass rounded-full inline-block"
          style={{ padding: "4px 14px", marginBottom: "16px" }}
        >
          <span style={{ fontFamily: "'Barlow', sans-serif", color: "#fff", fontSize: "12px", fontWeight: 500 }}>
            Servicii
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
          }}
        >
          Ce putem face pentru tine.
        </h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          const isLastRow = i >= 3;
          const isLastCol = (i + 1) % 3 === 0;
          return (
            <div
              key={service.title}
              className="flex flex-col"
              style={{
                padding: "48px 40px",
                borderRight: isLastCol ? "none" : "1px solid rgba(255,255,255,0.08)",
                borderBottom: isLastRow ? "none" : "1px solid rgba(255,255,255,0.08)",
                background: "#0a0a0a",
              }}
            >
              <div style={{ marginBottom: "48px" }}>
                <Icon size={40} color="#fff" strokeWidth={1.25} />
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: "40px",
                }}
              >
                {service.description}
              </p>
              <a
                href="#"
                className="flex items-center"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#fff",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                Află Mai Multe
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
