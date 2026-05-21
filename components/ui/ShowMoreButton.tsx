"use client";

import { motion } from "motion/react";

interface ShowMoreButtonProps {
  remaining: number;
  onClick: () => void;
}

export default function ShowMoreButton({ remaining, onClick }: ShowMoreButtonProps) {
  return (
    <motion.div
      className="flex justify-center"
      style={{ marginTop: "48px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        onClick={onClick}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          color: "#fff",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "9999px",
          padding: "12px 32px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        whileHover={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.25)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        View all projects
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>+{remaining}</span>
      </motion.button>
    </motion.div>
  );
}
