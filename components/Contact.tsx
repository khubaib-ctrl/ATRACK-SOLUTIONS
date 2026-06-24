"use client";

import { useState, FormEvent } from "react";

const services = [
  "E-commerce Website Development",
  "Online Store Setup & Customization",
  "Payment Gateway Integration",
  "Product Listing & Management",
  "SEO & Digital Marketing",
  "Inventory & Order Management",
  "E-commerce Automation",
  "Maintenance & Support",
];

const contactInfo = [
  {
    label: "Email",
    value: "info@atracksol.com",
    href: "mailto:info@atracksol.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1.125rem",
    borderRadius: "12px",
    border: "1.5px solid var(--border)",
    background: "var(--bg-surface)",
    color: "var(--text-primary)",
    fontSize: "0.9375rem",
    fontFamily: "var(--font-dm-sans), sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-primary)",
        padding: "7rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
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
              Get In Touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s build something great
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "3rem",
              }}
            >
              Ready to launch or level up your online store? Tell us about your project and we&apos;ll
              get back to you with a personalized strategy.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {contactInfo.map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "var(--bg-surface)",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "var(--text-primary)")
                        }
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee chip */}
            <div
              style={{
                marginTop: "3rem",
                background: "var(--teal-light)",
                border: "1px solid rgba(212,154,58,0.2)",
                borderRadius: "16px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ color: "var(--teal)", flexShrink: 0, marginTop: "2px" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.5 4.5L18 7.5l-4 3.9 1 5.1L10 14l-5 2.5 1-5.1L2 7.5l5.5-1L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--teal)", marginBottom: "0.25rem" }}>
                  Free consultation included
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>
                  Every inquiry gets a thoughtful, tailored response — no automated
                  replies, no pushy sales tactics.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "24px",
              padding: "2.75rem",
              border: "1.5px solid var(--border)",
              boxShadow: "0 4px 40px rgba(42,27,61,0.07)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  minHeight: "360px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "var(--teal-light)",
                    border: "2px solid var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--teal)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 16l7 7 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.625rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message received!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "360px" }}>
                    Thank you, {formState.name.split(" ")[0] || "there"}! We&apos;ll review your request and
                    be in touch within 24 hours with a personalized strategy.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.375rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tell us about your project
                </h3>

                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Company / Brand name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company LLC"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Service select */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Service you need *
                  </label>
                  <select
                    required
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "var(--accent)";
                      (e.target as HTMLSelectElement).style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "var(--border)";
                      (e.target as HTMLSelectElement).style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    <option value="Full Package">Full Package (All Services)</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Estimated budget
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "var(--accent)";
                      (e.target as HTMLSelectElement).style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLSelectElement).style.borderColor = "var(--border)";
                      (e.target as HTMLSelectElement).style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select a range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your store, your goals, and any specific requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "110px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(224,122,63,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: loading ? "var(--text-muted)" : "var(--accent)",
                    color: "#fff",
                    padding: "1rem 2rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.25s ease",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    boxShadow: loading ? "none" : "0 4px 20px rgba(224,122,63,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = "var(--accent-hover)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTop: "2px solid #fff",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                          display: "inline-block",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8h12M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
