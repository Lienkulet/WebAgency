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
      className="relative flex flex-col"
      style={{ minHeight: "100svh", background: "#000", overflow: "hidden" }}
    >
      {/* Background video — full cover */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        poster="/images/hero_bg.png"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay — stronger on mobile */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: "rgba(0,0,0,0.55)" }} />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "40%", background: "linear-gradient(to bottom, transparent, black)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center section-px flex-1 justify-center"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        {/* Badge */}
        <motion.div
          className="liquid-glass rounded-full inline-flex items-center"
          style={{ padding: "6px 14px", marginBottom: "clamp(20px, 4vw, 32px)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
        </motion.div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(2.6rem, 9vw, 5.5rem)",
            color: "#fff",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            marginBottom: "clamp(16px, 3vw, 24px)",
            maxWidth: "56rem",
          }}
        >
          <BlurText text="Craft That Commands Attention" delay={100} />
        </h1>

        {/* Subtext */}
        <motion.p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(13px, 2vw, 15px)",
            maxWidth: "26rem",
            lineHeight: 1.7,
            marginBottom: "clamp(28px, 5vw, 40px)",
          }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center"
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
