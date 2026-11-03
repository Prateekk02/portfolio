import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import { SITE_URL } from "@/data/profile";

describe("robots", () => {
  it("allows the site, hides the admin and links the sitemap", () => {
    const r = robots();
    expect(r.rules).toMatchObject({ allow: "/", disallow: "/admin" });
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });
});
