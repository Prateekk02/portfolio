import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NavLinks } from "@/components/site/NavLinks";

const pathname = vi.hoisted(() => ({ value: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => pathname.value }));

describe("NavLinks", () => {
  beforeEach(() => {
    pathname.value = "/";
  });

  it("links to every top-level page with an absolute href", () => {
    render(<NavLinks />);
    const expected = {
      Projects: "/projects",
      Experience: "/experience",
      Blog: "/blog",
      Contact: "/contact",
    };
    for (const [name, href] of Object.entries(expected)) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("marks no link as current on the home page", () => {
    render(<NavLinks />);
    expect(screen.queryByRole("link", { current: "page" })).toBeNull();
  });

  it("marks the matching link as current", () => {
    pathname.value = "/blog";
    render(<NavLinks />);
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Projects" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("keeps the parent link current on nested routes", () => {
    pathname.value = "/projects/agentic-failure-triage";
    render(<NavLinks />);
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("does not treat a similar prefix as the same section", () => {
    pathname.value = "/blogging";
    render(<NavLinks />);
    expect(screen.queryByRole("link", { current: "page" })).toBeNull();
  });
});
