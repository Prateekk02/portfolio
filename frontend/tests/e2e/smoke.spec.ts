import { expect, test } from "@playwright/test";
import { ROUTES } from "./routes";

test.describe("every page", () => {
  for (const route of ROUTES) {
    test(`${route} loads cleanly`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
      page.on("pageerror", (err) => errors.push(err.message));

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      expect(errors).toEqual([]);

      // No horizontal scrolling at any viewport.
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});

test("main navigation reaches each section and marks it as current", async ({ page }) => {
  await page.goto("/");
  for (const name of ["Projects", "Experience", "Blog", "Contact"]) {
    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name }).click();
    await expect(page).toHaveURL(new RegExp(`/${name.toLowerCase()}$`));
    await expect(
      page.getByRole("navigation", { name: "Main" }).getByRole("link", { name }),
    ).toHaveAttribute("aria-current", "page");
  }
});

test("the case study opens from the home page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Read the case study" }).click();
  await expect(page).toHaveURL(/\/projects\/agentic-failure-triage$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Agentic test failure triage");
});

test("an unknown route shows the 404 page with a 404 status", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
});

test("external links open safely in a new tab", async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(route);
    const unsafe = await page.$$eval('a[target="_blank"]', (links) =>
      links.filter((a) => !/noopener/.test(a.getAttribute("rel") ?? "")).map((a) => a.getAttribute("href")),
    );
    expect(unsafe, `unsafe links on ${route}`).toEqual([]);
  }
});

test.describe("theme", () => {
  test.use({ colorScheme: "light" });

  test("the choice persists across navigation and reloads", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).not.toHaveClass(/dark/);

    await page.getByRole("button", { name: "Switch to dark theme" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Projects" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    await page.reload();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("turns the log animation off but keeps the highlighted line", async ({ page }) => {
    await page.goto("/");
    const names = await page.$$eval(".log-line", (els) =>
      els.map((el) => getComputedStyle(el).animationName),
    );
    expect(names).toHaveLength(6);
    expect(new Set(names)).toEqual(new Set(["none"]));
    await expect(page.locator("[data-odd]")).toBeVisible();
  });
});
