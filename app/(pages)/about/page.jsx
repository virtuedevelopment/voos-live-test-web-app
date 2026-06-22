import Link from "next/link";

import { createPageMetadata } from "@/lib/seo/metadata";
import { aboutContent } from "./content";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "About",
  description: aboutContent.description,
  path: "/about",
});

function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{aboutContent.eyebrow}</p>
        <h1 id="about-title">{aboutContent.title}</h1>
        <p className={styles.description}>{aboutContent.description}</p>
        <nav className={styles.actions} aria-label="Primary navigation">
          <Link className={styles.primaryAction} href="/">
            {aboutContent.primaryCta}
          </Link>
          <Link className={styles.currentAction} href="/about" aria-current="page">
            {aboutContent.currentCta}
          </Link>
          <Link className={styles.secondaryAction} href="/health">
            {aboutContent.secondaryCta}
          </Link>
        </nav>
      </div>
      <aside className={styles.panel} aria-labelledby="about-panel-title">
        <p className={styles.panelLabel}>Release context</p>
        <h2 id="about-panel-title">{aboutContent.panelTitle}</h2>
        <ul>
          {aboutContent.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <AboutHero />
    </main>
  );
}
