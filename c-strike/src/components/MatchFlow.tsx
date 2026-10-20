import { MATCH_FLOW, VULN_RELEASE_HOURS } from "../data/content";
import { Server, Trophy } from "lucide-react";

export default function MatchFlow() {
  return (
    <div className="hud reveal rounded-[3px] border border-border bg-bg-card px-5 py-10 sm:px-10">
      {/* one simple line: 등록·오프닝 -> 시상식, 경진 대회 구간이 그 사이 전체임을 색으로만 표시 */}
      <div className="relative flex items-start justify-between">
        <div
          className="absolute left-9 right-9 top-[18px] h-[3px] -translate-y-1/2 rounded-full sm:left-[46px] sm:right-[46px] sm:top-[20px]"
          style={{ background: "linear-gradient(90deg, var(--color-defend), var(--color-attack))" }}
        />

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-defend bg-bg-card text-defend sm:h-10 sm:w-10">
            <Server className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </span>
          <span className="text-[14.5px] font-bold leading-tight text-text-primary sm:text-[16px]">
            {MATCH_FLOW.before.title}
          </span>
        </div>

        {/* 경진 대회 경과 시간 — 타임라인 위에 작은 h 눈금으로 표시 */}
        <div className="relative z-10 flex flex-1 items-start justify-around px-1.5 pt-[13px] sm:px-3 sm:pt-[15px]">
          {VULN_RELEASE_HOURS.map((h) => (
            <div key={h} className="flex flex-col items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-defend bg-bg-card" />
              <span className="font-mono text-[13px] font-bold text-defend sm:text-[13.5px]">{h}h</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex w-[86px] shrink-0 flex-col items-center gap-2.5 text-center sm:w-[120px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-attack bg-attack text-white sm:h-10 sm:w-10">
            <Trophy className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </span>
          <span className="text-[14.5px] font-bold leading-tight text-text-primary sm:text-[16px]">
            {MATCH_FLOW.after.title}
          </span>
        </div>
      </div>
      <p className="mt-2 text-center font-mono text-[14px] uppercase tracking-wide text-text-secondary">
        경진 대회 경과 시간 (총 14시간)
      </p>

      <p className="mx-auto mt-8 max-w-[520px] text-center text-[17px] leading-relaxed text-text-secondary">
        추후 제공 예정입니다.
      </p>
    </div>
  );
}
