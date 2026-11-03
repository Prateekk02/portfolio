"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import type { Recommendation } from "@/lib/types";

/** Fixed tilt per card so server and client render the same markup. */
function tilt(index: number): number {
  return (((index + 1) * 7) % 21) - 10;
}

/**
 * A stack of portraits that shuffles when you move through the
 * recommendations, with the quote revealing word by word beside it.
 * Only opacity and transforms are animated.
 */
export function AnimatedRecommendations({
  items,
}: {
  items: Recommendation[];
}) {
  const [active, setActive] = useState(0);
  const current = items[active];

  const next = () => setActive((i) => (i + 1) % items.length);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8">
      <div className="relative mx-auto h-72 w-full max-w-[15rem] sm:mx-0">
        <AnimatePresence>
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <m.div
                key={item.photo}
                data-active={isActive}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: tilt(index),
                }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.95,
                  z: isActive ? 0 : -100,
                  rotate: isActive ? 0 : tilt(index),
                  zIndex: isActive ? 40 : items.length + 2 - index,
                  y: isActive ? [0, -40, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: tilt(index) }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={item.photo}
                  alt={`Portrait of ${item.name}`}
                  width={500}
                  height={500}
                  sizes="(min-width: 640px) 15rem, 80vw"
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <m.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          aria-live="polite"
        >
          <h3 className="text-xl font-semibold tracking-tight">
            {current.name}
          </h3>
          <p className="text-sm text-ink-soft">{current.role}</p>
          <p className="sr-only">{current.quote}</p>
          <p aria-hidden="true" className="mt-5 text-ink-soft">
            {current.quote.split(" ").map((word, index) => (
              <m.span
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </m.span>
            ))}
          </p>
        </m.div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous recommendation"
            className="group/button flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-ink/10 transition-colors hover:bg-ink/20"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12"
            />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next recommendation"
            className="group/button flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-ink/10 transition-colors hover:bg-ink/20"
          >
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
