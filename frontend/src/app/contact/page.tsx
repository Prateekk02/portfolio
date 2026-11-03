import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { TextLink } from "@/components/site/TextLink";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch with Prateek Kumar.",
};

export default function ContactPage() {
  const channels = [
    ...(profile.email ? [{ label: "Email", href: `mailto:${profile.email}`, text: profile.email }] : []),
    { label: "LinkedIn", href: profile.links.linkedin, text: "prateekk02" },
    { label: "GitHub", href: profile.links.github, text: "Prateekk02" },
    { label: "X", href: profile.links.x, text: "@_codewalker66" },
  ];

  return (
    <>
      <PageHeader
        title="Contact"
        lede={
          profile.email
            ? "The quickest way to reach me is email. Tell me what you are working on."
            : "The quickest way to reach me is LinkedIn. Tell me what you are working on."
        }
      />
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {channels.map((channel) => (
          <div key={channel.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
            <dt className="w-24 shrink-0 text-ink-soft">{channel.label}</dt>
            <dd>
              <TextLink href={channel.href}>{channel.text}</TextLink>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
