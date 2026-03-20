"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "A complete rebuild in under two weeks. The design was sharper than anything we'd briefed an agency on before — and it went live before our competitor even responded to their RFP.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote: "Conversions up 4x in the first month. We'd worked with three agencies before and never seen results like this. The team genuinely understood what we were trying to achieve.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "They understood our brand at a level most agencies never reach, even after months of briefings. The output was extraordinary — like having a senior creative director who actually listens.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export default function Testimonials() {
  return (
    <section className="section-px" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <motion.div
        className="flex flex-col items-center text-center"
        style={{ marginBottom: "64px" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="liquid-glass rounded-full inline-block"
          style={{ padding: "4px 14px", marginBottom: "16px" }}
        >
          <span style={{ fontFamily: "'Barlow', sans-serif", color: "#fff", fontSize: "12px", fontWeight: 500 }}>
            What They Say
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
          Don&apos;t take our word for it.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="liquid-glass flex flex-col"
            style={{ borderRadius: "16px", padding: "32px", gap: "24px" }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: "#fff", fontSize: "14px" }}>
                {t.name}
              </div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                {t.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
