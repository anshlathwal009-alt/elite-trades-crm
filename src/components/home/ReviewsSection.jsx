import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { HOME, REVIEWS_DATA } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";

export default function ReviewsSection() {
  const r = HOME.reviews;
  const featured = REVIEWS_DATA.slice(0, 3);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
      <div className="content-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionHeading eyebrow={r.eyebrow} line1={r.headlineLine1} line2={r.headlineLine2} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="font-display" style={{ fontSize: 40, fontWeight: 300, color: "var(--color-text-primary)", lineHeight: 1 }}>
              {r.rating}
            </span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="var(--color-accent-warm)" strokeWidth={0} style={{ color: "var(--color-accent-warm)" }} />
                ))}
              </div>
              <p className="font-body" style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
                {r.ratingAttribution}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 flex flex-col"
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <Quote size={20} strokeWidth={1} style={{ color: "var(--color-accent-warm)", marginBottom: 12 }} />
              <p className="font-body flex-1 mb-5" style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                "{review.text}"
              </p>
              <div>
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={11} fill="var(--color-accent-warm)" strokeWidth={0} style={{ color: "var(--color-accent-warm)" }} />
                  ))}
                </div>
                <p className="font-body text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {review.name}
                </p>
                <p className="eyebrow mt-0.5" style={{ fontSize: 10 }}>{review.attribution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Link to="/reviews" className="font-body text-sm inline-flex items-center gap-1 group" style={{ color: "var(--color-text-secondary)" }}>
            <span className="group-hover:text-[var(--color-accent-warm)] transition-colors">Read all reviews</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block group-hover:text-[var(--color-accent-warm)]">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}