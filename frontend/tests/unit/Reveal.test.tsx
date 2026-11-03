import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MotionProvider } from "@/components/site/MotionProvider";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

describe("Reveal", () => {
  it("renders its children and class name", () => {
    render(
      <MotionProvider>
        <Reveal className="mt-5">
          <p>Hello</p>
        </Reveal>
      </MotionProvider>,
    );
    expect(screen.getByText("Hello").parentElement).toHaveClass("mt-5");
  });

  it("keeps section content in the document so it is readable before it animates", () => {
    render(
      <MotionProvider>
        <Section id="work" title="Selected work">
          <p>Content</p>
        </Section>
      </MotionProvider>,
    );
    expect(
      screen.getByRole("heading", { name: "Selected work" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
