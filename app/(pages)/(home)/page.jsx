import Link from "next/link";

import styles from "./page.module.css";
import { homeContent } from "./content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description: homeContent.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{homeContent.eyebrow}</p>
          <h1 id="home-title">{homeContent.title}</h1>
          <p className={styles.description}>{homeContent.description}</p>
          <nav className={styles.actions} aria-label="Primary navigation">
            <Link className={styles.currentAction} href="/" aria-current="page">
              {homeContent.tertiaryCta}
            </Link>
            <Link className={styles.primaryAction} href="/about">
              {homeContent.primaryCta}
            </Link>
            <Link className={styles.secondaryAction} href="/health">
              {homeContent.secondaryCta}
            </Link>
          </nav>
        </div>
        <aside className={styles.panel} aria-labelledby="home-panel-title">
          <p className={styles.panelLabel}>Live test scope</p>
          <h2 id="home-panel-title">{homeContent.panelTitle}</h2>
          <ul>
            {homeContent.checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
