import { expect, test } from "@playwright/test";

test.describe("dark theme", () => {
  test.use({ colorScheme: "dark" });

  test("uses the deep blue background", async ({ page }) => {
    await page.goto("/");
    // Resolve the computed colour (possibly oklch) to real RGB through a canvas.
    const [r, g, b] = await page.evaluate(() => {
      const ctx = document
        .createElement("canvas")
        .getContext("2d", { willReadFrequently: true })!;
      ctx.fillStyle = getComputedStyle(document.body).backgroundColor;
      ctx.fillRect(0, 0, 1, 1);
      return Array.from(ctx.getImageData(0, 0, 1, 1).data);
    });
    // Blue channel clearly dominates: navy, not neutral grey.
    expect(b).toBeGreaterThan(r + 15);
    expect(b).toBeGreaterThan(g + 8);
    expect(b).toBeLessThan(80); // still a dark surface
  });

  test("shows the background beams without blocking clicks or the accessibility tree", async ({
    page,
  }) => {
    await page.goto("/");
    const beams = page.getByTestId("background-beams");
    await expect(beams).toBeAttached();
    await expect(beams).toHaveAttribute("aria-hidden", "true");
    // Visible, but quiet enough that text stays easy to read.
    const opacity = Number(
      await beams.evaluate((el) => getComputedStyle(el).opacity),
    );
    expect(opacity).toBeGreaterThan(0.15);
    expect(opacity).toBeLessThanOrEqual(0.4);
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});

test("beams are subdued in the light theme", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const opacity = await page
    .getByTestId("background-beams")
    .evaluate((el) => getComputedStyle(el).opacity);
  expect(Number(opacity)).toBeLessThan(0.5);
});

test("sections reveal on scroll and end fully visible", async ({ page }) => {
  await page.goto("/");
  const heading = page.getByRole("heading", { name: "Writing" });
  await heading.scrollIntoViewIfNeeded();
  const body = page.locator("#writing-heading + div");
  await expect(body).toHaveCSS("opacity", "1");
});

test("with reduced motion the page is fully visible immediately", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#work-heading + div")).toBeVisible();
});

test("the beams do not shift layout", async ({ page }) => {
  await page.goto("/");
  const cls = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let total = 0;
        new PerformanceObserver((list) => {
          for (const e of list.getEntries() as unknown as {
            value: number;
            hadRecentInput: boolean;
          }[]) {
            if (!e.hadRecentInput) total += e.value;
          }
        }).observe({ type: "layout-shift", buffered: true });
        setTimeout(() => resolve(total), 1500);
      }),
  );
  expect(cls).toBeLessThan(0.02);
});

for (const scheme of ["light", "dark"] as const) {
  test.describe(`${scheme} header tile`, () => {
    test.use({ colorScheme: scheme });

    test("is frosted glass with curved corners", async ({ page }) => {
      await page.goto("/");
      const tile = page.getByTestId("site-header-tile");
      const style = await tile.evaluate((el) => {
        const s = getComputedStyle(el);
        return {
          blur:
            s.backdropFilter || s.getPropertyValue("-webkit-backdrop-filter"),
          radius: parseFloat(s.borderTopLeftRadius),
          bg: s.backgroundColor,
        };
      });
      expect(style.blur).toContain("blur");
      expect(style.radius).toBeGreaterThanOrEqual(12);
      expect(style.bg).not.toMatch(/rgb\(\d+, \d+, \d+\)$/); // translucent, not opaque
    });

    test("gains a deeper shadow when hovered", async ({ page }) => {
      await page.goto("/");
      const tile = page.getByTestId("site-header-tile");
      const shadow = () =>
        tile.evaluate((el) => getComputedStyle(el).boxShadow);
      const resting = await shadow();
      await tile.hover({ position: { x: 4, y: 4 } });
      await page.waitForTimeout(500);
      const hovered = await shadow();
      expect(hovered).not.toBe(resting);
      expect(hovered).not.toBe("none");
    });

    test("floats and stays in view while scrolling", async ({ page }) => {
      await page.goto("/");
      const tile = page.getByTestId("site-header-tile");
      const before = await tile.boundingBox();
      await page.mouse.wheel(0, 900);
      await page.waitForTimeout(300);
      const after = await tile.boundingBox();
      expect(before!.y).toBeGreaterThan(4);
      expect(Math.abs(after!.y - before!.y)).toBeLessThan(2);
    });
  });
}

test("a drop travels along the beams instead of lighting the whole line", async ({
  page,
}) => {
  await page.goto("/");
  const offsets = async () =>
    page.$$eval(".beam-drop", (els) =>
      els.map((el) => parseFloat(getComputedStyle(el).strokeDashoffset)),
    );
  const first = await offsets();
  await page.waitForTimeout(1200);
  const second = await offsets();
  expect(first).toHaveLength(13);
  // Moving: at least most drops advanced, and each stays within its own path length.
  const moved = second.filter((v, i) => v !== first[i]).length;
  expect(moved).toBeGreaterThan(9);
  for (const v of second) {
    expect(v).toBeGreaterThanOrEqual(-100);
    expect(v).toBeLessThanOrEqual(8);
  }
});
