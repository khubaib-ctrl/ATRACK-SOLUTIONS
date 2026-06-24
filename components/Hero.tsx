"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "5rem",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-8%",
          width: "540px",
          height: "540px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,122,63,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-6%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,154,58,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(var(--border) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          ref={heroRef}
          style={{
            maxWidth: "900px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent-light)",
              border: "1px solid rgba(224,122,63,0.2)",
              borderRadius: "100px",
              padding: "0.375rem 1rem 0.375rem 0.5rem",
              marginBottom: "2rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                background: "var(--accent)",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            E-commerce Agency
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.75rem",
            }}
          >
            Your E-commerce
            <br />
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                Growth Partner
              </em>
              <span
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "var(--accent)",
                  borderRadius: "2px",
                  opacity: 0.35,
                }}
              />
            </span>
            <br />
            from Day One
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "2.75rem",
              fontWeight: 400,
            }}
          >
            Atrack Solutions LLC builds and scales online stores — from initial
            setup and payment integration to SEO, automation, and 24/7 support.
            Everything you need to sell more.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "0.875rem 2rem",
                borderRadius: "100px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 20px rgba(224,122,63,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(224,122,63,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(224,122,63,0.3)";
              }}
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-primary)",
                padding: "0.875rem 1.75rem",
                borderRadius: "100px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                border: "1.5px solid var(--border)",
                background: "transparent",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-primary)";
                e.currentTarget.style.background = "var(--text-primary)";
                e.currentTarget.style.color = "var(--text-inverse)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Our Services
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
