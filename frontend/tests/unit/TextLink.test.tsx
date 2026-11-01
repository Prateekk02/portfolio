import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextLink } from "@/components/site/TextLink";

describe("TextLink", () => {
  it("renders internal routes without opening a new tab", () => {
    render(<TextLink href="/projects">Projects</TextLink>);
    const link = screen.getByRole("link", { name: "Projects" });
    expect(link).toHaveAttribute("href", "/projects");
    expect(link).not.toHaveAttribute("target");
  });

  it("opens external links in a new tab safely and announces it", () => {
    render(<TextLink href="https://github.com/Prateekk02">GitHub</TextLink>);
    const link = screen.getByRole("link", { name: "GitHub (opens in a new tab)" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("treats a file path such as the resume PDF as a file, not a route", () => {
    render(<TextLink href="/Prateek_Kumar.pdf">Resume</TextLink>);
    expect(screen.getByRole("link", { name: /Resume/ })).toHaveAttribute("target", "_blank");
  });

  it("keeps mailto links in the same tab", () => {
    render(<TextLink href="mailto:hello@example.com">Email</TextLink>);
    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute("href", "mailto:hello@example.com");
    expect(link).not.toHaveAttribute("target");
  });
});
