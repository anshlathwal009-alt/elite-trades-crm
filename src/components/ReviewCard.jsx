import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({ review, index = 0 }) {
  const initials = review.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="p-7 flex flex-col"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={15}
            fill="var(--color-accent-warm)"
            strokeWidth={0}
            style={{ color: "var(--color-accent-warm)" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-display flex-1 mb-6"
        style={{ fontSize: 17, fontStyle: "italic", fontWeight: 400, color: "var(--color-text-primary)", lineHeight: 1.65 }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5" style={{ borderTop: "0.5px solid var(--color-border-subtle)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "rgba(181,147,90,0.12)", border: "1px solid rgba(181,147,90,0.25)" }}
        >
          <span className="font-body text-xs font-semibold" style={{ color: "var(--color-accent-warm)" }}>{initials}</span>
        </div>
        <div>
          <p className="font-body text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>{review.name}</p>
          <p className="eyebrow mt-0.5" style={{ fontSize: 10 }}>{review.attribution}</p>
        </div>
      </div>
    </motion.div>
  );
}