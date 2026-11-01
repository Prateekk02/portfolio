import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnimatedRecommendations } from "@/components/site/AnimatedRecommendations";
import { MotionProvider } from "@/components/site/MotionProvider";
import { recommendations } from "@/data/recommendations";

function setup() {
  return render(
    <MotionProvider>
      <AnimatedRecommendations items={recommendations} />
    </MotionProvider>,
  );
}

describe("AnimatedRecommendations", () => {
  it("starts with the first person's name, role and full quote", () => {
    setup();
    const first = recommendations[0];
    expect(
      screen.getByRole("heading", { name: first.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(first.role)).toBeInTheDocument();
    expect(screen.getByText(first.quote)).toBeInTheDocument();
  });

  it("shows a portrait for every person with a descriptive alt text", () => {
    setup();
    for (const item of recommendations) {
      expect(
        screen.getByAltText(`Portrait of ${item.name}`),
      ).toBeInTheDocument();
    }
  });

  it("moves to the next and previous person with labelled buttons", () => {
    setup();
    fireEvent.click(
      screen.getByRole("button", { name: "Next recommendation" }),
    );
    expect(
      screen.getByRole("heading", { name: recommendations[1].name }),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Previous recommendation" }),
    );
    expect(
      screen.getByRole("heading", { name: recommendations[0].name }),
    ).toBeInTheDocument();
  });

  it("wraps around at both ends", () => {
    setup();
    fireEvent.click(
      screen.getByRole("button", { name: "Previous recommendation" }),
    );
    const last = recommendations[recommendations.length - 1];
    expect(
      screen.getByRole("heading", { name: last.name }),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Next recommendation" }),
    );
    expect(
      screen.getByRole("heading", { name: recommendations[0].name }),
    ).toBeInTheDocument();
  });

  it("marks exactly one portrait as active", () => {
    const { container } = setup();
    expect(container.querySelectorAll('[data-active="true"]')).toHaveLength(1);
    fireEvent.click(
      screen.getByRole("button", { name: "Next recommendation" }),
    );
    expect(container.querySelectorAll('[data-active="true"]')).toHaveLength(1);
  });

  it("hides the word-by-word animation from screen readers and keeps one readable copy", () => {
    const { container } = setup();
    expect(container.querySelector('p[aria-hidden="true"]')).not.toBeNull();
    expect(container.querySelector("p.sr-only")?.textContent).toBe(
      recommendations[0].quote,
    );
  });
});
