"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import FillButton from "@/components/ui/FillButton";
import HamburgerIcon from "../icons/HamburgerIcon";
import MobileMenu from "./MobileMenu";
import { useT } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navUrls = ["/", "#services", "#work", "#testimonials"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useT();

  const navLinks = [
    { title: t.nav.home, url: navUrls[0] },
    { title: t.nav.services, url: navUrls[1] },
    { title: t.nav.work, url: navUrls[2] },
    { title: t.nav.testimonials, url: navUrls[3] },
  ];

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
            loading="eager"
            priority
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
                key={link.url}
                href={link.url}
                className="text-sm font-light text-white/70 rounded-full"
                style={{ fontFamily: "'Barlow', sans-serif", padding: "6px 16px" }}
                whileHover={{ color: "rgba(255,255,255,0.95)" }}
                transition={{ duration: 0.15 }}
              >
                {link.title}
              </motion.a>
            ))}
            <LanguageSwitcher />
            <FillButton
              reverse
              fillColor="#fff"
              href="#contact"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "8px 18px", background: "transparent" }}
            >
              {t.nav.bookCall}
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
          <MobileMenu navLinks={navLinks} setOpen={setOpen} />
        )}
      </AnimatePresence>
    </>
  );
}
