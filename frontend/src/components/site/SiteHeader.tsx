import Link from "next/link";
import { profile } from "@/data/profile";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * A frosted-glass tile (40% paper colour over a blur) that floats above the
 * page and stays in view while scrolling. On hover it lifts with a deeper
 * shadow, or a soft violet glow in the dark theme.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-3 z-40 mt-3 px-3">
      <div
        data-testid="site-header-tile"
        className="mx-auto flex w-full max-w-[42rem] flex-wrap items-center justify-between gap-x-4 rounded-2xl border border-ink/10 bg-paper/40 px-5 py-1 shadow-[0_4px_16px_rgb(0_0_0/0.05)] backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-300 hover:shadow-[0_14px_44px_rgb(0_0_0/0.22)] dark:shadow-[0_4px_16px_rgb(0_0_0/0.25)] dark:hover:shadow-[0_0_36px_rgb(99_68_245/0.45)]"
      >
        <Link
          href="/"
          className="order-1 mr-auto inline-flex min-h-11 items-center font-semibold tracking-tight"
        >
          {profile.name}
        </Link>
        <div className="order-2 sm:order-3">
          <ThemeToggle />
        </div>
        <div className="order-3 w-full sm:order-2 sm:mr-3 sm:w-auto">
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
