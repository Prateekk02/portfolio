import Link from "next/link";
import { profile } from "@/data/profile";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * A frosted-glass tile that floats above the page and stays in view while
 * scrolling. The blur and the translucent paper colour adapt to both themes.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-3 z-40 mt-3 px-3">
      <div
        data-testid="site-header-tile"
        className="mx-auto flex w-full max-w-[42rem] flex-wrap items-center justify-between gap-x-6 rounded-2xl border border-ink/10 bg-paper/65 px-5 py-1 shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-xl backdrop-saturate-150 dark:shadow-[0_8px_30px_rgb(0_0_0/0.35)]"
      >
        <Link href="/" className="py-2 font-semibold tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-3">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
