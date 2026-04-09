import { motion } from "framer-motion";
import { Hammer, Home, CookingPot, Zap, PaintBucket, Grid3x3, Building2, Ruler, Wrench } from "lucide-react";
import ArrowLink from "./ArrowLink";

const ICON_MAP = {
  Hammer,
  Home,
  CookingPot,
  Zap,
  PaintBucket,
  Grid3x3,
  Building2,
  Ruler,
  Wrench,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICON_MAP[service.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group cursor-pointer overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-border-subtle)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {service.image && (
        <div className="overflow-hidden" style={{ height: 180 }}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        <div
          className="w-10 h-10 flex items-center justify-center mb-4"
          style={{
            backgroundColor: "rgba(181,147,90,0.1)",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(181,147,90,0.2)",
          }}
        >
          <Icon size={20} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
        </div>
        <h4
          className="font-display mb-2"
          style={{ fontSize: 19, fontWeight: 500, fontStyle: "italic", color: "var(--color-text-primary)", lineHeight: 1.3 }}
        >
          {service.title}
        </h4>
        <p
          className="font-body mb-4"
          style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
        >
          {service.description}
        </p>
        <ArrowLink href={`/services#${service.slug}`}>Explore service</ArrowLink>
      </div>
    </motion.div>
  );
}