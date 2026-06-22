import Link from "next/link";

import { createPageMetadata } from "@/lib/seo/metadata";
import { CapabilityDashboard } from "./CapabilityDashboard";
import styles from "./page.module.css";
import { homeContent } from "./content";

export const metadata = createPageMetadata({
  title: "Home",
  description: homeContent.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{homeContent.eyebrow}</p>
          <h1 id="home-title">{homeContent.title}</h1>
          <p className={styles.description}>{homeContent.description}</p>
          <div className={styles.actions} aria-label="Primary links">
            <Link className={styles.primaryAction} href="/about">
              {homeContent.primaryCta}
            </Link>
            <Link className={styles.secondaryAction} href="/health">
              {homeContent.secondaryCta}
            </Link>
          </div>
        </div>
        <CapabilityDashboard label={homeContent.dashboardLabel} capabilities={homeContent.capabilities} />
      </section>
    </main>
  );
}
