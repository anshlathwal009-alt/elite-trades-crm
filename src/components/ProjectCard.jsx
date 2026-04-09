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
      <Link to="/projects" className="group block">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "var(--radius-lg)", aspectRatio: "4/5" }}
        >
          <img
            src={img}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{
              background: "linear-gradient(to top, rgba(26,26,24,0.82) 0%, rgba(26,26,24,0.1) 60%)",
            }}
          >
            <p className="eyebrow mb-1" style={{ color: "var(--color-accent-warm)" }}>{project.location}</p>
            <h3 className="font-display text-lg" style={{ color: "#FAFAF8", fontStyle: "italic", lineHeight: 1.3 }}>{project.name}</h3>
            <p className="font-body mt-1" style={{ fontSize: 12, color: "rgba(250,250,248,0.7)" }}>{project.type}</p>
          </div>
        </div>
        {/* Below-image info — visible always */}
        <div className="pt-3 pb-2">
          <p className="eyebrow eyebrow-dot mb-0.5">{project.location}</p>
          <h3
            className="font-body text-base font-medium group-hover:text-[var(--color-accent-warm)] transition-colors duration-200"
            style={{ color: "var(--color-text-primary)" }}
          >
            {project.name}
          </h3>
          <p className="eyebrow mt-0.5" style={{ color: "var(--color-text-muted)" }}>{project.type}</p>
        </div>
      </Link>
    </motion.div>
  );
}