"use client";

import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({
  text,
  className = "",
  delay = 100,
}: BlurTextProps) {
  const words = text.split(" ");
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          words.forEach((_, i) => {
            timerRef.current = setTimeout(() => {
              setVisibleWords((prev) => [...prev, i]);
            }, i * delay);
          });
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      observerRef.current?.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            transition: "opacity 0.35s ease, filter 0.35s ease, transform 0.35s ease",
            opacity: visibleWords.includes(i) ? 1 : 0,
            filter: visibleWords.includes(i) ? "blur(0px)" : "blur(10px)",
            transform: visibleWords.includes(i) ? "translateY(0)" : "translateY(50px)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
