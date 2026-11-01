import type { CSSProperties } from "react";

interface LogLine {
  time: string;
  status: string;
  unit: string;
  took: string;
  odd?: boolean;
}

// Illustrative data. Not taken from any real system.
const LINES: LogLine[] = [
  { time: "10:42:01", status: "ok", unit: "unit-03", took: "1.7s" },
  { time: "10:42:04", status: "ok", unit: "unit-04", took: "1.8s" },
  { time: "10:42:07", status: "ok", unit: "unit-05", took: "1.7s" },
  { time: "10:42:10", status: "ok", unit: "unit-06", took: "1.9s" },
  { time: "10:42:13", status: "timeout", unit: "unit-07", took: "30.0s", odd: true },
  { time: "10:42:44", status: "ok", unit: "unit-08", took: "1.8s" },
];

const format = (l: LogLine) =>
  `${l.time}  ${l.status.padEnd(7)}  ${l.unit}  ${l.took.padStart(5)}`;

export function LogExcerpt() {
  return (
    <figure className="mt-12">
      <div
        role="region"
        aria-label="Illustrative log excerpt"
        tabIndex={0}
        className="overflow-x-auto rounded-sm border border-line px-5 py-4"
      >
        <pre className="font-mono text-[12.5px] leading-7 text-ink-soft">
          <code>
            {LINES.map((line, i) => (
              <span
                key={line.time}
                className={line.odd ? "log-line font-medium text-ink" : "log-line"}
                data-odd={line.odd ? "" : undefined}
                style={{ "--i": i } as CSSProperties}
              >
                {format(line)}
              </span>
            ))}
          </code>
        </pre>
      </div>
      <figcaption className="mt-3 max-w-[34rem] text-sm text-ink-soft">
        Five lines of this run match a known pattern. One does not. That is the only line the
        agent spends model time on.
      </figcaption>
    </figure>
  );
}
