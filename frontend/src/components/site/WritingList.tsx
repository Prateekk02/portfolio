import type { WritingItem } from "@/lib/types";
import { TextLink } from "./TextLink";

export function WritingList({ items }: { items: WritingItem[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li
          key={item.href}
          className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <TextLink href={item.href}>{item.title}</TextLink>
          <span className="shrink-0 text-sm text-ink-soft">{item.source}</span>
        </li>
      ))}
    </ul>
  );
}
