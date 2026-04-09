import { motion } from "framer-motion";
import { HOME, IMAGES } from "../../config/content.en";
import ArrowLink from "../ArrowLink";

export default function IntroSection() {
  const intro = HOME.intro;

  return (
    <section className="section-padding">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text — 5 cols */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="eyebrow eyebrow-dot mb-6"
            >
              {intro.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-h3 mb-6"
              style={{ color: "var(--color-text-primary)", maxWidth: 480 }}
            >
              {intro.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body mb-6 content-narrow"
              style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
            >
              {intro.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ArrowLink href={intro.linkHref}>{intro.link.replace(" →", "")}</ArrowLink>
            </motion.div>
          </div>

          {/* Spacer — 1 col */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Image — 6 cols */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              style={{
                borderRadius: "0 var(--radius-xl) var(--radius-xl) 0",
              }}
            >
              <img
                src={IMAGES.introPortrait}
                alt="London renovation staircase detail"
                className="w-full object-cover"
                style={{ height: "clamp(400px, 50vw, 640px)" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}