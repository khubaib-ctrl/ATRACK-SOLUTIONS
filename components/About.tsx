"use client";

const pillars = [
  {
    title: "Results-driven",
    description:
      "Every decision we make is tied to one goal: growing your revenue. We measure success by your sales, not vanity metrics.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l5-5 4 4 7-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full-stack expertise",
    description:
      "Our team spans frontend, backend, design, SEO, and paid media — a complete e-commerce unit, not a fragmented agency.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    title: "Partnership mindset",
    description:
      "We act as an extension of your team — transparent communication, honest reporting, and always in your corner.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M14 8.5A3 3 0 1111 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M8 8.5A3 3 0 1011 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M5 18a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-surface)",
        padding: "7rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left column */}
          <div>
            <div className="accent-line" />
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              Who We Are
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Built to power your online business
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Atrack Solutions LLC is a dedicated e-commerce agency headquartered in the
              United States. We specialize exclusively in building and growing online stores —
              it&rsquo;s all we do, and we do it exceptionally well.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              From ambitious startups launching their first product to established brands
              seeking their next growth chapter, we bring the technical depth and strategic
              clarity to make e-commerce work for you.
            </p>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {pillars.map((p) => (
                <div
                  key={p.title}
                  style={{ display: "flex", gap: "1.125rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "var(--accent-light)",
                      border: "1px solid rgba(224,122,63,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — visual card */}
          <div style={{ position: "relative" }}>
            {/* Main card */}
            <div
              style={{
                background: "var(--bg-dark)",
                borderRadius: "24px",
                padding: "3rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circle */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  border: "40px solid rgba(224,122,63,0.1)",
                  pointerEvents: "none",
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  color: "rgba(247,243,238,0.9)",
                  lineHeight: 1.55,
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;We don&rsquo;t just build stores — we build businesses. Every line of
                code, every campaign, every support ticket is aimed at one thing:
                your success.&rdquo;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1.2rem",
                  }}
                >
                  A
                </div>
                <div>
                  <div style={{ color: "#F7F3EE", fontWeight: 600, fontSize: "0.9375rem" }}>
                    Atrack Solutions LLC
                  </div>
                  <div style={{ color: "rgba(247,243,238,0.5)", fontSize: "0.8125rem" }}>
                    Founded in the United States
                  </div>
                </div>
              </div>

              {/* Bottom stats strip */}
              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--border-dark)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[
                  { value: "7+", label: "Years" },
                  { value: "50+", label: "Clients" },
                  { value: "8", label: "Services" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(247,243,238,0.45)",
                        marginTop: "0.25rem",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                background: "var(--bg-surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "16px",
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 8px 32px rgba(42,27,61,0.12)",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--teal-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--teal)",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  Trusted by 50+ brands
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Across 12 countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
