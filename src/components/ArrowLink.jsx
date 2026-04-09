import { Link } from "react-router-dom";

export default function ArrowLink({ children, href, light = false, className = "" }) {
  return (
    <Link
      to={href}
      className={`group inline-flex items-center gap-1 font-body text-sm font-normal transition-colors duration-200 ${className}`}
      style={{ color: light ? "#FAFAF8" : "var(--color-text-primary)" }}
    >
      <span className="group-hover:text-[var(--color-accent-warm)] transition-colors duration-200">
        {children}
      </span>
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-accent-warm)]">
        →
      </span>
    </Link>
  );
}