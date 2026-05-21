import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react'

const HeroButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.button
            className="flex items-center rounded-full"
            style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: hovered ? "#000" : "#fff",
                padding: "12px 24px",
                gap: "8px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "transparent",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "color 0.25s ease",
            }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileTap={{ scale: 0.96 }}
        >
            <motion.span
                className="absolute inset-0"
                style={{ background: "#fff", transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <span className="relative flex items-center" style={{ gap: "8px" }}>
                Get Started
                <ArrowUpRight size={16} />
            </span>
        </motion.button>
    )
}

export default HeroButton