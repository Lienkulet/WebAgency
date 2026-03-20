"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface FillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  style?: React.CSSProperties;
  /** Fill colour that sweeps in. Defaults to white. */
  fillColor?: string;
  /** Text/icon colour after fill. Defaults to black. */
  activeColor?: string;
  /**
   * When true the fill starts fully visible and sweeps OUT on hover,
   * revealing a transparent button underneath (for solid white buttons).
   */
  reverse?: boolean;
}

export default function FillButton({
  children,
  onClick,
  type = "button",
  className = "",
  style = {},
  fillColor = "#fff",
  activeColor = "#000",
  reverse = false,
}: FillButtonProps) {
  const [hovered, setHovered] = useState(false);

  // reverse: fill sweeps out → text goes white, border appears
  // normal:  fill sweeps in  → text goes to activeColor
  const textColor = reverse
    ? hovered ? "#fff" : "#000"
    : hovered ? activeColor : "#fff";

  const scaleX = reverse
    ? hovered ? 0 : 1
    : hovered ? 1 : 0;

  const border = reverse
    ? hovered ? "1px solid rgba(255,255,255,0.35)" : "1px solid transparent"
    : style.border ?? "none";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`flex items-center rounded-full ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        color: textColor,
        transition: "color 0.25s ease, border-color 0.25s ease",
        ...style,
        border,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        className="absolute inset-0"
        style={{ background: fillColor, transformOrigin: reverse ? "right center" : "left center" }}
        initial={{ scaleX: reverse ? 1 : 0 }}
        animate={{ scaleX }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <span className="relative flex items-center" style={{ gap: "8px" }}>
        {children}
      </span>
    </motion.button>
  );
}
