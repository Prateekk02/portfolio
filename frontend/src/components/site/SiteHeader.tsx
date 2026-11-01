import Link from "next/link";
import { profile } from "@/data/profile";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex w-full max-w-[42rem] flex-wrap items-center justify-between gap-x-6 px-5 py-1">
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
