import { motion } from "framer-motion";
import { HOME } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";

export default function ProcessSection() {
  const p = HOME.process;

  return (
    <section className="section-padding">
      <div className="content-max">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading eyebrow={p.eyebrow} line1={p.headlineLine1} line2={p.headlineLine2} />
          <Link to="/contact" className="font-body text-sm inline-flex items-center gap-1 group self-start md:self-auto" style={{ color: "var(--color-text-muted)" }}>
            <span className="group-hover:text-[var(--color-accent-warm)] transition-colors">Get your free quote</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block group-hover:text-[var(--color-accent-warm)]">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x" style={{ borderTop: "0.5px solid var(--color-border)", borderBottom: "0.5px solid var(--color-border)" }}>
          {p.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="py-8 px-0 md:px-8 first:pl-0 last:pr-0"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display" style={{ fontSize: 48, fontWeight: 300, color: "var(--color-border)", lineHeight: 1 }}>
                  {step.number}
                </span>
                <p className="font-body font-medium" style={{ fontSize: 16, color: "var(--color-text-primary)" }}>
                  {step.title}
                </p>
              </div>
              <p className="font-body" style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}