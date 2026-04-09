import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { HOME, REVIEWS_DATA } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import ReviewCard from "../ReviewCard";

export default function ReviewsSection() {
  const r = HOME.reviews;
  const featured = REVIEWS_DATA.slice(0, 3);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — heading + rating */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={r.eyebrow} line1={r.headlineLine1} line2={r.headlineLine2} />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-display"
                  style={{ fontSize: 64, fontWeight: 300, color: "var(--color-text-primary)", lineHeight: 1 }}
                >
                  {r.rating}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="var(--color-accent-warm)" strokeWidth={0} style={{ color: "var(--color-accent-warm)" }} />
                  ))}
                </div>
              </div>
              <p className="font-body" style={{ fontSize: 14, color: "var(--color-text-muted)" }}>
                {r.ratingAttribution}
              </p>
            </motion.div>
          </div>

          {/* Right — review cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {featured.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}