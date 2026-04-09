import { motion } from "framer-motion";
import { HOME, PROJECTS_DATA } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import ButtonPrimary from "../ButtonPrimary";

export default function ProjectsSection() {
  const p = HOME.projects;
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="content-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow={p.eyebrow} line1={p.headlineLine1} line2={p.headlineLine2} />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body md:max-w-[360px]"
            style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
          >
            {p.supporting}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ButtonPrimary href="/projects" variant="outline">
            {p.viewAll}
          </ButtonPrimary>
        </motion.div>
      </div>
    </section>
  );
}