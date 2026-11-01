import { profile } from "@/data/profile";
import { TextLink } from "./TextLink";

const FOOTER_LINKS = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "X", href: profile.links.x },
  { label: "Medium", href: profile.links.medium },
  { label: "Resume", href: profile.resumeHref },
  { label: "Resources", href: "/resources" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[42rem] px-5 py-10 text-sm text-ink-soft">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map(({ label, href }) => (
            <li key={label}>
              <TextLink href={href}>{label}</TextLink>
            </li>
          ))}
        </ul>
        <p className="mt-6">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
