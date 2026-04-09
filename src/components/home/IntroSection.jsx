import { motion } from "framer-motion";
import { HOME, IMAGES } from "../../config/content.en";
import ArrowLink from "../ArrowLink";

export default function IntroSection() {
  const intro = HOME.intro;

  return (
    <section className="section-padding">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden order-2 lg:order-1"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <img
              src={IMAGES.bathroomTub}
              alt="London renovation detail"
              className="w-full object-cover"
              style={{ height: "clamp(360px, 45vw, 560px)" }}
            />
            {/* Stat badge */}
            <div
              className="absolute bottom-6 left-6 px-5 py-3"
              style={{
                backgroundColor: "rgba(250,250,248,0.92)",
                backdropFilter: "blur(12px)",
                borderRadius: "var(--radius-lg)",
                border: "0.5px solid var(--color-border)",
              }}
            >
              <p className="font-body text-xs" style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>RESPONSE TIME</p>
              <p className="font-body font-medium" style={{ fontSize: 15, color: "var(--color-text-primary)" }}>Within 1 Hour</p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow eyebrow-dot mb-5"
            >
              {intro.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-display mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.25, color: "var(--color-text-primary)" }}
            >
              {intro.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-body mb-6"
              style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.75 }}
            >
              {intro.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ArrowLink href={intro.linkHref}>{intro.link.replace(" →", "")}</ArrowLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}