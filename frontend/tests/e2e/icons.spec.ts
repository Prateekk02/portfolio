import { expect, test } from "@playwright/test";

test("the page advertises an svg icon and an apple icon, and they load", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const hrefs = await page.$$eval(
    "link[rel~='icon'], link[rel='apple-touch-icon']",
    (els) => els.map((el) => el.getAttribute("href") ?? ""),
  );
  expect(hrefs.some((h) => h.includes("icon.svg"))).toBe(true);
  expect(hrefs.some((h) => h.includes("apple-icon"))).toBe(true);
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test("favicon.ico is served", async ({ request }) => {
  const res = await request.get("/favicon.ico");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toMatch(/icon|octet/);
});
