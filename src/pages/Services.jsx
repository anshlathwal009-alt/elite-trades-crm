import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Hammer, Home, CookingPot, Zap, PaintBucket, Grid3x3, Building2, Ruler, Wrench, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import ButtonPrimary from "../components/ButtonPrimary";
import { SERVICES_PAGE, SERVICES_DATA, IMAGES } from "../config/content.en";

const ICON_MAP = { Hammer, Home, CookingPot, Zap, PaintBucket, Grid3x3, Building2, Ruler, Wrench };

const SERVICE_IMAGES = [
  IMAGES.bathroomTub,
  IMAGES.extensionProject,
  IMAGES.bathroomProject,
  IMAGES.mayfairProject,
  IMAGES.shower,
  IMAGES.hallway,
  IMAGES.introPortrait,
  IMAGES.londonCoverage,
];

export default function Services() {
  const h = SERVICES_PAGE.hero;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <PageHero eyebrow={h.eyebrow} line1={h.headlineLine1} line2={h.headlineLine2} />

      {/* Services grid overview */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Per-service detail sections */}
      {SERVICES_DATA.map((service, i) => {
        const Icon = ICON_MAP[service.icon] || Wrench;
        const imageLeft = i % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className="section-padding"
            style={{ backgroundColor: i % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-secondary)" }}
          >
            <div className="content-max">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center`}>
                {/* Image */}
                <motion.div
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-6 overflow-hidden ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  style={{ borderRadius: "var(--radius-xl)" }}
                >
                  <img
                    src={service.image || SERVICE_IMAGES[i]}
                    alt={service.title}
                    className="w-full object-cover"
                    style={{ height: "clamp(300px, 35vw, 450px)" }}
                    loading="lazy"
                  />
                </motion.div>

                {/* Text */}
                <div className={`lg:col-span-5 ${imageLeft ? "lg:order-2 lg:col-start-8" : "lg:order-1"}`}>
                  <Icon size={24} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
                  <h3
                    className="font-display text-h3 mt-4 mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-body mb-6"
                    style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
                  >
                    {service.details.body}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.details.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check size={16} strokeWidth={2} style={{ color: "var(--color-accent-warm)", flexShrink: 0 }} />
                        <span className="font-body text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ButtonPrimary href="/contact" variant="outline">
                    Request a quote →
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection condensed />
    </div>
  );
}