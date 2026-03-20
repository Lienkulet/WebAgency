"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import FillButton from "./FillButton";
import { useState } from "react";
import BlurText from "./BlurText";

function HeroButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className="flex items-center rounded-full"
      style={{
        fontFamily: "'Barlow', sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        color: hovered ? "#000" : "#fff",
        padding: "12px 24px",
        gap: "8px",
        border: "1px solid rgba(255,255,255,0.35)",
        background: "transparent",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "color 0.25s ease",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        className="absolute inset-0"
        style={{ background: "#fff", transformOrigin: "left center" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <span className="relative flex items-center" style={{ gap: "8px" }}>
        Get Started
        <ArrowUpRight size={16} />
      </span>
    </motion.button>
  );
}

export default function Hero() {
  return (
    <section
      className="relative"
      style={{ height: "1000px", background: "#000", overflow: "hidden" }}
    >
      {/* Background video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        poster="/images/hero_bg.png"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-auto object-contain z-0"
        style={{ top: "20%" }}
      />

      {/* Light darkening overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.05)" }} />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ paddingTop: "150px", paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Badge */}
        <div
          className="liquid-glass rounded-full inline-flex items-center"
          style={{ padding: "6px 14px", gap: "8px", marginBottom: "32px" }}
        >
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              color: "rgba(255,255,255,0.8)",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            A creative studio for the modern web.
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
            color: "#fff",
            lineHeight: 0.85,
            letterSpacing: "-4px",
            marginBottom: "24px",
            maxWidth: "56rem",
          }}
        >
          <BlurText text="The Website Your Brand Deserves" delay={100} />
        </h1>

        {/* Subtext */}
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
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center"
          style={{ gap: "12px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <HeroButton />
          <FillButton
            reverse
            fillColor="#fff"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", background: "transparent" }}
          >
            <MessageCircle size={14} />
            Text Now
          </FillButton>
        </motion.div>
      </div>
    </section>
  );
}
