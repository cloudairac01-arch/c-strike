import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { useReveal } from "../hooks/useReveal";

export default function Layout() {
  useReveal();
  const { pathname, hash } = useLocation();

  // 페이지 전환 시 맨 위로 (해시 이동은 각 페이지에서 처리)
  useLayoutEffect(() => {
    if (hash) return;
    const el = document.documentElement;
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    el.style.scrollBehavior = prev;
  }, [pathname, hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollProgress />
      <main key={pathname} className="animate-page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
