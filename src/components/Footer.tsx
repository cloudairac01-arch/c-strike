import { Link } from "react-router-dom";
import { EVENT } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border py-12">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <span
            className="flex h-6 w-6 shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--color-attack), var(--color-defend))",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div className="leading-tight">
            <p className="text-[14px] font-semibold text-text-primary">2026 충북 정보보호 해커톤</p>
            <p className="font-mono text-[12.5px] text-text-muted">주최 청주대 앵커사업단 · 한국인터넷진흥원 · 충청북도</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-text-secondary">
          <Link className="transition-colors hover:text-defend" to="/#about">대회 소개</Link>
          <Link className="transition-colors hover:text-defend" to="/#results">대회 개요</Link>
          <Link className="transition-colors hover:text-defend" to="/#join">참가 안내</Link>
          <Link className="transition-colors hover:text-defend" to="/#contact">문의하기</Link>
        </nav>

        <p className="font-mono text-[14px] text-text-muted">
          © {EVENT.year} {EVENT.name}. 청주대학교 앵커사업단.
        </p>
      </div>
    </footer>
  );
}
