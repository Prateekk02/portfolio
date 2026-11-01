import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectList } from "@/components/site/ProjectList";
import type { Project } from "@/lib/types";

const base: Project = {
  slug: "demo",
  title: "Demo project",
  summary: "Does a demo.",
  stack: ["Python", "FastAPI"],
  featured: true,
};

describe("ProjectList", () => {
  it("shows title, summary and stack in the full variant", () => {
    render(<ProjectList projects={[base]} />);
    expect(
      screen.getByRole("heading", { name: "Demo project" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Does a demo.")).toBeInTheDocument();
    expect(screen.getByText("Python, FastAPI")).toBeInTheDocument();
  });

  it("hides the stack in the compact variant", () => {
    render(<ProjectList projects={[base]} variant="compact" />);
    expect(screen.queryByText("Python, FastAPI")).toBeNull();
  });

  it("offers every link a project has", () => {
    const project: Project = {
      ...base,
      repoUrl: "https://github.com/x/y",
      liveUrl: "https://demo.example.com",
      caseStudy: [{ heading: "Problem", body: "text" }],
    };
    render(<ProjectList projects={[project]} />);
    expect(
      screen.getByRole("link", { name: "Read the case study" }),
    ).toHaveAttribute("href", "/projects/demo");
    expect(
      screen.getByRole("link", { name: /Source on GitHub/ }),
    ).toHaveAttribute("href", "https://github.com/x/y");
    expect(screen.getByRole("link", { name: /Live demo/ })).toHaveAttribute(
      "href",
      "https://demo.example.com",
    );
  });

  it("renders no links for a project without any", () => {
    render(<ProjectList projects={[base]} />);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
