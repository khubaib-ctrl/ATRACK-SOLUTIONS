"use client";

const stats = [
  {
    value: "95%+",
    label: "On-time Delivery Rate",
    description: "Projects and updates delivered on schedule, every time",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M9 4v4M19 4v4M4 13h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M9 18l3 3 7-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: "90%+",
    label: "Customer Satisfaction (CSAT)",
    description: "Average CSAT score across all client support interactions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.9 5.9L23 9.9l-4.5 4.4 1.1 6.3L14 17.6l-5.6 3 1.1-6.3L5 10l6.1-.9L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: "< 24h",
    label: "Resolution Time",
    description: "Average time to fully resolve a client support request",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--bg-dark)",
        padding: "5.5rem 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(224,122,63,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "2.5rem 2rem",
                borderRight: i < stats.length - 1 ? "1px solid var(--border-dark)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "rgba(224,122,63,0.12)",
                  border: "1px solid rgba(224,122,63,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: "0.25rem",
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#F7F3EE",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "rgba(247,243,238,0.8)",
                  letterSpacing: "0.01em",
                }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(247,243,238,0.45)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-dark);
          }
        }
      `}</style>
    </section>
  );
}
