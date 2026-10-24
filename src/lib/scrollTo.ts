// 부드러운 스크롤 — 직접 구현한 이유
//
// 브라우저는 OS의 "애니메이션 효과 끄기"(prefers-reduced-motion) 설정이 켜져 있으면
// CSS의 `scroll-behavior: smooth` 와 `scrollIntoView({ behavior: "smooth" })` 를
// 규격상 무시하고 즉시 이동시킵니다. 그래서 일부 PC에서만 스크롤 이동이
// 뚝 끊기는 현상이 생깁니다.
//
// requestAnimationFrame 으로 직접 움직이면 그 설정과 무관하게 모든 PC에서
// 동일하게 동작합니다. 각 프레임의 이동은 `behavior: "instant"` 로 지정해
// CSS 스무스 스크롤과 충돌하지 않게 합니다.

/** 고정 헤더(Navbar) 높이 */
export const HEADER_OFFSET = 68;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** 현재 위치에서 targetY 까지 부드럽게 이동 */
export function smoothScrollToY(targetY: number, duration = 600): void {
  const startY = window.scrollY;
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const endY = Math.max(0, Math.min(targetY, maxY));
  const delta = endY - startY;

  if (Math.abs(delta) < 2) return;

  const start = performance.now();

  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    window.scrollTo({ top: startY + delta * easeInOutCubic(p), behavior: "instant" });
    if (p < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

/** id 를 가진 섹션 상단으로 부드럽게 이동 (헤더 높이만큼 보정) */
export function smoothScrollToId(id: string, offset = HEADER_OFFSET): void {
  const el = document.getElementById(id);
  if (!el) return;
  smoothScrollToY(el.getBoundingClientRect().top + window.scrollY - offset);
}
