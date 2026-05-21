"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const textColor = reverse
    ? hovered ? "#fff" : "#000"
    : hovered ? activeColor : "#fff";

  const scaleX = reverse
    ? hovered ? 0 : 1
    : hovered ? 1 : 0;

  const border = reverse
    ? hovered ? "1px solid rgba(255,255,255,0.35)" : "1px solid transparent"
    : style.border ?? "none";

  const fill = (
    // Suppress hydration mismatch on the animated fill span — safe because
    // the span is purely decorative and re-renders immediately after mount.
    <span
      suppressHydrationWarning
      className="absolute inset-0 pointer-events-none"
      style={{
        background: fillColor,
        transformOrigin: reverse ? "right center" : "left center",
        transform: mounted
          ? `scaleX(${scaleX})`
          : `scaleX(${reverse ? 1 : 0})`,
        transition: mounted ? "transform 0.35s cubic-bezier(0.25,0.1,0.25,1)" : "none",
      }}
    />
  );

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

  const inner = (
    <>
      {fill}
      <span className="relative flex items-center" style={{ gap: "8px" }}>
        {children}
      </span>
    </>
  );

  return href ? (
    <motion.a href={href} {...sharedProps}>{inner}</motion.a>
  ) : (
    <motion.button type={type} {...sharedProps}>{inner}</motion.button>
  );
}
