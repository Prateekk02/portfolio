import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LogExcerpt } from "@/components/site/LogExcerpt";

describe("LogExcerpt", () => {
  it("has an accessible name and a caption", () => {
    render(<LogExcerpt />);
    expect(screen.getByRole("region", { name: "Illustrative log excerpt" })).toBeInTheDocument();
    expect(screen.getByText(/Five lines of this run match a known pattern/)).toBeInTheDocument();
  });

  it("marks exactly one line as the odd one out", () => {
    const { container } = render(<LogExcerpt />);
    expect(container.querySelectorAll(".log-line")).toHaveLength(6);
    const odd = container.querySelectorAll("[data-odd]");
    expect(odd).toHaveLength(1);
    expect(odd[0]).toHaveTextContent("timeout");
  });

  it("is keyboard focusable so a narrow screen can scroll it", () => {
    render(<LogExcerpt />);
    expect(screen.getByRole("region", { name: "Illustrative log excerpt" })).toHaveAttribute("tabindex", "0");
  });
});
