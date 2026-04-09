import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, COMPANY } from "../config/content.en";
import ButtonPrimary from "./ButtonPrimary";

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showLight = isHeroPage && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "0.5px solid var(--color-border-subtle)" : "0.5px solid transparent",
        }}
      >
        <div className="content-max flex items-center justify-between h-16 md:h-20 px-5 md:px-10 lg:px-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-lg md:text-xl font-medium tracking-tight transition-colors duration-300"
            style={{ color: showLight ? "#FAFAF8" : "var(--color-text-primary)", fontWeight: 500 }}
          >
            London Elite Trades
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body transition-colors duration-200"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
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
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 font-body transition-colors duration-200"
              style={{
                fontSize: 14,
                color: showLight ? "rgba(250,250,248,0.8)" : "var(--color-text-secondary)",
              }}
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="font-body text-[13px] font-medium px-[18px] py-2 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: showLight ? "rgba(250,250,248,0.15)" : "var(--color-accent)",
                color: showLight ? "#FAFAF8" : "var(--color-text-on-accent)",
                border: showLight ? "1.5px solid rgba(250,250,248,0.4)" : "1.5px solid var(--color-accent)",
                backdropFilter: showLight ? "blur(8px)" : "none",
              }}
            >
              {NAV.cta}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu size={24} style={{ color: showLight ? "#FAFAF8" : "var(--color-text-primary)" }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#1A1A18" }}
          >
            <div className="flex items-center justify-between px-5 h-16">
              <Link
                to="/"
                className="font-display text-lg font-medium"
                style={{ color: "#FAFAF8" }}
                onClick={() => setMobileOpen(false)}
              >
                London Elite Trades
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
                <X size={24} style={{ color: "#FAFAF8" }} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-12 gap-6">
              {NAV.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    className="font-display block transition-colors duration-200"
                    style={{
                      fontSize: 32,
                      fontWeight: 400,
                      color: location.pathname === link.href ? "#FAFAF8" : "rgba(250,250,248,0.6)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="px-12 pb-12 flex flex-col gap-4">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-medium text-center py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#FAFAF8", color: "#1A1A18" }}
              >
                {NAV.mobileCta}
              </Link>
              <a
                href={COMPANY.phoneTel}
                className="font-body text-center"
                style={{ fontSize: 16, color: "rgba(250,250,248,0.7)" }}
              >
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}