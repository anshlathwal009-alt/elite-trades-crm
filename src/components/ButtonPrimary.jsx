import { Link } from "react-router-dom";

export default function ButtonPrimary({ children, href, onClick, variant = "primary", className = "", fullWidth = false, type = "button" }) {
  const base = `inline-flex items-center justify-center gap-2 font-body text-sm font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-[3px] disabled:opacity-40 disabled:cursor-not-allowed ${fullWidth ? "w-full" : ""}`;

  const variants = {
    primary: `px-6 py-[10px] ${className}`,
    outline: `px-6 py-[10px] border-[1.5px] ${className}`,
    glass: `px-6 py-[10px] backdrop-blur-[8px] border-[1.5px] ${className}`,
  };

  const style = {
    primary: {
      backgroundColor: "var(--color-accent)",
      color: "var(--color-text-on-accent)",
      borderRadius: "var(--radius-full)",
      focusRingColor: "var(--color-focus-ring)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--color-text-primary)",
      borderColor: "var(--color-accent)",
      borderRadius: "var(--radius-full)",
    },
    glass: {
      backgroundColor: "rgba(250,250,248,0.15)",
      color: "#FAFAF8",
      borderColor: "rgba(250,250,248,0.6)",
      borderRadius: "var(--radius-full)",
      backdropFilter: "blur(8px)",
    },
  };

  const hoverClass = "hover:scale-[1.02] active:scale-[0.98]";

  if (href) {
    return (
      <Link
        to={href}
        className={`${base} ${variants[variant]} ${hoverClass}`}
        style={style[variant]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${hoverClass}`}
      style={style[variant]}
    >
      {children}
    </button>
  );
}