import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
      el.style.transform = `scaleX(${pct})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-16 z-[90] h-[2px] bg-transparent">
      <div id="scroll-progress" ref={barRef} className="h-full w-full origin-left scale-x-0 bg-attack" />
    </div>
  );
}
