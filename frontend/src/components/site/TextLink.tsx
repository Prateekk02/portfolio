import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = Omit<ComponentProps<"a">, "href" | "ref"> & { href: string };

// A path with a file extension (for example the resume PDF) is a file, not a route.
const isRoute = (href: string) => href.startsWith("/") && !/\.\w+$/.test(href);

export function TextLink({ href, className, children, ...rest }: TextLinkProps) {
  const classes = cn("link", className);

  if (isRoute(href)) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}{" "}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
