"use client";

import { useEffect, useRef } from "react";

interface HlsVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HlsVideo({ src, className = "", style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if browser can play HLS natively (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    // Use hls.js for other browsers
    let hls: import("hls.js").default | null = null;
    import("hls.js").then(({ default: Hls }) => {
      if (Hls.isSupported()) {
        hls = new Hls({ autoStartLoad: true });
        hls.on(Hls.Events.ERROR, (_e, data) => console.error("[HLS error]", data));
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch((e) => console.error("[play error]", e));
        });
      } else {
        console.error("[HlsVideo] hls.js not supported in this browser");
      }
    }).catch((e) => console.error("[HlsVideo] import failed", e));

    return () => { hls?.destroy(); };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={style}
    />
  );
}
