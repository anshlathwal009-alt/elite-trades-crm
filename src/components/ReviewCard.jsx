import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      className="p-6"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        border: "0.5px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill="var(--color-accent-warm)"
            strokeWidth={0}
            style={{ color: "var(--color-accent-warm)" }}
          />
        ))}
      </div>
      <p
        className="font-body mb-4"
        style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
      >
        "{review.text}"
      </p>
      <div className="flex items-center justify-between">
        <span
          className="font-body"
          style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}
        >
          {review.name}
        </span>
        <span className="eyebrow" style={{ letterSpacing: "0.06em" }}>
          {review.attribution}
        </span>
      </div>
    </motion.div>
  );
}