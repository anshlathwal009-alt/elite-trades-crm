import { motion } from "framer-motion";
import { Leaf, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { ABOUT_PAGE, COMPANY, IMAGES, HOME } from "../config/content.en";

export default function About() {
  const a = ABOUT_PAGE;

  return (
    <div>
      {/* Hero with full-bleed image */}
      <section className="relative w-full overflow-hidden" style={{ height: "70svh", minHeight: 500 }}>
        <img
          src={IMAGES.aboutHero}
          alt="London Elite Trades team on site"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,26,24,0.65) 0%, transparent 60%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 lg:px-20 pb-10 md:pb-20">
          <div className="content-max">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display text-h1"
              style={{ color: "#FAFAF8" }}
            >
              {a.hero.headlineLine1} <em style={{ fontStyle: "italic" }}>{a.hero.headlineLine2}</em>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="/contact"
                className="font-body text-sm font-medium px-6 py-[10px] rounded-full transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: "rgba(250,250,248,0.15)",
                  color: "#FAFAF8",
                  border: "1.5px solid rgba(250,250,248,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {a.hero.cta}
              </a>
              <a
                href={COMPANY.phoneTel}
                className="font-body text-sm"
                style={{ color: "rgba(250,250,248,0.8)", paddingTop: 10 }}
              >
                {COMPANY.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="eyebrow eyebrow-dot mb-6"
              >
                {a.story.eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-h3 mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                {a.story.headline}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-body"
                style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
              >
                {a.story.body}
              </motion.p>
            </div>
            <div className="hidden lg:block lg:col-span-1" />
            <div className="lg:col-span-6">
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
                style={{ borderRadius: "var(--radius-xl)" }}
              >
                <img
                  src={IMAGES.mayfairProject}
                  alt="London Elite Trades project"
                  className="w-full object-cover"
                  style={{ height: "clamp(300px, 40vw, 500px)" }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <div className="content-max">
          <SectionHeading eyebrow={a.team.eyebrow} line1={a.team.headlineLine1} line2={a.team.headlineLine2} />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body mt-6 mb-10 content-narrow"
            style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
          >
            {a.team.body}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {a.team.roles.map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
                style={{
                  backgroundColor: "var(--color-surface-elevated)",
                  borderRadius: "var(--radius-lg)",
                  border: "0.5px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <span className="font-display text-lg" style={{ color: "var(--color-text-secondary)" }}>
                    {role.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <p className="font-body text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {a.values.map((val, i) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10"
                style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-xl)" }}
              >
                <span className="eyebrow" style={{ fontSize: 40, letterSpacing: "-0.02em", color: "var(--color-border)" }}>
                  {val.number}
                </span>
                <h3 className="font-display mt-4 mb-4" style={{ fontSize: 30, fontStyle: "italic", color: "var(--color-text-primary)" }}>
                  {val.title}
                </h3>
                <p className="font-body" style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  {val.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations detailed */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <div className="content-max">
          <SectionHeading eyebrow="Our Accreditations" line1="Industry" line2="accredited" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {HOME.accreditations.logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-4 p-5"
                style={{
                  backgroundColor: "var(--color-surface-elevated)",
                  borderRadius: "var(--radius-md)",
                  border: "0.5px solid var(--color-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <Check size={16} style={{ color: "var(--color-accent-warm)" }} />
                </div>
                <div>
                  <p className="font-body text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                    {logo}
                  </p>
                  <p className="font-body" style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
                    Verified accreditation
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow={a.sustainability.eyebrow}
                line1={a.sustainability.headlineLine1}
                line2={a.sustainability.headlineLine2}
              />
              <p
                className="font-body mt-6 mb-6"
                style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
              >
                {a.sustainability.body}
              </p>
              <ul className="flex flex-col gap-3">
                {a.sustainability.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <Leaf size={16} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)", flexShrink: 0 }} />
                    <span className="font-body text-sm" style={{ color: "var(--color-text-secondary)" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection condensed />
    </div>
  );
}