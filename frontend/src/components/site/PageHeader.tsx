interface PageHeaderProps {
  title: string;
  lede?: string;
}

export function PageHeader({ title, lede }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-[clamp(2rem,5.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-balance">
        {title}
      </h1>
      {lede ? <p className="mt-4 max-w-[34rem] text-pretty text-ink-soft">{lede}</p> : null}
    </header>
  );
}
