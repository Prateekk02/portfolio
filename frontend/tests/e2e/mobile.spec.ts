import { expect, test } from "@playwright/test";
import { ROUTES } from "./routes";

const WIDTHS = [320, 360, 390];

for (const width of WIDTHS) {
  test.describe(`at ${width}px`, () => {
    test.use({ viewport: { width, height: 800 } });

    for (const route of ROUTES) {
      test(`${route} has no overflow and a contained header`, async ({
        page,
      }) => {
        await page.goto(route);

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - window.innerWidth,
        );
        expect(overflow).toBeLessThanOrEqual(0);

        const tile = await page.getByTestId("site-header-tile").boundingBox();
        expect(tile).not.toBeNull();
        const kids = await page
          .getByTestId("site-header-tile")
          .locator("a, button")
          .evaluateAll((els) =>
            els.map((el) => {
              const r = el.getBoundingClientRect();
              return { left: r.left, right: r.right, h: r.height };
            }),
          );
        for (const k of kids) {
          expect(k.left).toBeGreaterThanOrEqual(tile!.x - 0.5);
          expect(k.right).toBeLessThanOrEqual(tile!.x + tile!.width + 0.5);
          expect(k.h).toBeGreaterThanOrEqual(43.5);
        }
      });
    }
  });
}
