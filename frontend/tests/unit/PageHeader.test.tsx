import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageHeader } from "@/components/site/PageHeader";

describe("PageHeader", () => {
  it("renders the title as the only h1 with a lede", () => {
    render(<PageHeader title="Projects" lede="What I built" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Projects",
    );
    expect(screen.getByText("What I built")).toBeInTheDocument();
  });

  it("omits the lede when none is given", () => {
    const { container } = render(<PageHeader title="Blog" />);
    expect(container.querySelector("p")).toBeNull();
  });
});
