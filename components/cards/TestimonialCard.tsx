import { Testimonial } from '@/data/testimonials';
import { motion } from 'motion/react'

const TestimonialCard = ({ testimonial, index }: {
    testimonial: Testimonial;
    index: number;
}) => {
    return (
        <motion.div
            key={testimonial.name}
            className="liquid-glass flex flex-col"
            style={{ borderRadius: "16px", padding: "32px", gap: "24px" }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
        >
            <p
                style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    flex: 1,
                }}
            >
                &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: "#fff", fontSize: "14px" }}>
                    {testimonial.name}
                </div>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                    {testimonial.role}
                </div>
            </div>
        </motion.div>
    )
}

export default TestimonialCard