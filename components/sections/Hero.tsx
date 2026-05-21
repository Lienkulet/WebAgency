"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import FillButton from "@/components/ui/FillButton";
import BlurText from "@/components/ui/BlurText";
import HeroButton from "@/components/ui/HeroButton";
import { useT } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useT();

  return (
    <section
      className="relative flex flex-col"
      style={{ minHeight: "100svh", background: "#000", overflow: "hidden" }}
    >
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        poster="/images/hero_bg.png"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: "rgba(0,0,0,0.55)" }} />
      <div
        className="absolute bottom-0 left-0 right-0 z-1 pointer-events-none"
        style={{ height: "40%", background: "linear-gradient(to bottom, transparent, black)" }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center section-px flex-1 justify-center"
        style={{ paddingTop: "100px", paddingBottom: "80px" }}
      >
        <motion.div
          className="liquid-glass rounded-full inline-flex items-center"
          style={{ padding: "6px 14px", marginBottom: "clamp(20px, 4vw, 32px)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 500 }}>
            {t.hero.badge}
          </span>
        </motion.div>

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
          <BlurText text={t.hero.heading} delay={100} />
        </h1>

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
          {t.hero.subtext}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "12px" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <HeroButton label={t.hero.getStarted} />
          <FillButton
            reverse
            fillColor="#fff"
            href="sms:+37378789732"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", background: "transparent" }}
          >
            <MessageCircle size={14} />
            {t.hero.textNow}
          </FillButton>
        </motion.div>
      </div>
    </section>
  );
}
