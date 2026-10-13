import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-3.5 flex items-center gap-2.5 font-mono text-[14px] font-semibold uppercase tracking-[0.14em] text-defend">
      <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-defend shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
      {children}
    </div>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display reveal mb-4 text-[clamp(30px,4.2vw,48px)] font-bold leading-tight text-text-primary">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="section-title font-display reveal mb-5 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight text-text-primary">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mb-12 max-w-[640px] text-[18.5px] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "neutral" | "attack" | "defend";
}) {
  return (
    <div
      onClick={onClick}
      className={`hud card-hover rounded-[3px] border border-border bg-bg-card p-7 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-border to-transparent ${className}`} />;
}
