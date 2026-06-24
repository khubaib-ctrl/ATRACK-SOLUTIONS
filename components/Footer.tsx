"use client";

const footerLinks = {
  Services: [
    "Website Development",
    "Store Setup",
    "Payment Integration",
    "Product Management",
    "SEO & Marketing",
    "Inventory Management",
    "Automation",
    "Maintenance",
  ],
  Company: ["About Us", "Our Process", "Case Studies", "Blog", "Careers"],
  Support: ["Contact Us", "FAQ", "Documentation", "Status", "Privacy Policy", "Terms of Service"],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="1.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 8v5M5.5 5.5v.5M8.5 13V9.5A2 2 0 0112.5 9.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13.5L7.5 8l-5.5-6h4l3.5 4L13.5 2H16l-5.5 6.5 6 7h-4L9 11l-4 2.5H2z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-dark)",
        color: "rgba(247,243,238,0.7)",
        padding: "5rem 0 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.4,
        }}
      />

      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                textDecoration: "none",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "var(--accent)",
                  borderRadius: "10px",
                  color: "#fff",
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                }}
              >
                A
              </span>
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#F7F3EE",
                  letterSpacing: "-0.02em",
                }}
              >
                Atrack Solutions
              </span>
            </a>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(247,243,238,0.5)",
                marginBottom: "2rem",
                maxWidth: "280px",
              }}
            >
              Your dedicated e-commerce partner. We build, optimize, and scale
              online stores — from day one to your next milestone.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(247,243,238,0.5)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "rgba(224,122,63,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-dark)";
                    e.currentTarget.style.color = "rgba(247,243,238,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(247,243,238,0.9)",
                  marginBottom: "1.25rem",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(247,243,238,0.45)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "rgba(247,243,238,0.85)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "rgba(247,243,238,0.45)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          style={{
            background: "rgba(247,243,238,0.04)",
            border: "1px solid var(--border-dark)",
            borderRadius: "16px",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: "#F7F3EE", fontSize: "1rem", marginBottom: "0.25rem" }}>
              E-commerce tips, straight to your inbox
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(247,243,238,0.45)", margin: 0 }}>
              Monthly insights on growing your online store.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                padding: "0.75rem 1.125rem",
                borderRadius: "10px",
                border: "1px solid var(--border-dark)",
                background: "rgba(247,243,238,0.06)",
                color: "#F7F3EE",
                fontSize: "0.9rem",
                outline: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                minWidth: "220px",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans), sans-serif",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-dark)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(247,243,238,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} Atrack Solutions LLC. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(247,243,238,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(247,243,238,0.6)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(247,243,238,0.3)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
