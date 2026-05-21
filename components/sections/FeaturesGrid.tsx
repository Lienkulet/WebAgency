"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import ShowMoreButton from "@/components/ui/ShowMoreButton";
import { useT } from "@/context/LanguageContext";

const INITIAL_COUNT = 6;

export default function FeaturesGrid() {
  const { t } = useT();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  return (
    <section id="work" style={{ paddingTop: "96px", paddingBottom: "96px", background: "#000" }}>
      <motion.div
        className="flex flex-col items-center text-center section-px"
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
            {t.work.badge}
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
          {t.work.heading}
        </h2>
      </motion.div>

      <div
        className="section-px"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        <AnimatePresence>
          {visible.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={{ ...project, description: t.work.projects[i]?.description ?? project.description }}
              index={i}
              initialCount={INITIAL_COUNT}
              viewSiteLabel={t.work.viewSite}
            />
          ))}
        </AnimatePresence>
      </div>

      {!showAll && PROJECTS.length > INITIAL_COUNT && (
        <ShowMoreButton
          remaining={PROJECTS.length - INITIAL_COUNT}
          label={t.work.viewAll}
          onClick={() => setShowAll(true)}
        />
      )}
    </section>
  );
}
