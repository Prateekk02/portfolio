import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const app = join(process.cwd(), "src/app");

describe("site icons", () => {
  it("ships an svg icon, an apple touch icon and a favicon.ico", () => {
    for (const file of ["icon.svg", "apple-icon.png", "favicon.ico"]) {
      expect(existsSync(join(app, file)), file).toBe(true);
      expect(statSync(join(app, file)).size, file).toBeGreaterThan(200);
    }
  });

  it("draws the P as a vector with no text or font dependency", () => {
    const svg = readFileSync(join(app, "icon.svg"), "utf8");
    expect(svg).toContain("<svg");
    expect(svg).toContain('viewBox="0 0 64 64"');
    expect(svg).not.toMatch(/<text|font-family|<image|<script/i);
  });

  it("uses the same blue and violet as the background beams", () => {
    const svg = readFileSync(join(app, "icon.svg"), "utf8").toUpperCase();
    for (const colour of ["#18CCFC", "#6344F5", "#AE48FF"])
      expect(svg).toContain(colour);
  });

  it("starts with the png and ico magic bytes", () => {
    const png = readFileSync(join(app, "apple-icon.png"));
    expect(png.subarray(0, 4).toString("hex")).toBe("89504e47");
    const ico = readFileSync(join(app, "favicon.ico"));
    expect(ico.subarray(0, 4).toString("hex")).toBe("00000100");
  });
});
