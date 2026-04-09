import { HOME, SERVICES_DATA } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import ArrowLink from "../ArrowLink";

export default function ServicesSection() {
  const s = HOME.services;
  const featured = SERVICES_DATA.slice(0, 4);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="content-max">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading eyebrow={s.eyebrow} line1={s.headlineLine1} line2={s.headlineLine2} />
          <ArrowLink href={s.viewAllHref}>{s.viewAll.replace(" →", "")}</ArrowLink>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}