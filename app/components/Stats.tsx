"use client";

import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";

const stats = [
  { value: "200+",   label: "Sites launched" },
  { value: "98%",    label: "Client satisfaction" },
  { value: "3.2x",   label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export default function Stats() {
  return (
    <section
      className="relative w-full section-px"
      style={{ paddingTop: "128px", paddingBottom: "128px", background: "#000", overflow: "hidden" }}
    >
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "saturate(0)" }}
      />

      <div
        className="absolute top-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }}
      />

      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="liquid-glass w-full"
          style={{ borderRadius: "24px", padding: "64px", maxWidth: "64rem" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center" style={{ gap: "32px" }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
