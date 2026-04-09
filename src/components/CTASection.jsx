import { motion } from "framer-motion";
import AccreditationBar from "./AccreditationBar";
import { HOME, COMPANY } from "../config/content.en";
import { Phone, Mail } from "lucide-react";

export default function CTASection() {
  const cta = HOME.cta;

  return (
    <section style={{ backgroundColor: "var(--color-accent)" }}>
      <div className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="eyebrow eyebrow-dot mb-4"
                style={{ color: "rgba(250,250,248,0.55)" }}
              >
                {cta.eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="font-display text-h2 mb-5"
                style={{ color: "#FAFAF8" }}
              >
                {cta.headlineLine1} <em style={{ fontStyle: "italic" }}>{cta.headlineLine2}</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-body"
                style={{ fontSize: 16, color: "rgba(250,250,248,0.7)", lineHeight: 1.7 }}
              >
                {cta.body}
              </motion.p>
            </div>

            {/* Right — contact block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
              style={{
                backgroundColor: "rgba(250,250,248,0.08)",
                borderRadius: "var(--radius-xl)",
                border: "0.5px solid rgba(250,250,248,0.15)",
              }}
            >
              <a
                href="/contact"
                className="block w-full font-body text-sm font-semibold text-center py-[14px] rounded-full mb-5 transition-all duration-200 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-accent-warm)", color: "#FAFAF8", letterSpacing: "0.02em", boxShadow: "0 4px 20px rgba(181,147,90,0.3)" }}
              >
                Book Your Free Consultation
              </a>

              <div className="flex flex-col gap-4">
                <a href={COMPANY.phoneTel} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(250,250,248,0.1)" }}>
                    <Phone size={15} style={{ color: "var(--color-accent-warm)" }} />
                  </div>
                  <div>
                    <p className="font-body font-medium group-hover:text-[var(--color-accent-warm)] transition-colors" style={{ fontSize: 16, color: "#FAFAF8" }}>
                      {COMPANY.phone}
                    </p>
                    <p className="font-body" style={{ fontSize: 11, color: "rgba(250,250,248,0.45)" }}>24/7 Call Response</p>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(250,250,248,0.1)" }}>
                    <Mail size={15} style={{ color: "var(--color-accent-warm)" }} />
                  </div>
                  <p className="font-body text-sm group-hover:text-[var(--color-accent-warm)] transition-colors" style={{ color: "rgba(250,250,248,0.7)" }}>
                    {COMPANY.email}
                  </p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AccreditationBar dark />
    </section>
  );
}