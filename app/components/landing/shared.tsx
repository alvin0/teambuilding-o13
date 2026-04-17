import type { ReactNode } from "react";

export const viewport = { once: true, amount: 0.2 } as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.32em] text-[#ff7b47]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl tracking-tight text-[#6f280b] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[#8b5630]">{description}</p>
    </div>
  );
}

export function Badge({
  label,
  muted = false,
}: {
  label: string;
  muted?: boolean;
}) {
  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] ${
        muted
          ? "border-[#ffe3be] bg-[#fff7ea] text-[#b16c42]"
          : "border-[#ffd5a1] bg-white text-[#8b451f]"
      }`}
    >
      {label}
    </span>
  );
}

export function CopyBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.6rem] border border-white/80 bg-white/72 px-5 py-5 shadow-[0_14px_28px_rgba(255,188,112,0.08)]">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c07a4f]">{title}</p>
      <p className="mt-3 text-base leading-8 text-[#8b5730] lg:text-[1.075rem]">
        {body}
      </p>
    </div>
  );
}

export function PanelShell({ children }: { children: ReactNode }) {
  return <div className="glass-panel rounded-[2.2rem] p-6 sm:p-8 lg:p-10">{children}</div>;
}
