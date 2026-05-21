"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useT } from "@/context/LanguageContext";
import type { Locale } from "@/lib/i18n";

const locales: Locale[] = ["en", "ro", "ru"];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useT();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleToggle() {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      });
    }
    setOpen((v) => !v);
  }

  return (
    <>
      <motion.button
        ref={triggerRef}
        onClick={handleToggle}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.7)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px 10px",
          borderRadius: "9999px",
        }}
        whileHover={{ color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        {locale}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex" }}
        >
          <ChevronDown size={12} />
        </motion.span>
      </motion.button>

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: "fixed",
                top: coords.top,
                left: coords.left,
                transform: "translateX(-50%)",
                background: "rgba(12,12,12,0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                minWidth: "72px",
                zIndex: 9999,
              }}
            >
              {locales.map((l) => (
                <motion.button
                  key={l}
                  onClick={() => { setLocale(l); setOpen(false); }}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "7px 12px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    background: locale === l ? "rgba(255,255,255,0.1)" : "transparent",
                    color: locale === l ? "#fff" : "rgba(255,255,255,0.5)",
                    textAlign: "left",
                    width: "100%",
                  }}
                  whileHover={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
                  transition={{ duration: 0.12 }}
                >
                  {l}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
