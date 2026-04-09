const LOGOS = [
  { name: "Houzz", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/4c7e32d68_1762082707-Houzz1.png" },
  { name: "SafeContractor", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/4bbfdb9fe_1762082331-safe-11.png" },
  { name: "Exclusive Builders", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/9441e4171_1762082313-Exclusive-Builders1.png" },
  { name: "DPA", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/c65e6f13c_1762082291-1749231101-DPA1.png" },
  { name: "Google", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/669ac05c1_1762082275-1749231126-Google-Merchant1.png" },
  { name: "BBA", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/b5197fb75_1753095368-1749230819-BBA1.png" },
  { name: "CITB", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/97ab7508a_1753879842-citb1.png" },
  { name: "SSIP", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/a4995fe75_1762082252-1760447880-ssip-logo1.png" },
  { name: "COVEA", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/7574fd74a_1749230872-COVEA1.png" },
  { name: "NABC", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/af9ff8cd6_1762082413-NABC1.png" },
  { name: "TrustATrader", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/2d9515c2b_1762082348-Trust-a-Trader1.png" },
  { name: "Trusted Builders", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/7eed83b94_1762082369-Trusted-Builders1.png" },
  { name: "Constructionline", url: "https://media.base44.com/images/public/69d735e6d501ebc3b47eb64a/708d3dded_1768477663-approved-con-line1.png" },
];

export default function AccreditationBar({ label, dark = false }) {
  // Duplicate for seamless loop
  const items = [...LOGOS, ...LOGOS];

  return (
    <div
      style={{
        backgroundColor: dark ? "rgba(255,255,255,0.05)" : "var(--color-bg-secondary)",
        borderTop: dark ? "0.5px solid rgba(250,250,248,0.1)" : "0.5px solid var(--color-border-subtle)",
        borderBottom: dark ? "0.5px solid rgba(250,250,248,0.1)" : "0.5px solid var(--color-border-subtle)",
        paddingTop: 20,
        paddingBottom: 20,
        overflow: "hidden",
      }}
    >
      {label && (
        <p
          className="eyebrow text-center mb-4"
          style={{ color: dark ? "rgba(250,250,248,0.45)" : "var(--color-text-muted)" }}
        >
          {label}
        </p>
      )}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: dark
            ? "linear-gradient(to right, rgba(42,42,38,1), transparent)"
            : `linear-gradient(to right, var(--color-bg-secondary), transparent)`,
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: dark
            ? "linear-gradient(to left, rgba(42,42,38,1), transparent)"
            : `linear-gradient(to left, var(--color-bg-secondary), transparent)`,
        }} />

        <div className="marquee-track">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 shrink-0"
              style={{ height: 44 }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                style={{
                  height: 36,
                  width: "auto",
                  maxWidth: 100,
                  objectFit: "contain",
                  filter: dark ? "brightness(0) invert(1)" : "grayscale(0.2)",
                  opacity: dark ? 0.7 : 0.85,
                  transition: "opacity 200ms, filter 200ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "none"; }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = dark ? "0.7" : "0.85";
                  e.currentTarget.style.filter = dark ? "brightness(0) invert(1)" : "grayscale(0.2)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}