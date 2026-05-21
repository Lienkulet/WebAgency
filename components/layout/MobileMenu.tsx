import { motion } from 'motion/react'
import FillButton from '../ui/FillButton'
import { ArrowUpRight } from 'lucide-react'

const MobileMenu = ({ navLinks, setOpen }: { navLinks: { title: string; url: string }[]; setOpen: (open: boolean) => void }) => {
    return (
        <motion.div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="flex flex-col items-center justify-center flex-1" style={{ gap: "8px" }}>
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.title}
                        href={link.url}
                        onClick={() => setOpen(false)}
                        style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontStyle: "italic",
                            fontSize: "clamp(2rem, 8vw, 3rem)",
                            color: "#fff",
                            textDecoration: "none",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        whileHover={{ x: 8, color: "rgba(255,255,255,0.6)", transition: { duration: 0.15 } }}
                    >
                        {link.title}
                    </motion.a>
                ))}

                <motion.div
                    style={{ marginTop: "40px" }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.06 }}
                >
                    <FillButton
                        reverse
                        fillColor="#fff"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", fontWeight: 500, padding: "14px 32px", background: "transparent", border: "1px solid rgba(255,255,255,0.25)" }}
                    >
                        Get Started
                        <ArrowUpRight size={16} />
                    </FillButton>
                </motion.div>
            </div>

            {/* Bottom hint */}
            <motion.p
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "center", paddingBottom: "40px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                hello@studio.com
            </motion.p>
        </motion.div>
    )
}

export default MobileMenu