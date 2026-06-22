export const homeContent = {
  eyebrow: "Voos release console",
  title: "Voos Live Test readiness console",
  description:
    "A compact Next.js surface for validating installability, route coverage, live health, and Trial quality before a release moves forward.",
  primaryCta: "About",
  secondaryCta: "Health",
  tertiaryCta: "Home",
  dashboardLabel: "Verification capability views",
  capabilities: [
    {
      id: "installability",
      label: "Installability",
      status: "Ready",
      statusTone: "ready",
      headline: "App metadata is surfaced for install checks.",
      description:
        "Manifest, icons, theme color, and web app settings stay visible in the launch surface so install behavior is easy to confirm.",
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
        "Homepage, about, contact, health, robots, sitemap, and manifest endpoints remain available without leaving the readiness console.",
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
        "The interactive dashboard highlights live readiness while the existing fixed health footer remains unchanged.",
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
