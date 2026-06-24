"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "Week 1",
    description:
      "We start by deeply understanding your business — your products, audience, competitors, and goals. From here we map out a tailored project blueprint.",
    deliverables: ["Business & competitor analysis", "Technical requirements doc", "Project roadmap & timeline"],
  },
  {
    number: "02",
    title: "Design & Architecture",
    duration: "Weeks 2–3",
    description:
      "Our designers craft wireframes and high-fidelity mockups while engineers architect the technical foundation — performance, security, and scalability baked in from day one.",
    deliverables: ["UX wireframes & design mockups", "Tech stack & architecture plan", "Design system & brand guide"],
  },
  {
    number: "03",
    title: "Development & Integration",
    duration: "Weeks 4–8",
    description:
      "We build your store with precision — custom features, payment gateways, integrations, and all the backend plumbing needed to run a world-class operation.",
    deliverables: ["Full store development", "Payment & API integrations", "Inventory & order system setup"],
  },
  {
    number: "04",
    title: "Testing & QA",
    duration: "Week 9",
    description:
      "Rigorous testing across devices, browsers, and real-world scenarios. We chase edge cases so your customers never have to encounter them.",
    deliverables: ["Cross-browser & device testing", "Performance & load testing", "Security & checkout audits"],
  },
  {
    number: "05",
    title: "Launch & Optimize",
    duration: "Week 10+",
    description:
      "Go-live with confidence. Post-launch we monitor performance, run SEO audits, fine-tune campaigns, and iterate based on real customer data.",
    deliverables: ["Production deployment", "SEO & analytics setup", "Post-launch monitoring & support"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      style={{
        background: "var(--bg-primary)",
        padding: "7rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ maxWidth: "580px", marginBottom: "4.5rem" }}>
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
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            How we take you from idea to income
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            A proven 5-step framework refined across 150+ store launches. Clear
            milestones, transparent communication at every phase.
          </p>
        </div>

        {/* Process tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="process-grid"
        >
          {/* Step list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.125rem 1.25rem",
                  borderRadius: "14px",
                  border: "1.5px solid",
                  borderColor: activeStep === i ? "var(--accent)" : "transparent",
                  background: activeStep === i ? "var(--accent-light)" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: activeStep === i ? "var(--accent)" : "var(--text-muted)",
                    letterSpacing: "0.05em",
                    minWidth: "22px",
                    transition: "color 0.2s",
                  }}
                >
                  {step.number}
                </span>
                <span
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: activeStep === i ? "var(--text-primary)" : "var(--text-secondary)",
                    transition: "color 0.2s",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </span>
                {activeStep === i && (
                  <span style={{ marginLeft: "auto", color: "var(--accent)", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            style={{
              background: "var(--bg-dark)",
              borderRadius: "24px",
              padding: "3rem",
              overflow: "hidden",
              position: "relative",
              minHeight: "340px",
            }}
          >
            {/* Decorative */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "32px solid rgba(224,122,63,0.08)",
                pointerEvents: "none",
              }}
            />

            {/* Step number large */}
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "6rem",
                fontWeight: 800,
                color: "rgba(247,243,238,0.05)",
                position: "absolute",
                top: "1rem",
                right: "2rem",
                lineHeight: 1,
                pointerEvents: "none",
                letterSpacing: "-0.04em",
              }}
            >
              {steps[activeStep].number}
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Duration badge */}
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(224,122,63,0.15)",
                  border: "1px solid rgba(224,122,63,0.25)",
                  borderRadius: "100px",
                  padding: "0.3rem 0.875rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                {steps[activeStep].duration}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#F7F3EE",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {steps[activeStep].title}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(247,243,238,0.65)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                {steps[activeStep].description}
              </p>

              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.875rem",
                  }}
                >
                  Deliverables
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {steps[activeStep].deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        fontSize: "0.9rem",
                        color: "rgba(247,243,238,0.75)",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "rgba(212,154,58,0.2)",
                          border: "1px solid rgba(212,154,58,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "var(--teal)",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
