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

  it("has no focusable content", () => {
    const { container } = render(<BackgroundBeams />);
    expect(
      container.querySelectorAll("a, button, input, [tabindex]"),
    ).toHaveLength(0);
  });

  it("draws the faint lines for all 50 beams in one path", () => {
    const { container } = render(<BackgroundBeams />);
    const lines = container.querySelector("svg > path:not([data-drop])");
    expect(lines?.getAttribute("d")?.match(/M-?\d+ -?\d+C/g)).toHaveLength(50);
  });

  it("sends a drop along every fourth beam, normalised so one drop shows at a time", () => {
    const { container } = render(<BackgroundBeams />);
    const drops = container.querySelectorAll("path[data-drop]");
    expect(drops).toHaveLength(13);
    for (const drop of drops) {
      expect(drop).toHaveAttribute("pathLength", "100");
      expect(drop).toHaveClass("beam-drop");
    }
  });

  it("gives each drop its own speed and start so they do not move in lockstep", () => {
    const { container } = render(<BackgroundBeams />);
    const timings = Array.from(
      container.querySelectorAll<SVGPathElement>("path[data-drop]"),
    ).map(
      (p) =>
        `${p.style.getPropertyValue("--beam-duration")}/${p.style.getPropertyValue("--beam-delay")}`,
    );
    expect(new Set(timings).size).toBeGreaterThan(8);
  });

  it("renders the same markup every time so hydration matches", () => {
    expect(render(<BackgroundBeams />).container.innerHTML).toBe(
      render(<BackgroundBeams />).container.innerHTML,
    );
  });
});

describe("beam styles", () => {
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

  it("slides a short dash along the curve, from the start to past the end", () => {
    expect(css).toMatch(/stroke-dasharray:\s*8 100/);
    const keyframes =
      /@keyframes beam-drop \{[\s\S]*?\n {2}\}/.exec(css)?.[0] ?? "";
    expect(keyframes).toContain("stroke-dashoffset: 8");
    expect(keyframes).toContain("stroke-dashoffset: -100");
  });

  it("stops moving for visitors who prefer reduced motion", () => {
    expect(css).toMatch(
      /prefers-reduced-motion: reduce\) \{\s*\.beam-drop \{\s*animation: none/,
    );
  });
});
