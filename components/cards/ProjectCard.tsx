"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

function ProjectCardImage({ image, title, number }: { image: string; title: string; number: string }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#111" }}>
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, #0d0d0d 100%)",
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          fontFamily: "'Barlow', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.12em",
        }}
      >
        {number}
      </span>
    </div>
  );
}

function ProjectCardTags({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "9999px",
            padding: "3px 10px",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  initialCount: number;
  viewSiteLabel?: string;
}

export default function ProjectCard({ project, index, initialCount, viewSiteLabel }: ProjectCardProps) {
  const dragStartX = useRef(0);

  return (
    <motion.a
      key={project.title}
      href={project.liveDemo || undefined}
      target="_blank"
      rel="noopener noreferrer"
      onMouseDown={(e) => { dragStartX.current = e.clientX; }}
      onClick={(e) => {
        if (Math.abs(e.clientX - dragStartX.current) > 4) e.preventDefault();
      }}
      style={{
        display: "block",
        borderRadius: "16px",
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        cursor: project.liveDemo ? "pointer" : "default",
        textDecoration: "none",
        position: "relative",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % initialCount) * 0.05 }}
      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)", transition: { duration: 0.25 } }}
    >
      <ProjectCardImage image={project.image} title={project.title} number={project.number} />

      <div style={{ padding: "24px 28px 28px" }}>
        <h3
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "10px",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            fontSize: "13px",
            lineHeight: 1.65,
            marginBottom: "20px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
          <ProjectCardTags tags={project.tags} />

          {project.liveDemo && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                flexShrink: 0,
                fontFamily: "'Barlow', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              {viewSiteLabel ?? "View Site"}
              <ArrowUpRight size={13} />
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
