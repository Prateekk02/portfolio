import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "@/components/Navbar";

const EXPECTED_LINKS: Record<string, string> = {
  Home: "/",
  Blog: "/blog",
  Resources: "/resources",
  Projects: "/projects",
};

describe("Navbar", () => {
  it("renders every top-level link with an absolute href", () => {
    render(<Navbar />);

    for (const [name, href] of Object.entries(EXPECTED_LINKS)) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("shows a second set of links when the mobile menu is opened", async () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: "Blog" })).toHaveLength(1);

    await userEvent.click(screen.getByRole("button", { name: "Toggle menu" }));

    expect(screen.getAllByRole("link", { name: "Blog" })).toHaveLength(2);
  });
});
