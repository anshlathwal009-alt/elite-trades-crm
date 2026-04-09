import { motion } from "framer-motion";

export default function PageHero({ eyebrow, line1, line2, body, children }) {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)", paddingTop: 160 }}>
      <div className="content-max">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-dot mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-h1"
          style={{ color: "var(--color-text-primary)" }}
        >
          {line1} <em style={{ fontStyle: "italic" }}>{line2}</em>
        </motion.h1>
        {body && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body mt-4"
            style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "var(--content-narrow)" }}
          >
            {body}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}