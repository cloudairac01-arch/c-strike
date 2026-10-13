const LOG_LINES: { time: string; tag?: "EVENT" | "SOLVE" | "SYSTEM" | "SCORE"; text: string }[] = [
  { time: "16:30:00", tag: "EVENT", text: "등록 시작 — 제이드홀 2층" },
  { time: "17:30:00", tag: "EVENT", text: "오프닝" },
  { time: "19:00:00", tag: "SYSTEM", text: "경진 대회 규칙 안내 — 해커톤 운영사" },
  { time: "19:20:00", tag: "SYSTEM", text: "경진 대회 시작 (14h)" },
  { time: "19:42:11", tag: "SOLVE", text: "team_03 REGIONAL-01 FLAG_ACCEPTED" },
  { time: "23:40:51", tag: "SYSTEM", text: "야식 제공" },
  { time: "02:05:18", tag: "SOLVE", text: "team_01 Q-04 FLAG_ACCEPTED" },
  { time: "02:05:49", tag: "SCORE", text: "team_01 4,120 · team_03 3,870" },
];

const TAG_CLASS: Record<string, string> = {
  EVENT: "text-defend font-bold",
  SOLVE: "text-attack font-bold",
  SYSTEM: "text-text-muted",
  SCORE: "text-text-muted",
};

function LogLines() {
  return (
    <>
      {LOG_LINES.map((line, i) => (
        <div key={i} className="whitespace-nowrap">
          <span className="mr-2.5 text-text-muted">{line.time}</span>
          {line.tag && <span className={TAG_CLASS[line.tag]}>{line.tag}</span>} {line.text}
        </div>
      ))}
    </>
  );
}

export default function TerminalLog() {
  return (
    <div className="reveal flex h-full min-h-[280px] flex-col overflow-hidden rounded-[3px] border border-border-strong bg-gradient-to-b from-bg-card to-bg-surface shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_30px_70px_-30px_rgba(0,0,0,0.85)]">
      <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="h-[9px] w-[9px] rounded-full bg-bg-surface-alt" />
        <span className="ml-2 font-mono text-[12.5px] text-text-muted">live · match.log</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-4 py-4 font-mono text-[13.5px] leading-[2.1] text-text-secondary">
        <div className="log-scroll">
          <LogLines />
          <LogLines />
        </div>
      </div>
    </div>
  );
}
