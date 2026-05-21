"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import HlsVideo from "@/components/ui/HlsVideo";
import FillButton from "@/components/ui/FillButton";
import { useT } from "@/context/LanguageContext";

export default function CTAFooter() {
  const { t } = useT();

  return (
    <section className="relative w-full" style={{ paddingTop: "128px", background: "#000", overflow: "hidden" }}>
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: "rgba(0,0,0,0.65)" }} />
      <div className="absolute top-0 left-0 right-0 z-1 pointer-events-none" style={{ height: "300px", background: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none" style={{ height: "300px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-10 flex flex-col items-center text-center section-px" style={{ paddingBottom: "128px" }}>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(3rem, 7vw, 4.5rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
            marginBottom: "24px",
            maxWidth: "48rem",
          }}
        >
          {t.cta.heading}
        </h2>

        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            maxWidth: "24rem",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {t.cta.subtext}
        </p>

        <div className="flex items-center" style={{ gap: "12px" }}>
          <FillButton href="#contact" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}>
            {t.cta.bookCall}
            <ArrowUpRight size={16} />
          </FillButton>
          <FillButton href="sms:+37378789732" reverse fillColor="#fff" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", background: "transparent" }}>
            <MessageCircle size={14} />
            {t.cta.textNow}
          </FillButton>
        </div>

        <div
          className="w-full flex flex-col md:flex-row items-center justify-between"
          style={{ marginTop: "128px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)", gap: "16px" }}
        >
          <span style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
            {t.footer.copyright}
          </span>
          <div className="flex items-center" style={{ gap: "24px" }}>
            {[
              { label: t.footer.privacy, href: "#" },
              { label: t.footer.terms, href: "#" },
              { label: t.footer.contact, href: "#contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "12px", textDecoration: "none" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
