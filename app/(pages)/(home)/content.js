export const homeContent = {
  eyebrow: "Homepage verification dashboard",
  title: "Voos Live Test readiness console",
  description:
    "A focused first screen for reviewing installability, route coverage, live health, and Trial quality before a release moves forward.",
  primaryCta: "View about page",
  secondaryCta: "Check health status",
  dashboardLabel: "Verification capability views",
  capabilities: [
    {
      id: "installability",
      label: "Installability",
      status: "Ready",
      statusTone: "ready",
      headline: "App metadata is surfaced for install checks.",
      description:
        "Manifest, icons, theme color, and web app settings are visible in the launch surface so install behavior is easy to confirm.",
      details: ["Manifest linked", "PWA icons present", "Theme color declared"],
      metric: "7 install signals",
    },
    {
      id: "routing",
      label: "Routing",
      status: "Mapped",
      statusTone: "mapped",
      headline: "Public routes stay easy to verify.",
      description:
        "Homepage, about, contact, health, robots, sitemap, and manifest endpoints remain available without leaving this page.",
      details: ["Internal CTAs use Next links", "Health endpoint retained", "SEO routes preserved"],
      metric: "7 route checks",
    },
    {
      id: "health",
      label: "Health checks",
      status: "Online",
      statusTone: "online",
      headline: "Runtime status stays one click away.",
      description:
        "The lightweight dashboard highlights live readiness while the existing fixed health footer remains unchanged.",
      details: ["Footer status unchanged", "Dedicated health CTA", "Production route intact"],
      metric: "1 live endpoint",
    },
    {
      id: "quality",
      label: "Trial quality",
      status: "In review",
      statusTone: "review",
      headline: "Trial acceptance criteria are visible up front.",
      description:
        "The first screen now reflects the current Trial focus with responsive interactions and scoped homepage-only implementation.",
      details: ["Responsive layout", "Scoped route files", "No new dependencies"],
      metric: "4 quality gates",
    },
  ],
};
