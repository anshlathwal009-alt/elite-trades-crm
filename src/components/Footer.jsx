import { Link } from "react-router-dom";
import { COMPANY, FOOTER, ALL_SERVICES_LIST } from "../config/content.en";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-accent)" }}>
      {/* Top row */}
      <div className="section-padding" style={{ paddingTop: 60, paddingBottom: 0 }}>
        <div className="content-max flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10" style={{ borderBottom: "0.5px solid rgba(250,250,248,0.12)" }}>
          <Link to="/" className="font-display text-xl font-medium" style={{ color: "#FAFAF8" }}>
            London Elite Trades
          </Link>
          <Link
            to="/contact"
            className="font-body text-sm font-medium px-6 py-[10px] rounded-full transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: "#FAFAF8", color: "#1A1A18" }}
          >
            {FOOTER.cta}
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="section-padding" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="content-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Office */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
              {FOOTER.columns.address.label}
            </p>
            <div className="font-body text-sm leading-7" style={{ color: "rgba(250,250,248,0.65)" }}>
              <p>{COMPANY.legalName}</p>
              <p>{COMPANY.address.line1}</p>
              <p>{COMPANY.address.line2}</p>
              <p>{COMPANY.address.area}</p>
              <p>{COMPANY.address.city}</p>
              <p>{COMPANY.address.postcode}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
              {FOOTER.columns.contact.label}
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <p className="font-body text-xs" style={{ color: "rgba(250,250,248,0.45)" }}>Telephone</p>
              <a href={COMPANY.phoneTel} className="font-body text-sm font-medium transition-colors duration-200 hover:text-white" style={{ color: "rgba(250,250,248,0.85)" }}>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="font-body text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(250,250,248,0.65)" }}>
                {COMPANY.email}
              </a>
            </div>

            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-2" style={{ color: "#FAFAF8" }}>
              {FOOTER.columns.hours.label}
            </p>
            <div className="font-body text-sm" style={{ color: "rgba(250,250,248,0.65)" }}>
              <p>{COMPANY.hours}</p>
              <p>{COMPANY.hoursClosed}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
              {FOOTER.columns.social.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Facebook", href: "#" },
                { name: "Instagram", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "X", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "Google", href: "#" },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="font-body text-xs transition-colors duration-200 hover:text-white px-3 py-1 rounded-full"
                  style={{ color: "rgba(250,250,248,0.65)", border: "0.5px solid rgba(250,250,248,0.2)" }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Client Reviews", href: "/reviews" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(250,250,248,0.65)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="section-padding" style={{ paddingTop: 0, paddingBottom: 32 }}>
        <div className="content-max pt-8" style={{ borderTop: "0.5px solid rgba(250,250,248,0.12)" }}>
          <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(250,250,248,0.4)" }}>
            All Services
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {ALL_SERVICES_LIST.map((s) => (
              <Link
                key={s}
                to="/services"
                className="font-body text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(250,250,248,0.4)" }}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="section-padding" style={{ paddingTop: 0, paddingBottom: 28 }}>
        <div className="content-max pt-5" style={{ borderTop: "0.5px solid rgba(250,250,248,0.12)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs" style={{ color: "rgba(250,250,248,0.35)" }}>
              {FOOTER.legal}
            </p>
            <div className="flex items-center gap-4">
              {FOOTER.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(250,250,248,0.35)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}