import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { PROJECTS_PAGE, PROJECTS_DATA, PROJECT_IMAGES } from "../config/content.en";

export default function Projects() {
  const h = PROJECTS_PAGE.hero;
  const [activeFilter, setActiveFilter] = useState("All");

  const filterMap = PROJECTS_PAGE.filterMap;
  const filtered = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.filterCategory === filterMap[activeFilter]);

  // Featured case study (first project)
  const featured = PROJECTS_DATA[0];

  return (
    <div>
      <PageHero eyebrow={h.eyebrow} line1={h.headlineLine1} line2={h.headlineLine2} body={h.body} />

      {/* Featured case study */}
      <section className="section-padding" style={{ paddingBottom: 0 }}>
        <div className="content-max">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
            style={{ backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-xl)" }}
          >
            <div className="lg:col-span-7">
              <img
                src={PROJECT_IMAGES[featured.id]}
                alt={featured.name}
                className="w-full object-cover"
                style={{ height: "clamp(280px, 30vw, 420px)" }}
              />
            </div>
            <div className="lg:col-span-5 p-6 lg:p-10">
              <p className="eyebrow eyebrow-dot mb-2">{featured.location}</p>
              <h3 className="font-display text-h3 mb-3" style={{ color: "var(--color-text-primary)" }}>
                {featured.name}
              </h3>
              <p className="eyebrow mb-4" style={{ color: "var(--color-accent-warm)" }}>
                ● {featured.type}
              </p>
              <p className="font-body mb-6" style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                {featured.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="section-padding" style={{ paddingBottom: 0, paddingTop: 60 }}>
        <div className="content-max">
          <div className="flex flex-wrap gap-2 mb-12">
            {PROJECTS_PAGE.filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: activeFilter === f ? "var(--color-accent)" : "var(--color-surface)",
                  color: activeFilter === f ? "var(--color-text-on-accent)" : "var(--color-text-secondary)",
                  border: activeFilter === f ? "none" : "0.5px solid var(--color-border)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="content-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection condensed />
    </div>
  );
}