"use client";

const platforms = [
  "Shopify", "WooCommerce", "BigCommerce", "Magento",
  "Wix", "Squarespace", "Stripe", "PayPal",
  "Klaviyo", "Mailchimp", "Google Analytics", "Meta Ads",
];

export default function CtaBanner() {
  return (
    <section
      style={{
        background: "var(--bg-dark)",
        padding: "7rem 0 5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(247,243,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247,243,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(224,122,63,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Label */}
        <span
          style={{
            display: "inline-block",
            background: "rgba(224,122,63,0.15)",
            border: "1px solid rgba(224,122,63,0.25)",
            borderRadius: "100px",
            padding: "0.375rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Ready to start?
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#F7F3EE",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto 1.5rem",
          }}
        >
          Launch your store.
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Grow your revenue.</em>
        </h2>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "rgba(247,243,238,0.6)",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Get a free strategy call and custom proposal. No commitment, no
          generic templates — just a real plan for your business.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "5rem" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent)",
              color: "#fff",
              padding: "1rem 2.25rem",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "1.0625rem",
              textDecoration: "none",
              transition: "all 0.25s ease",
              boxShadow: "0 4px 24px rgba(224,122,63,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(224,122,63,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(224,122,63,0.35)";
            }}
          >
            Book Free Strategy Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 9h11M9 3.5l5.5 5.5L9 14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "1rem 2rem",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              border: "1.5px solid rgba(247,243,238,0.2)",
              color: "rgba(247,243,238,0.8)",
              transition: "all 0.25s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,243,238,0.5)";
              e.currentTarget.style.color = "#F7F3EE";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,243,238,0.2)";
              e.currentTarget.style.color = "rgba(247,243,238,0.8)";
            }}
          >
            View All Services
          </a>
        </div>

        {/* Platform logos strip */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(247,243,238,0.3)",
              marginBottom: "1.5rem",
            }}
          >
            We work with leading platforms
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            {platforms.map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-block",
                  background: "rgba(247,243,238,0.05)",
                  border: "1px solid rgba(247,243,238,0.1)",
                  borderRadius: "8px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "rgba(247,243,238,0.5)",
                  letterSpacing: "0.01em",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
