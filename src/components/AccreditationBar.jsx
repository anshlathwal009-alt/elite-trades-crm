import { motion } from "framer-motion";
import { HOME } from "../config/content.en";
import { Shield } from "lucide-react";

export default function AccreditationBar({ label, dark = false, compact = false }) {
  const logos = HOME.accreditations.logos;

  return (
    <div
      style={{
        backgroundColor: dark ? "transparent" : "var(--color-bg-secondary)",
        paddingTop: compact ? 20 : 32,
        paddingBottom: compact ? 20 : 32,
        paddingLeft: compact ? 20 : undefined,
        paddingRight: compact ? 20 : undefined,
      }}
      className={compact ? "" : "section-padding"}
    >
      <div className={compact ? "" : "content-max"}>
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-dot text-center mb-5"
            style={dark ? { color: "rgba(250,250,248,0.5)" } : undefined}
          >
            {label}
          </motion.p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-1.5"
              style={{ opacity: dark ? 0.6 : 0.7 }}
            >
              <Shield size={13} strokeWidth={1.5} style={{ color: dark ? "#FAFAF8" : "var(--color-text-muted)", flexShrink: 0 }} />
              <span
                className="font-body whitespace-nowrap"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: dark ? "rgba(250,250,248,0.85)" : "var(--color-text-secondary)",
                }}
              >
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}