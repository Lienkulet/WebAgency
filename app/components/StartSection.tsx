"use client";

import { ArrowUpRight, Monitor, ShoppingBag, Search, Award, Wrench, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import HlsVideo from "./HlsVideo";
import FillButton from "./FillButton";

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom websites built for performance and user experience, using the latest technologies.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "High-performing online stores that turn visitors into loyal customers and grow sales fast.",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description: "We improve your search engine rankings and grow your online visibility to attract more clients.",
  },
  {
    icon: Award,
    title: "Branding & Identity",
    description: "Memorable brand identities that resonate with your audience and set you apart from the competition.",
  },
  {
    icon: Wrench,
    title: "Web Maintenance",
    description: "Ongoing support and maintenance to keep your site fast, secure, and up to date.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Digital marketing strategies that drive measurable results — from SEO to paid campaigns.",
  },
];

function ServiceCard({ service, index, isLastRow, isLastCol }: {
  service: typeof services[0];
  index: number;
  isLastRow: boolean;
  isLastCol: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const cornerSize = 28;
  const cornerThickness = 2;
  const cornerColor = hovered ? "rgba(255,255,255,0.85)" : "transparent";

  return (
    <motion.div
      key={service.title}
      className="flex flex-col relative cursor-pointer"
      style={{
        padding: "48px 40px",
        borderRight: isLastCol ? "none" : "1px solid rgba(255,255,255,0.07)",
        borderBottom: isLastRow ? "none" : "1px solid rgba(255,255,255,0.07)",
        background: hovered ? "rgba(22,22,22,0.9)" : "rgba(12,12,12,0.82)",
        backdropFilter: "blur(12px)",
        overflow: "visible",
        transition: "background 0.35s ease",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Corner accents */}
      {/* Top-left */}
      <motion.div className="absolute pointer-events-none" style={{ top: -1, left: -1 }} animate={{ opacity: 1 }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: cornerSize, height: cornerThickness, background: cornerColor, transition: "background 0.3s" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: cornerThickness, height: cornerSize, background: cornerColor, transition: "background 0.3s" }} />
      </motion.div>
      {/* Top-right */}
      <motion.div className="absolute pointer-events-none" style={{ top: -1, right: -1 }} animate={{ opacity: 1 }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: cornerSize, height: cornerThickness, background: cornerColor, transition: "background 0.3s" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: cornerThickness, height: cornerSize, background: cornerColor, transition: "background 0.3s" }} />
      </motion.div>
      {/* Bottom-left */}
      <motion.div className="absolute pointer-events-none" style={{ bottom: -1, left: -1 }} animate={{ opacity: 1 }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: cornerSize, height: cornerThickness, background: cornerColor, transition: "background 0.3s" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: cornerThickness, height: cornerSize, background: cornerColor, transition: "background 0.3s" }} />
      </motion.div>
      {/* Bottom-right */}
      <motion.div className="absolute pointer-events-none" style={{ bottom: -1, right: -1 }} animate={{ opacity: 1 }}>
        <div style={{ position: "absolute", bottom: 0, right: 0, width: cornerSize, height: cornerThickness, background: cornerColor, transition: "background 0.3s" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: cornerThickness, height: cornerSize, background: cornerColor, transition: "background 0.3s" }} />
      </motion.div>

      {/* Icon */}
      <motion.div
        style={{ marginBottom: "32px" }}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Icon size={24} color="#fff" strokeWidth={1.5} />
        </div>
      </motion.div>

      <h3
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 600,
          fontSize: "17px",
          color: "#fff",
          marginBottom: "12px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
          lineHeight: 1.75,
          flex: 1,
          marginBottom: "32px",
        }}
      >
        {service.description}
      </p>

      <motion.a
        href="#"
        className="flex items-center"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: "#fff",
          gap: "8px",
          textDecoration: "none",
          width: "fit-content",
        }}
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.25 }}
      >
        Learn More
        <motion.span
          animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export default function StartSection() {
  return (
    <section
      className="relative w-full section-px"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <FillButton style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}>
            Get Started
            <ArrowUpRight size={16} />
          </FillButton>
        </motion.div>
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
            isLastRow={i >= 3}
            isLastCol={(i + 1) % 3 === 0}
          />
        ))}
      </div>
    </section>
  );
}
