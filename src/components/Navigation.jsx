import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, COMPANY } from "../config/content.en";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const showLight = isHeroPage && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "0.5px solid var(--color-border-subtle)" : "0.5px solid transparent",
        }}
      >
        <div className="content-max flex items-center justify-between h-16 md:h-20 px-5 md:px-10 lg:px-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 shrink-0"
            style={{ color: showLight ? "#FAFAF8" : "var(--color-text-primary)", fontWeight: 500 }}
          >
            London Elite Trades
          </Link>

          {/* Desktop nav links — shown md+ */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: 13,
                  fontWeight: location.pathname === link.href ? 500 : 400,
                  letterSpacing: "0.01em",
                  color: showLight
                    ? location.pathname === link.href ? "#FAFAF8" : "rgba(250,250,248,0.75)"
                    : location.pathname === link.href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={COMPANY.phoneTel}
              className="hidden lg:flex items-center gap-2 font-body transition-colors duration-200"
              style={{ fontSize: 13, color: showLight ? "rgba(250,250,248,0.8)" : "var(--color-text-secondary)" }}
            >
              <Phone size={13} />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="font-body text-[12px] font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              style={{
                backgroundColor: showLight ? "rgba(250,250,248,0.15)" : "var(--color-accent)",
                color: showLight ? "#FAFAF8" : "var(--color-text-on-accent)",
                border: showLight ? "1.5px solid rgba(250,250,248,0.4)" : "1.5px solid var(--color-accent)",
                backdropFilter: showLight ? "blur(8px)" : "none",
              }}
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger — only on small screens */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X size={22} style={{ color: showLight ? "#FAFAF8" : "var(--color-text-primary)" }} />
              : <Menu size={22} style={{ color: showLight ? "#FAFAF8" : "var(--color-text-primary)" }} />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown — small screens only */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: "rgba(250,250,248,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "0.5px solid var(--color-border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body py-3 px-2 rounded-lg transition-colors duration-150"
                  style={{
                    fontSize: 15,
                    fontWeight: location.pathname === link.href ? 500 : 400,
                    color: location.pathname === link.href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                    borderBottom: "0.5px solid var(--color-border-subtle)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="font-body text-sm font-medium text-center py-3 rounded-full transition-all"
                  style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-on-accent)" }}
                >
                  {NAV.mobileCta}
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="font-body text-sm text-center py-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}