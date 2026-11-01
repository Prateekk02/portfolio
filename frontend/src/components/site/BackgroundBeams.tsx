import type { CSSProperties } from "react";

const PATH_COUNT = 50;
/** Only every fourth beam carries a travelling drop: the same look at a quarter of the cost. */
const DROP_EVERY = 4;

/** Beam i is the first curve shifted 7 units right and 8 units up, i times. */
function beamPath(i: number): string {
  const x = 7 * i;
  const y = -8 * i;
  return (
    `M${-380 + x} ${-189 + y}C${-380 + x} ${-189 + y} ${-312 + x} ${216 + y} ${152 + x} ${343 + y}` +
    `C${616 + x} ${470 + y} ${684 + x} ${875 + y} ${684 + x} ${875 + y}`
  );
}

const PATHS = Array.from({ length: PATH_COUNT }, (_, i) => beamPath(i));
const FAINT_LINES = PATHS.join("");

/** Deterministic spread so server and client render identical markup. */
function spread(i: number, salt: number): number {
  return ((i * 37 + salt * 17) % 100) / 100;
}

/**
 * Decorative background: faint curved lines with a bright drop of blue and
 * violet light travelling along some of them.
 *
 * Pure markup and CSS, no JavaScript. Hidden from assistive technology, ignores
 * clicks, and the drops stay still for visitors who prefer reduced motion.
 */
export function BackgroundBeams() {
  return (
    <div aria-hidden="true" data-testid="background-beams" className="beams">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="beam-colour"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="696"
            y2="316"
          >
            <stop stopColor="#18CCFC" />
            <stop offset="0.5" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" />
          </linearGradient>
        </defs>

        <path
          d={FAINT_LINES}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="0.5"
        />

        {PATHS.map((d, i) =>
          i % DROP_EVERY === 0 ? (
            <path
              key={i}
              data-drop=""
              d={d}
              pathLength={100}
              stroke="url(#beam-colour)"
              strokeWidth="0.9"
              strokeLinecap="round"
              className="beam-drop"
              style={
                {
                  "--beam-duration": `${10 + spread(i, 2) * 10}s`,
                  "--beam-delay": `-${spread(i, 3) * 10}s`,
                } as CSSProperties
              }
            />
          ) : null,
        )}
      </svg>
    </div>
  );
}
