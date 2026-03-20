"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Luminary",
    category: "E-Commerce",
    description: "A complete brand overhaul and Shopify build for a luxury skincare brand. Conversion rate tripled in 30 days.",
    tags: ["Branding", "E-Commerce", "SEO"],
    color: "#1a1a2e",
    accent: "#6c63ff",
  },
  {
    number: "02",
    title: "Arcline",
    category: "Web Design",
    description: "Full redesign of a B2B SaaS product site. Reduced bounce rate by 40% and doubled demo bookings.",
    tags: ["Web Design", "Development", "Analytics"],
    color: "#0d1f1a",
    accent: "#00c896",
  },
  {
    number: "03",
    title: "Helix Studio",
    category: "Branding",
    description: "Visual identity and launch site for a creative production studio. Built and shipped in 8 days.",
    tags: ["Branding", "Identity", "Web Design"],
    color: "#1f0d0d",
    accent: "#ff6b6b",
  },
  {
    number: "04",
    title: "Vanta Finance",
    category: "Web Development",
    description: "Custom fintech landing page with complex animations and a conversion-focused layout.",
    tags: ["Development", "Motion", "CRO"],
    color: "#0d0d1f",
    accent: "#4da6ff",
  },
  {
    number: "05",
    title: "Sage & Co.",
    category: "SEO & Marketing",
    description: "12-month SEO strategy and site rebuild for a wellness brand. Organic traffic up 280%.",
    tags: ["SEO", "Content", "Development"],
    color: "#1a1a0d",
    accent: "#c8e600",
  },
  {
    number: "06",
    title: "Forma",
    category: "E-Commerce",
    description: "Bespoke WooCommerce store for a furniture brand. Custom product configurator and checkout flow.",
    tags: ["E-Commerce", "UX", "Development"],
    color: "#1a0d14",
    accent: "#ff9fd4",
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export default function FeaturesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalWidth = projects.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;

  return (
    <section style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000", overflow: "hidden" }}>
      <motion.div
        className="flex flex-col items-center text-center section-px"
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
            Our Work
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
            marginBottom: "16px",
          }}
        >
          Projects we&apos;re proud of.
        </h2>
        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
          Drag to explore
        </p>
      </motion.div>

      {/* Drag track */}
      <div ref={containerRef} style={{ overflow: "hidden", cursor: "grab" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -(totalWidth - (typeof window !== "undefined" ? window.innerWidth : 1200) + 96) }}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          dragElastic={0.1}
          whileDrag={{ cursor: "grabbing" }}
          style={{ display: "flex", gap: CARD_GAP, paddingLeft: 48, paddingRight: 48, width: "max-content" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              style={{
                width: CARD_WIDTH,
                height: 500,
                borderRadius: "20px",
                background: project.color,
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "9999px",
                  background: project.accent,
                  opacity: 0.12,
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.number}
                </span>
                <motion.div
                  className="flex items-center justify-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.15, borderColor: "rgba(255,255,255,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={16} color="#fff" />
                </motion.div>
              </div>

              {/* Category pill */}
              <div style={{ position: "absolute", top: "40px", left: "50%", transform: "translateX(-50%)" }}>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: project.accent,
                    background: `${project.accent}18`,
                    border: `1px solid ${project.accent}40`,
                    borderRadius: "9999px",
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Bottom content */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: "2rem",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "16px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.4)",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
