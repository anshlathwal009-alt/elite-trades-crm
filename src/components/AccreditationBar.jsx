import { motion } from "framer-motion";
import { HOME } from "../config/content.en";
import { Shield } from "lucide-react";

export default function AccreditationBar({ label, dark = false, compact = false }) {
  const logos = HOME.accreditations.logos;

  return (
    <div
      className={compact ? "py-5 px-5 md:px-10" : "section-padding"}
      style={{
        backgroundColor: dark ? "transparent" : "var(--color-bg-secondary)",
        paddingTop: compact ? 20 : 28,
        paddingBottom: compact ? 20 : 28,
      }}
    >
      <div className="content-max">
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-dot text-center mb-6"
            style={dark ? { color: "rgba(250,250,248,0.5)" } : undefined}
          >
            {label}
          </motion.p>
        )}
        <div className="flex items-center justify-between gap-6 overflow-x-auto pb-2 md:pb-0" style={{ WebkitOverflowScrolling: "touch" }}>
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-2 shrink-0"
              style={{
                filter: dark ? "brightness(0) invert(1)" : "grayscale(0.8)",
                opacity: dark ? 0.6 : 0.7,
                transition: "filter 300ms, opacity 300ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = dark ? "brightness(0) invert(1)" : "grayscale(0)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = dark ? "brightness(0) invert(1)" : "grayscale(0.8)";
                e.currentTarget.style.opacity = dark ? "0.6" : "0.7";
              }}
            >
              <Shield size={16} strokeWidth={1.5} style={{ color: dark ? "#FAFAF8" : "var(--color-text-muted)" }} />
              <span
                className="font-body whitespace-nowrap"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: dark ? "#FAFAF8" : "var(--color-text-secondary)",
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