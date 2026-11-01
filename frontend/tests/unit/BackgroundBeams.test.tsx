import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BackgroundBeams } from "@/components/site/BackgroundBeams";

describe("BackgroundBeams", () => {
  it("is decorative: hidden from assistive technology", () => {
    render(<BackgroundBeams />);
    expect(screen.getByTestId("background-beams")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("contains a single sweep layer and no focusable content", () => {
    const { container } = render(<BackgroundBeams />);
    expect(container.querySelectorAll(".beams-sweep")).toHaveLength(1);
    expect(
      container.querySelectorAll("a, button, input, [tabindex]"),
    ).toHaveLength(0);
  });

  it("renders the same markup every time so hydration matches", () => {
    expect(render(<BackgroundBeams />).container.innerHTML).toBe(
      render(<BackgroundBeams />).container.innerHTML,
    );
  });
});

describe("beams mask and styles", () => {
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

  it("ships the mask with all 50 beam curves", () => {
    const svg = readFileSync(join(process.cwd(), "public/beams.svg"), "utf8");
    expect(svg.match(/M-?\d+ -?\d+C/g)).toHaveLength(50);
  });

  it("animates only transform and stops for reduced motion", () => {
    const keyframes =
      /@keyframes beams-sweep \{[\s\S]*?\n {2}\}/.exec(css)?.[0] ?? "";
    expect(keyframes).toContain("transform");
    expect(keyframes).not.toMatch(
      /\b(left|top|width|height|filter|opacity)\s*:/,
    );
    expect(css).toMatch(
      /prefers-reduced-motion: reduce\) \{\s*\.beams-sweep \{\s*animation: none/,
    );
  });
});
