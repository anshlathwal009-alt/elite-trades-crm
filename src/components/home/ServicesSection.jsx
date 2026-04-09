import { HOME, SERVICES_DATA } from "../../config/content.en";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import ArrowLink from "../ArrowLink";

export default function ServicesSection() {
  const s = HOME.services;

  return (
    <section className="section-padding">
      <div className="content-max">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading eyebrow={s.eyebrow} line1={s.headlineLine1} line2={s.headlineLine2} />
          <ArrowLink href={s.viewAllHref}>{s.viewAll.replace(" →", "")}</ArrowLink>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}