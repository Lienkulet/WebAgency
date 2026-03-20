"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import FillButton from "./FillButton";

const navLinks = ["Home", "Services", "Work", "Testimonials", "Contact"];

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between"
      style={{ padding: "0 40px" }}
    >
      <motion.div
        className="flex items-center"
        style={{ gap: "8px" }}
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

      <motion.div
        className="flex items-center"
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
    </nav>
  );
}
