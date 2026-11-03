import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "@/components/site/SiteFooter";
import { profile } from "@/data/profile";

describe("SiteFooter", () => {
  it("links the profiles and the resources page", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
      "href",
      profile.links.github,
    );
    expect(screen.getByRole("link", { name: /^X/ })).toHaveAttribute(
      "href",
      expect.stringMatching(/\/_codewalker66$/),
    );
    expect(screen.getByRole("link", { name: "Resources" })).toHaveAttribute(
      "href",
      "/resources",
    );
  });

  it("shows the current year and name", () => {
    render(<SiteFooter />);
    expect(
      screen.getByText(
        new RegExp(`${new Date().getFullYear()} ${profile.name}`),
      ),
    ).toBeInTheDocument();
  });
});
