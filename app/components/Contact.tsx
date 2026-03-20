"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import FillButton from "./FillButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: "14px",
    color: "#fff",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  return (
    <section className="section-px" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <motion.div
        className="flex flex-col items-center text-center"
        style={{ marginBottom: "72px" }}
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
            Contact
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
          Let&apos;s talk about your project.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "64px", maxWidth: "72rem", margin: "0 auto" }}>

        {/* Left — info */}
        <motion.div
          className="flex flex-col"
          style={{ gap: "40px" }}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            We&apos;d love to hear what you&apos;re building. Drop us a message and we&apos;ll get back to you within one business day.
          </p>

          <div className="flex flex-col" style={{ gap: "24px" }}>
            {[
              { icon: Mail,   label: "Email",    value: "clocicovalexandru@gmail.com" },
              { icon: Phone,  label: "Phone",    value: "+373 787 897 32" },
              { icon: MapPin, label: "Location", value: "Chisinau, Moldova" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className="flex items-center"
                style={{ gap: "16px" }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <motion.div
                  className="liquid-glass-strong flex items-center justify-center"
                  style={{ width: "40px", height: "40px", borderRadius: "9999px", flexShrink: 0 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={16} color="#fff" />
                </motion.div>
                <div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                    {label}
                  </div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 400, color: "#fff" }}>
                    {value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col"
          style={{ gap: "16px" }}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "16px" }}>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <label style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.3)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
              />
            </div>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <label style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.3)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
              />
            </div>
          </div>

          <div className="flex flex-col" style={{ gap: "8px" }}>
            <label style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={6}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.3)"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}
            />
          </div>

          <FillButton
            type="submit"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 500, padding: "14px 28px", marginTop: "8px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", justifyContent: "center" }}
          >
            Send Message
            <ArrowUpRight size={16} />
          </FillButton>
        </motion.form>
      </div>
    </section>
  );
}
