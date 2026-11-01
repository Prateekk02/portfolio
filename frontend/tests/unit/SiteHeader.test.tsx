import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/site/SiteHeader";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

describe("SiteHeader", () => {
  it("shows the name, the navigation and the theme toggle", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Prateek Kumar" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
  });

  it("is a frosted floating tile with rounded corners", () => {
    render(<SiteHeader />);
    const tile = screen.getByTestId("site-header-tile");
    expect(tile).toHaveClass("rounded-2xl", "backdrop-blur-xl");
    expect(tile.className).toMatch(/bg-paper\/\d+/);
  });

  it("sticks to the top with a gap so it floats", () => {
    const { container } = render(<SiteHeader />);
    expect(container.querySelector("header")).toHaveClass("sticky", "top-3");
  });
});
