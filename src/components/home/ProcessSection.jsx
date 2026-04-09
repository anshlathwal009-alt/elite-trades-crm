import { motion } from "framer-motion";
import { HOME } from "../../config/content.en";
import SectionHeading from "../SectionHeading";

export default function ProcessSection() {
  const p = HOME.process;

  return (
    <section className="section-padding">
      <div className="content-max">
        <div className="text-center mb-16">
          <SectionHeading eyebrow={p.eyebrow} line1={p.headlineLine1} line2={p.headlineLine2} align="center" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-[0.5px]"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {p.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.15 }}
                className="text-center md:text-left"
              >
                <p
                  className="eyebrow mb-4"
                  style={{ letterSpacing: "0.10em" }}
                >
                  {step.number} / {step.title}
                </p>
                <h4
                  className="font-body mb-3"
                  style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)" }}
                >
                  {step.title}
                </h4>
                <p
                  className="font-body"
                  style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}