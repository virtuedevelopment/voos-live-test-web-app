import { siteConfig } from "@/lib/config/site";

export function GET() {
  return Response.json({
    ok: true,
    app: siteConfig.name,
    timestamp: new Date().toISOString(),
  });
}
