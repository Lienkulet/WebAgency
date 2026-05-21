import { motion } from "motion/react";

const HamburgerIcon = ({ open }: { open: boolean }) => {
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
  )
}

export default HamburgerIcon