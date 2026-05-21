import { Service } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react'

const ServiceCard = ({ service, index, learnMore }: {
  service: Service;
  index: number;
  learnMore?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const cornerSize = 28;
  const cornerThickness = 2;
  const cornerColor = hovered ? "rgba(255,255,255,0.85)" : "transparent";

  return (
    <motion.div
      key={service.title}
      className="service-card flex flex-col relative cursor-pointer"
      style={{
        padding: "clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px)",
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
        {learnMore ?? "Learn More"}
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

export default ServiceCard