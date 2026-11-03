import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Section } from "@/components/site/Section";

describe("Section", () => {
  it("labels the region with its heading and renders children", () => {
    render(
      <Section id="work" title="Selected work">
        <p>body</p>
      </Section>,
    );
    const region = screen.getByRole("region", { name: "Selected work" });
    expect(region).toHaveTextContent("body");
    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "work-heading",
    );
  });

  it("accepts an extra class", () => {
    render(
      <Section id="x" title="X" className="mt-0">
        <span />
      </Section>,
    );
    expect(screen.getByRole("region")).toHaveClass("mt-0");
  });
});
