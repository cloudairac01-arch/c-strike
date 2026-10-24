import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EVENT } from "../data/content";
import { smoothScrollToId } from "../lib/scrollTo";
import { Button } from "./ui/button";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "대회 소개", href: "/#about" },
  { label: "대회 개요", href: "/#results" },
  { label: "참가 안내", href: "/#join" },
  { label: "대회 규정", href: "/#rules" },
  { label: "문의하기", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    if (location.pathname === targetPath) {
      e.preventDefault();
      smoothScrollToId(hash);
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg-base/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-display flex items-center gap-2.5 text-[20px] font-bold"
        >
          <Logo className="h-[26px] w-[26px] shrink-0" />
          {EVENT.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={handleAnchor(item.href)}
              className="rounded-[2px] px-4 py-2.5 text-[17px] font-medium text-text-secondary transition-colors hover:bg-bg-surface-alt hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/apply">지금 신청하기</Link>
          </Button>
          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[2px] border border-border-strong transition-colors hover:border-defend active:scale-95 md:hidden"
          >
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-4 bg-text-primary transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-page-in border-t border-border bg-bg-base px-6 pb-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={handleAnchor(item.href)}
              className="block border-b border-border py-3.5 text-[17px] font-medium text-text-primary transition-colors hover:text-defend"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full active:scale-[0.97]">
            <Link to="/apply">지금 신청하기</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
