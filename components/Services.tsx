"use client";

import { useState } from "react";

const services = [
  {
    id: "01",
    title: "E-commerce Website Development",
    description:
      "Custom-built online stores engineered for performance, conversions, and scalability. Shopify, WooCommerce, or fully bespoke.",
    color: "var(--accent)",
    features: ["Custom design & development", "Mobile-first responsive", "Speed-optimized build"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="5" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M10 27h12M16 23v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M7 9h18M7 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Online Store Setup & Customization",
    description:
      "From domain to launch — we configure, theme, and tailor your store to perfectly reflect your brand identity.",
    color: "var(--teal)",
    features: ["Theme installation & customization", "Domain & hosting setup", "Brand alignment"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M16 9v7l4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.5 6.5l2 2-8 8-2-2 8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Payment Gateway Integration",
    description:
      "Seamless checkout experiences with Stripe, PayPal, Square, and more — secure, fast, and friction-free.",
    color: "#7C5CBF",
    features: ["Stripe & PayPal integration", "Multi-currency support", "Fraud protection"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="9" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M3 14h26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M7 19h4M7 22h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <circle cx="24" cy="20.5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Product Listing & Management",
    description:
      "Expertly structured catalogs with compelling copy, optimized images, and smart categorization that drives discovery.",
    color: "#2D9CDB",
    features: ["Bulk product uploads", "SEO-optimized listings", "Variant & bundle setup"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "SEO & Digital Marketing",
    description:
      "Rank higher, reach further. Technical SEO, Google Shopping, Meta Ads, and content strategies that compound.",
    color: "var(--accent)",
    features: ["Technical SEO audits", "Google & Meta Ads", "Content strategy"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M21 21l6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Inventory & Order Management",
    description:
      "Real-time stock tracking, automated reorder triggers, and unified order dashboards across all your sales channels.",
    color: "var(--teal)",
    features: ["Multi-channel sync", "Low-stock alerts", "Fulfillment workflows"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8l12-4 12 4v14l-12 6-12-6V8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M16 4v18M4 8l12 4 12-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "07",
    title: "E-commerce Automation",
    description:
      "Reclaim your time with smart workflows: abandoned cart recovery, email sequences, pricing rules, and reporting.",
    color: "#7C5CBF",
    features: ["Abandoned cart flows", "Automated email sequences", "Dynamic pricing"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 16a10 10 0 1020 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M6 16V9l4 4M26 16v-7l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: "08",
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, security updates, performance tuning, and a dedicated team ready when you need help most.",
    color: "#2D9CDB",
    features: ["24/7 uptime monitoring", "Security patches", "Dedicated support team"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4a7 7 0 017 7c0 2-1 4-2.5 5.3L26 28l-4-1-1-4-4 1-1-4-4 1.5C9 20 7 18 7 16V11a7 7 0 019-7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{ background: "var(--bg-primary)", padding: "7rem 0" }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ maxWidth: "640px", marginBottom: "4rem" }}>
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
            Our Services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Everything your store needs to thrive
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            From first pixel to final sale — we handle the full spectrum of
            e-commerce, so you can focus on your products and customers.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "var(--border)",
            border: "1.5px solid var(--border)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "var(--bg-dark)" : "var(--bg-surface)",
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
                cursor: "default",
                transition: "background 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: hovered === i ? "rgba(247,243,238,0.3)" : "var(--border)",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                }}
              >
                {service.id}
              </span>

              {/* Icon */}
              <div
                style={{
                  color: hovered === i ? service.color : "var(--text-muted)",
                  transition: "color 0.3s",
                  lineHeight: 0,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  color: hovered === i ? "#F7F3EE" : "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  transition: "color 0.3s",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: hovered === i ? "rgba(247,243,238,0.6)" : "var(--text-secondary)",
                  lineHeight: 1.65,
                  transition: "color 0.3s",
                  margin: 0,
                }}
              >
                {service.description}
              </p>

              {/* Features list - visible on hover */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  marginTop: "0.5rem",
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.3s, transform 0.3s",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {service.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8125rem",
                      color: "rgba(247,243,238,0.65)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: service.color,
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Accent corner decoration on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  borderRadius: "80px 0 0 0",
                  background: service.color,
                  opacity: hovered === i ? 0.08 : 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
