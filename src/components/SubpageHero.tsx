import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function SubpageHero({
  eyebrow,
  title,
  desc,
  descClassName = "max-w-[560px]",
  children,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  descClassName?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-gradient-to-b from-bg-surface to-bg-base pb-12 pt-[130px] sm:pt-[150px]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-1.5 font-mono text-[15px] text-text-muted transition-colors hover:text-defend"
        >
          ← 홈으로
        </Link>
        {eyebrow && (
          <div className="mb-3 flex items-center gap-2.5 font-mono text-[15px] font-semibold uppercase tracking-[0.14em] text-defend">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-defend shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            {eyebrow}
          </div>
        )}
        <h1 className="section-title font-display mb-5 text-[clamp(28px,3.4vw,40px)] font-bold text-text-primary">{title}</h1>
        {desc && <p className={`text-[18.5px] text-text-secondary ${descClassName}`}>{desc}</p>}
        {children}
      </div>
    </header>
  );
}
