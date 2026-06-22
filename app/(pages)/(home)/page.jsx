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
        <p className={styles.eyebrow}>{homeContent.eyebrow}</p>
        <h1 id="home-title">{homeContent.title}</h1>
        <p className={styles.description}>{homeContent.description}</p>
        <div className={styles.actions} aria-label="Primary links">
          <a className={styles.primaryAction} href="/about">
            {homeContent.primaryCta}
          </a>
          <a className={styles.secondaryAction} href="/health">
            {homeContent.secondaryCta}
          </a>
        </div>
      </section>
    </main>
  );
}
