import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import {
  earlierProjects,
  featuredProjects,
  getProject,
  projects,
} from "@/data/projects";
import { recommendations } from "@/data/recommendations";
import { resourceGroups } from "@/data/resources";
import { writing } from "@/data/writing";

const urls = (list: (string | undefined)[]) =>
  list.filter((u): u is string => Boolean(u));

describe("project data", () => {
  it("has unique, url-safe slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("splits cleanly into featured and earlier work", () => {
    expect(featuredProjects.length + earlierProjects.length).toBe(
      projects.length,
    );
    expect(featuredProjects.length).toBeGreaterThan(0);
  });

  it("gives every project a summary and a stack", () => {
    for (const p of projects) {
      expect(p.summary.length).toBeGreaterThan(10);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });

  it("looks projects up by slug", () => {
    expect(getProject(projects[0].slug)).toBe(projects[0]);
    expect(getProject("does-not-exist")).toBeUndefined();
  });

  it("keeps the retired projects off the site", () => {
    const titles = projects.map((p) => p.title.toLowerCase()).join(" ");
    expect(titles).not.toContain("depression");
  });
});

describe("external links", () => {
  it("are all https", () => {
    const all = urls([
      ...projects.flatMap((p) => [p.repoUrl, p.liveUrl]),
      ...writing.map((w) => w.href),
      ...resourceGroups.flatMap((g) => g.items.map((i) => i.href)),
      ...Object.values(profile.links),
    ]);
    expect(all.length).toBeGreaterThan(20);
    for (const url of all) expect(url).toMatch(/^https:\/\//);
  });
});

describe("other content", () => {
  it("has experience, education and recommendations", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
    expect(recommendations.length).toBeGreaterThan(0);
    for (const job of experience)
      expect(job.highlights.length).toBeGreaterThan(0);
  });

  it("does not expose a phone number anywhere in the profile", () => {
    expect(JSON.stringify(profile)).not.toMatch(/\+?\d[\d\s-]{9,}\d/);
  });
});

describe("profile copy", () => {
  const copy = [profile.headline, ...profile.intro].join(" ");

  it("leads with the AI engineering positioning", () => {
    expect(profile.headline).toBe(
      "I turn language models into software you can trust: right, fast and cheap, all at once.",
    );
  });

  it("keeps the intro focused on AI work, not on testing", () => {
    expect(copy).not.toMatch(/test automation/i);
  });

  it("does not mention the internship in the home intro", () => {
    expect(copy).not.toMatch(/bits|pilani|goa|intern/i);
    expect(profile.intro).toHaveLength(1);
  });

  it("never names an employer", () => {
    expect(copy).not.toMatch(/zebra|tcs|tata/i);
  });
});

describe("recommendations", () => {
  it("each has a portrait that exists under public/", () => {
    for (const item of recommendations) {
      expect(item.photo.startsWith("/recommendations/"), item.name).toBe(true);
      expect(
        existsSync(join(process.cwd(), "public", item.photo)),
        item.photo,
      ).toBe(true);
    }
  });
});
