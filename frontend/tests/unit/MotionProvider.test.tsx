import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MotionProvider } from "@/components/site/MotionProvider";
import { Reveal } from "@/components/site/Reveal";

describe("MotionProvider", () => {
  it("renders children", () => {
    render(
      <MotionProvider>
        <p>hello</p>
      </MotionProvider>,
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("supplies the animation features that m components need", () => {
    render(
      <MotionProvider>
        <Reveal>content</Reveal>
      </MotionProvider>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
