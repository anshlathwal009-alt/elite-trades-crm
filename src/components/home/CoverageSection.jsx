import { motion } from "framer-motion";
import { HOME, IMAGES } from "../../config/content.en";
import SectionHeading from "../SectionHeading";

export default function CoverageSection() {
  const c = HOME.coverage;

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text — 5 cols */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={c.eyebrow} line1={c.headlineLine1} line2={c.headlineLine2} />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body mt-6 mb-6"
              style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
            >
              {c.body}
            </motion.p>

            {/* Borough pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {c.boroughs.map((b) => (
                <span
                  key={b}
                  className="font-body inline-block px-3 py-1 rounded-full"
                  style={{
                    fontSize: 12,
                    backgroundColor: "var(--color-surface)",
                    border: "0.5px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-body"
              style={{ fontSize: 14, color: "var(--color-text-muted)", fontStyle: "italic", lineHeight: 1.6 }}
            >
              {c.satisfaction}
            </motion.p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Image — 6 cols */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <img
                src={IMAGES.londonCoverage}
                alt="Aerial view of London"
                className="w-full object-cover"
                style={{ height: "clamp(300px, 40vw, 500px)" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}