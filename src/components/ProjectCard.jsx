import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECT_IMAGES } from "../config/content.en";

export default function ProjectCard({ project, index = 0 }) {
  const img = PROJECT_IMAGES[project.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
    >
      <Link to={`/projects`} className="group block">
        <div
          className="overflow-hidden"
          style={{ borderRadius: "var(--radius-md) var(--radius-md) 0 0" }}
        >
          <img
            src={img}
            alt={project.name}
            className="w-full object-cover transition-transform duration-500"
            style={{ height: 280 }}
            loading="lazy"
          />
          <style>{`
            .group:hover img { transform: scale(1.04); }
          `}</style>
        </div>
        <div className="pt-4 pb-2">
          <p className="eyebrow eyebrow-dot mb-1">{project.location}</p>
          <h3
            className="font-body text-base font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            {project.name}
          </h3>
          <p
            className="eyebrow mt-1"
            style={{ color: "var(--color-accent-warm)" }}
          >
            <span style={{ color: "var(--color-accent-warm)" }}>●</span>{" "}
            {project.type}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}