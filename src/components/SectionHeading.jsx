import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, line1, line2, align = "left", light = false }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="eyebrow eyebrow-dot"
          style={{ color: light ? "rgba(250,250,248,0.6)" : undefined }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="font-display text-h2 mt-4"
        style={{ color: light ? "#FAFAF8" : "var(--color-text-primary)" }}
      >
        {line1} <em className="not-italic" style={{ fontStyle: "italic" }}>{line2}</em>
      </motion.h2>
    </div>
  );
}