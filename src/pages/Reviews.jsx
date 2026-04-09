import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PageHero from "../components/PageHero";
import ReviewCard from "../components/ReviewCard";
import CTASection from "../components/CTASection";
import { REVIEWS_PAGE, REVIEWS_DATA } from "../config/content.en";

export default function Reviews() {
  const h = REVIEWS_PAGE.hero;

  return (
    <div>
      <PageHero eyebrow={h.eyebrow} line1={h.headlineLine1} line2={h.headlineLine2}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-display"
              style={{ fontSize: 48, fontWeight: 300, color: "var(--color-text-primary)", lineHeight: 1 }}
            >
              {h.rating}
            </span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="var(--color-accent-warm)" strokeWidth={0} style={{ color: "var(--color-accent-warm)" }} />
              ))}
            </div>
          </div>
          <p className="font-body text-sm" style={{ color: "var(--color-text-muted)" }}>
            {h.ratingAttribution}
          </p>
          <a
            href="https://www.google.com/search?q=London+Elite+Trades+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-body text-sm mt-3 group"
            style={{ color: "var(--color-text-primary)" }}
          >
            <span className="group-hover:text-[var(--color-accent-warm)] transition-colors">{h.googleLink.replace(" →", "")}</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-accent-warm)]">→</span>
          </a>
        </motion.div>
      </PageHero>

      {/* Review grid */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection condensed />
    </div>
  );
}