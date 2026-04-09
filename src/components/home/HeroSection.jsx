import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { HOME, IMAGES, COMPANY } from "../../config/content.en";

export default function HeroSection() {
  const hero = HOME.hero;

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 600 }}>
      {/* Background image */}
      <div className="absolute inset-0" style={{ backgroundColor: "#1a1a12" }}>
        <img
          src={IMAGES.hero}
          alt="Premium London construction site"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, rgba(26,26,24,0.45) 0%, rgba(26,26,24,0.25) 40%, rgba(26,26,24,0.8) 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 lg:px-20 pb-10 md:pb-20">
        <div className="content-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
            {/* Headline block */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="eyebrow eyebrow-dot mb-4"
                style={{ color: "rgba(250,250,248,0.8)" }}
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="font-display text-hero"
                style={{ color: "#FAFAF8" }}
              >
                {hero.headlineLine1}
                <br />
                <em style={{ fontStyle: "italic" }}>{hero.headlineLine2}</em>
              </motion.h1>
            </div>

            {/* Supporting text + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="md:max-w-[280px] flex flex-col gap-5"
            >
              <p
                className="font-body"
                style={{ fontSize: 16, color: "rgba(250,250,248,0.85)", lineHeight: 1.6 }}
              >
                {hero.supporting}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 font-body text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] self-start"
                  style={{
                    backgroundColor: "var(--color-accent-warm)",
                    color: "#FAFAF8",
                    letterSpacing: "0.01em",
                    boxShadow: "0 4px 24px rgba(181,147,90,0.35)",
                  }}
                >
                  Book Free Consultation
                </a>
                <a
                  href={`tel:${COMPANY ? COMPANY.phone : ''}`}
                  className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium px-7 py-3 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] self-start"
                  style={{
                    backgroundColor: "rgba(250,250,248,0.12)",
                    color: "#FAFAF8",
                    border: "1.5px solid rgba(250,250,248,0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(250,250,248,0.12)",
              backdropFilter: "blur(8px)",
              border: "0.5px solid rgba(250,250,248,0.3)",
            }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} fill="#FAFAF8" strokeWidth={0} style={{ color: "#FAFAF8" }} />
              ))}
            </div>
            <span className="font-body" style={{ fontSize: 13, color: "#FAFAF8" }}>
              {hero.socialProof}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}