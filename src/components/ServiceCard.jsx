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
      className="p-8"
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <Icon
        size={24}
        strokeWidth={1.5}
        style={{ color: "var(--color-accent-warm)" }}
      />
      <h4
        className="font-body mt-5 mb-2"
        style={{ fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)" }}
      >
        {service.title}
      </h4>
      <p
        className="font-body mb-4"
        style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
      >
        {service.description}
      </p>
      <ArrowLink href={`/services#${service.slug}`}>Explore service</ArrowLink>
    </motion.div>
  );
}