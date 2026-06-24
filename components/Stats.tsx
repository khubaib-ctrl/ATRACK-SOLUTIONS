"use client";

const stats = [
  {
    value: "150+",
    label: "Stores Built",
    description: "Online stores launched across diverse industries worldwide",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20l-2 12H6L4 8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M9 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <circle cx="11" cy="17" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Average satisfaction rating from our client base",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.9 5.9L23 9.9l-4.5 4.4 1.1 6.3L14 17.6l-5.6 3 1.1-6.3L5 10l6.1-.9L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: "$12M+",
    label: "Revenue Generated",
    description: "Total revenue driven for our e-commerce clients",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v2M14 22v2M7.5 7.5l1.5 1.5M19 19l1.5 1.5M4 14h2M22 14h2M7.5 20.5l1.5-1.5M19 9l1.5-1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    value: "99.9%",
    label: "Uptime Delivered",
    description: "Reliable hosting and store performance, always on",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6C9.6 6 6 9.6 6 14s3.6 8 8 8 8-3.6 8-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M19 6l3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 14l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
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
