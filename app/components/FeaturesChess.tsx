"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FillButton from "./FillButton";

interface FeatureRowProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  reversed?: boolean;
  index: number;
}

function FeatureRow({ title, description, buttonText, imageSrc, reversed = false, index }: FeatureRowProps) {
  return (
    <motion.div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
      style={{ gap: "80px", padding: "64px 0" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex-1 flex flex-col items-start">
        <h3
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 0.9,
            marginBottom: "24px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "28rem",
          }}
        >
          {description}
        </p>
        <FillButton style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "12px 24px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}>
          {buttonText}
        </FillButton>
      </div>

      <motion.div
        className="flex-1 liquid-glass w-full overflow-hidden"
        style={{ borderRadius: "16px", aspectRatio: "16/9" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesChess() {
  return (
    <section className="section-px" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <motion.div
        className="flex flex-col items-center text-center"
        style={{ marginBottom: "16px" }}
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
            Capabilities
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
          Built with purpose. Finished to last.
        </h2>
      </motion.div>

      <FeatureRow
        index={0}
        title="Designed to convert. Built to perform."
        description="Every pixel is intentional. We study what works, then craft something that outperforms — visually and commercially."
        buttonText="Learn more"
        imageSrc="/images/img1agency.png"
      />

      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.05)" }} />

      <FeatureRow
        index={1}
        title="Strategy baked in from day one."
        description="We don't just make things look good. Every decision — layout, copy, flow — is informed by how people actually behave online."
        buttonText="See how it works"
        imageSrc="/images/img2agency.png"
        reversed
      />
    </section>
  );
}
