import { Link } from "react-router-dom";
import { COMPANY, FOOTER, NAV } from "../config/content.en";
import ButtonPrimary from "./ButtonPrimary";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-accent)" }}>
      {/* Top row */}
      <div className="section-padding" style={{ paddingTop: 60, paddingBottom: 0 }}>
        <div className="content-max flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10" style={{ borderBottom: "0.5px solid rgba(250,250,248,0.12)" }}>
          <Link
            to="/"
            className="font-display text-xl font-medium"
            style={{ color: "#FAFAF8" }}
          >
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
            <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(250,250,248,0.65)" }}>
              <p>{COMPANY.legalName}</p>
              <p>{COMPANY.address.line1}</p>
              <p>{COMPANY.address.line2}</p>
              <p>{COMPANY.address.area}, {COMPANY.address.city}</p>
              <p>{COMPANY.address.postcode}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
              {FOOTER.columns.contact.label}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={COMPANY.phoneTel}
                className="font-body text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(250,250,248,0.65)" }}
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-body text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(250,250,248,0.65)" }}
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "#FAFAF8" }}>
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
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="font-body text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(250,250,248,0.65)" }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="section-padding" style={{ paddingTop: 0, paddingBottom: 32 }}>
        <div className="content-max pt-6" style={{ borderTop: "0.5px solid rgba(250,250,248,0.12)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs" style={{ color: "rgba(250,250,248,0.45)" }}>
              {FOOTER.legal}
            </p>
            <div className="flex items-center gap-4">
              {FOOTER.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(250,250,248,0.45)" }}
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