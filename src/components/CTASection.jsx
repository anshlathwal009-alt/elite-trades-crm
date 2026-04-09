import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";
import AccreditationBar from "./AccreditationBar";
import { HOME, COMPANY } from "../config/content.en";

export default function CTASection({ condensed = false }) {
  const cta = HOME.cta;

  return (
    <section style={{ backgroundColor: "var(--color-accent)" }}>
      <div
        className="section-padding"
        style={{
          paddingTop: condensed ? 80 : undefined,
          paddingBottom: condensed ? 40 : undefined,
        }}
      >
        <div className="content-max text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-dot"
            style={{ color: "rgba(250,250,248,0.6)" }}
          >
            {cta.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`font-display ${condensed ? "text-h2" : "text-h1"} mt-4 mb-6`}
            style={{ color: "#FAFAF8" }}
          >
            {cta.headlineLine1} <em style={{ fontStyle: "italic" }}>{cta.headlineLine2}</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body mb-8"
            style={{ fontSize: 16, color: "rgba(250,250,248,0.75)", lineHeight: 1.7 }}
          >
            {cta.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="font-body text-sm font-medium px-6 py-[10px] rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              style={{ backgroundColor: "#FAFAF8", color: "#1A1A18" }}
            >
              {cta.cta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <a
              href={COMPANY.phoneTel}
              className="font-body transition-colors duration-200"
              style={{ fontSize: 18, fontWeight: 500, color: "#FAFAF8" }}
            >
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-body transition-colors duration-200"
              style={{ fontSize: 14, color: "rgba(250,250,248,0.6)" }}
            >
              {COMPANY.email}
            </a>
          </motion.div>
        </div>
      </div>

      <div style={{ borderTop: "0.5px solid rgba(250,250,248,0.12)" }}>
        <AccreditationBar dark compact />
      </div>
    </section>
  );
}