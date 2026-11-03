import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={cn("mt-14 sm:mt-20", className)}
    >
      <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <Reveal className="mt-5">{children}</Reveal>
    </section>
  );
}
