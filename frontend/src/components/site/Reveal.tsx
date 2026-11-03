"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";

/**
 * Fades a block in and lifts it 12px the first time it scrolls into view.
 * Only opacity and transform are animated, and it runs once.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
