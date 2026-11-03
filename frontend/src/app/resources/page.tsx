import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { TextLink } from "@/components/site/TextLink";
import { resourceGroups } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Papers, tools and channels Prateek Kumar keeps coming back to.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader title="Resources" lede="Papers, tools and channels I keep coming back to." />
      {resourceGroups.map((group) => (
        <Section key={group.title} id={group.title.toLowerCase().replace(/\W+/g, "-")} title={group.title}>
          <ul className="divide-y divide-line border-y border-line">
            {group.items.map((item) => (
              <li key={item.title} className="py-3">
                {item.href ? <TextLink href={item.href}>{item.title}</TextLink> : item.title}
                {item.note ? <p className="text-sm text-ink-soft">{item.note}</p> : null}
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
