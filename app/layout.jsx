import "../styles/globals.css";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="app-status" aria-label="Application status">
          <a className="app-status__link" href="/health">
            <span className="app-status__dot" aria-hidden="true" />
            <span>System OK</span>
          </a>
        </footer>
      </body>
    </html>
  );
}
