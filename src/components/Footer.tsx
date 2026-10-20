import { Link } from "react-router-dom";
import { EVENT } from "../data/content";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { label: "대회 소개", href: "/#about" },
  { label: "대회 개요", href: "/#results" },
  { label: "참가 안내", href: "/#join" },
  { label: "대회 규정사항", href: "/#rules" },
  { label: "문의하기", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        {/* 상단: 브랜드 + 메뉴 */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7 shrink-0" />
            <p className="font-display text-[19px] font-bold text-text-primary">{EVENT.title}</p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[16px] text-text-secondary">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.label} className="transition-colors hover:text-defend" to={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 하단: 주최·주관·후원·운영 + 저작권 */}
        <div className="pt-2">
          <p className="font-mono text-[13.5px] leading-relaxed text-text-muted">
            주최 청주대 앵커사업단 · 충북과학기술혁신원 · 충청북도 / 주관 청주대·충북대·서원대 앵커사업단 · 충북정보보호지원센터
            <br />
            후원 교육부 · 충북앵커센터 / 운영 클라우드에어
          </p>
          <p className="mt-4 font-mono text-[14px] text-text-muted">© {EVENT.title}. 청주대학교 앵커사업단.</p>
        </div>
      </div>
    </footer>
  );
}
