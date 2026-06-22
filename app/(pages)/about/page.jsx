import Link from "next/link";

import { createPageMetadata } from "@/lib/seo/metadata";
import styles from "./page.module.css";

const aboutContent = {
  title: "About Voos Live Test",
  description:
    "Voos Live Test is a focused Next.js app for checking the live experience, confirming deployment health, and keeping release validation easy to review.",
  primaryCta: "Back to home",
  secondaryCta: "Check health",
};

export const metadata = createPageMetadata({
  title: "About",
  description: aboutContent.description,
  path: "/about",
});

function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <h1 id="about-title">{aboutContent.title}</h1>
      <p className={styles.description}>{aboutContent.description}</p>
      <div className={styles.actions} aria-label="About page links">
        <Link className={styles.primaryAction} href="/">
          {aboutContent.primaryCta}
        </Link>
        <Link className={styles.secondaryAction} href="/health">
          {aboutContent.secondaryCta}
        </Link>
      </div>
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
