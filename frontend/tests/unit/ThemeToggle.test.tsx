import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function renderToggle() {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>,
  );
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("switches the document to dark mode and back", async () => {
    renderToggle();
    const button = screen.getByRole("button", { name: "Toggle theme" });

    await userEvent.click(button);
    expect(document.documentElement).toHaveClass("dark");

    await userEvent.click(button);
    expect(document.documentElement).not.toHaveClass("dark");
  });
});
