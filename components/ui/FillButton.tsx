"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface FillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  style?: React.CSSProperties;
  fillColor?: string;
  activeColor?: string;
  reverse?: boolean;
}

export default function FillButton({
  children,
  onClick,
  href,
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

  const sharedProps = {
    onClick,
    className: `flex items-center rounded-full ${className}`,
    style: {
      position: "relative" as const,
      overflow: "hidden" as const,
      cursor: "pointer",
      color: textColor,
      transition: "color 0.25s ease, border-color 0.25s ease",
      textDecoration: "none",
      ...style,
      border,
    },
    onHoverStart: () => setHovered(true),
    onHoverEnd: () => setHovered(false),
    whileTap: { scale: 0.96 },
  };

  return href ? (
    <motion.a href={href} {...sharedProps}>
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
    </motion.a>
  ) : (
    <motion.button type={type} {...sharedProps}>
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

