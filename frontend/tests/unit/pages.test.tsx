import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BlogPage from "@/app/blog/page";
import ContactPage from "@/app/contact/page";
import ExperiencePage from "@/app/experience/page";
import NotFound from "@/app/not-found";
import HomePage from "@/app/page";
import CaseStudyPage, {
  generateStaticParams,
} from "@/app/projects/[slug]/page";
import ProjectsPage from "@/app/projects/page";
import ResourcesPage from "@/app/resources/page";
import sitemap from "@/app/sitemap";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("pages", () => {
  it("home leads with the headline and links to the main sections", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /LLM agents/,
    );
    expect(
      screen.getByRole("heading", { name: "Selected work" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Writing" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it.each([
    ["projects", ProjectsPage, "Projects"],
    ["experience", ExperiencePage, "Experience"],
    ["blog", BlogPage, "Blog"],
    ["resources", ResourcesPage, "Resources"],
    ["contact", ContactPage, "Contact"],
    ["not found", NotFound, "Page not found"],
  ])("%s has a single h1", (_name, Page, title) => {
    render(<Page />);
    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(title);
  });

  it("renders the case study for a project that has one", async () => {
    render(
      await CaseStudyPage({
        params: Promise.resolve({ slug: "agentic-failure-triage" }),
      }),
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Agentic test failure triage",
    );
    expect(
      screen.getByRole("heading", { name: "Problem" }),
    ).toBeInTheDocument();
  });

  it("returns not found for an unknown or case-study-less project", async () => {
    await expect(
      CaseStudyPage({ params: Promise.resolve({ slug: "nope" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    await expect(
      CaseStudyPage({ params: Promise.resolve({ slug: "content-catalyst" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("only pre-renders projects that have a case study", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "agentic-failure-triage" },
    ]);
  });

  it("lists every public route in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of [
      "",
      "/projects",
      "/experience",
      "/blog",
      "/resources",
      "/contact",
      "/projects/agentic-failure-triage",
    ]) {
      expect(urls).toContain(`https://www.prateekkumar.dev${path}`);
    }
  });
});
