"use client";

import { motion } from "motion/react";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-px"
      style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <motion.div
        className="flex flex-col items-center text-center"
        style={{ marginBottom: "64px" }}
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
            What They Say
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
          Don&apos;t take our word for it.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
}
