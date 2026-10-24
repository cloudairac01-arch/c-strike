import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubpageHero from "../components/SubpageHero";
import { RULEBOOK, type RuleBlock } from "../data/rules";
import { smoothScrollToId } from "../lib/scrollTo";
import { Button } from "@/components/ui/button";

function Block({ block }: { block: RuleBlock }) {
  if (block.type === "p") {
    return <p className="text-[16.5px] leading-relaxed text-text-secondary">{block.text}</p>;
  }
  if (block.type === "table") {
    return (
      <div className="relative w-full overflow-x-auto rounded-[2px] border border-border">
        <table className="w-full text-[15.5px]">
          <thead className="bg-bg-surface-alt">
            <tr className="border-b border-border-strong">
              {block.head.map((h) => (
                <th key={h} className="px-4 py-2.5 text-left font-mono text-[14px] font-bold tracking-wide text-defend">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((r, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                {r.map((c, j) => (
                  <td key={j} className={`px-4 py-2.5 leading-6 ${j === 0 ? "whitespace-nowrap font-semibold text-text-primary" : "text-text-secondary"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  const start = block.start ?? 1;
  return (
    <ol className="flex flex-col gap-2">
      {block.items.map((it, n) => {
        const text = typeof it === "string" ? it : it.text;
        const sub = typeof it === "string" ? null : it.sub;
        return (
          <li key={n} className="flex gap-2.5 text-[16.5px] leading-relaxed text-text-secondary">
            <span className="shrink-0 font-mono font-bold text-defend">{start + n}.</span>
            <div className="flex flex-col gap-1.5">
              <span>{text}</span>
              {sub && (
                <ol className="mt-0.5 flex flex-col gap-1 pl-1">
                  {sub.map((s, k) => (
                    <li key={s} className="flex gap-2 text-[16px] text-text-secondary">
                      <span className="shrink-0 font-mono text-text-muted">{k + 1})</span>
                      {s}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Rules() {
  const [active, setActive] = useState(RULEBOOK.chapters[0].id);

  useEffect(() => {
    const els = RULEBOOK.chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToId(id);
  };

  return (
    <>
      <SubpageHero eyebrow="대회 규정" title={RULEBOOK.title} desc={RULEBOOK.intro} descClassName="max-w-none">
        <p className="mt-5 font-mono text-[14px] text-text-muted">
          시행 {RULEBOOK.effective} · 최종 수정 {RULEBOOK.updated} · 총 {RULEBOOK.chapters.length}장{" "}
          {RULEBOOK.chapters.reduce((n, c) => n + c.articles.length, 0)}조
        </p>
      </SubpageHero>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-[240px_1fr] lg:gap-14">
          {/* 목차 */}
          <aside className="lg:sticky lg:top-[92px] lg:self-start">
            <div className="mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-text-muted">목차</div>
            <nav className="flex flex-col border-l border-border">
              {RULEBOOK.chapters.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  onClick={jump(c.id)}
                  className={`-ml-px border-l-2 py-2 pl-4 text-[15.5px] transition-colors ${
                    active === c.id ? "border-defend font-semibold text-text-primary" : "border-transparent text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="mr-2 font-mono text-[13px] text-text-muted">제{c.no}장</span>
                  {c.title}
                </a>
              ))}
            </nav>
            <div className="mt-6 hidden lg:block">
              <Button asChild size="sm" className="w-full">
                <Link to="/apply">지금 신청하기</Link>
              </Button>
            </div>
          </aside>

          {/* 본문 */}
          <div className="flex flex-col gap-10">
            {RULEBOOK.chapters.map((c) => (
              <section key={c.id} id={c.id} className="scroll-mt-[92px]">
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-[15px] font-bold tracking-[0.1em] text-defend">제{c.no}장</span>
                  <h2 className="font-display text-[24px] font-bold text-text-primary">{c.title}</h2>
                </div>
                <div className="hud rounded-[3px] border border-border bg-bg-card px-6 py-2 sm:px-8">
                  <div className="flex flex-col divide-y divide-border">
                    {c.articles.map((a) => (
                      <article key={a.no} id={`art${a.no}`} className="flex flex-col gap-3 py-7">
                        <h3 className="text-[19px] font-bold text-text-primary">
                          제{a.no}조 ({a.title})
                        </h3>
                        {a.body.map((b, i) => (
                          <Block key={i} block={b} />
                        ))}
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <p className="border-t border-dashed border-border pt-5 text-[15px] text-text-muted">
              본 규정에 관한 문의는 대회 홈페이지의{" "}
              <Link to="/#contact" className="text-defend underline-offset-4 hover:underline">
                문의하기
              </Link>
              를 통해 운영사(클라우드에어 주식회사)에 접수해 주세요.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
