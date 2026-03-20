"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import FillButton from "./FillButton";

const navLinks = ["Home", "Services", "Work", "Testimonials", "Contact"];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div style={{ width: "20px", height: "14px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <motion.span
        style={{ display: "block", height: "1.5px", background: "#fff", borderRadius: "2px", transformOrigin: "center" }}
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.span
        style={{ display: "block", height: "1.5px", background: "#fff", borderRadius: "2px" }}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        style={{ display: "block", height: "1.5px", background: "#fff", borderRadius: "2px", transformOrigin: "center" }}
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between"
        style={{ padding: "0 24px" }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="Studio"
            width={48}
            height={48}
            className="rounded-full"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          className="hidden md:flex items-center"
          style={{ gap: "8px" }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="liquid-glass rounded-full flex items-center" style={{ padding: "8px" }}>
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-sm font-light text-white/70 rounded-full"
                style={{ fontFamily: "'Barlow', sans-serif", padding: "6px 16px" }}
                whileHover={{ color: "rgba(255,255,255,0.95)" }}
                transition={{ duration: 0.15 }}
              >
                {link}
              </motion.a>
            ))}
            <FillButton
              reverse
              fillColor="#fff"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "8px 18px", background: "transparent" }}
            >
              Get Started
              <ArrowUpRight size={14} />
            </FillButton>
          </div>
        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="flex md:hidden items-center justify-center liquid-glass rounded-full"
          style={{ width: "44px", height: "44px", border: "none", cursor: "pointer", background: "transparent" }}
          onClick={() => setOpen((v) => !v)}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <HamburgerIcon open={open} />
        </motion.button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col items-center justify-center flex-1" style={{ gap: "8px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(2rem, 8vw, 3rem)",
                    color: "#fff",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ x: 8, color: "rgba(255,255,255,0.6)", transition: { duration: 0.15 } }}
                >
                  {link}
                </motion.a>
              ))}

              <motion.div
                style={{ marginTop: "40px" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.06 }}
              >
                <FillButton
                  reverse
                  fillColor="#fff"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", fontWeight: 500, padding: "14px 32px", background: "transparent", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Get Started
                  <ArrowUpRight size={16} />
                </FillButton>
              </motion.div>
            </div>

            {/* Bottom hint */}
            <motion.p
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "center", paddingBottom: "40px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              hello@studio.com
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
