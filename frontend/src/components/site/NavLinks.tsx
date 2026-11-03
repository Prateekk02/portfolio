"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center justify-between gap-2 text-[0.9375rem] sm:justify-start sm:gap-5">
        {NAV_LINKS.map(({ href, label }) => {
          const current = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center hover:text-ink",
                  current
                    ? "text-ink underline decoration-1 underline-offset-[0.35em]"
                    : "text-ink-soft",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
