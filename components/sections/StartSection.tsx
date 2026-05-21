"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import HlsVideo from "@/components/ui/HlsVideo";
import FillButton from "@/components/ui/FillButton";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function StartSection() {
  return (
    <section
      className="relative w-full section-px"
      id="services"
      style={{ paddingTop: "128px", paddingBottom: "128px", background: "#000", overflow: "hidden" }}
    >
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute top-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center" style={{ marginBottom: "80px" }}>
        <motion.div
          className="liquid-glass rounded-full inline-block"
          style={{ padding: "4px 14px", marginBottom: "16px" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ fontFamily: "'Barlow', sans-serif", color: "#fff", fontSize: "12px", fontWeight: 500 }}>
            How It Works
          </span>
        </motion.div>

        <motion.h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
            marginBottom: "24px",
            maxWidth: "42rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          How we work.
        </motion.h2>

        <motion.p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            maxWidth: "28rem",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Share your vision. We handle the rest — strategy, design, development, and launch. From brief to live in days, not quarters.
        </motion.p>

        <motion.a
          href="#contact"
          style={{ textDecoration: "none" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <FillButton style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}>
            Get Started
            <ArrowUpRight size={16} />
          </FillButton>
        </motion.a>
      </div>

      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
