const NODES = [
  { id: "srv1", x: 40, y: 60, r: 5, role: "neutral" },
  { id: "srv2", x: 150, y: 30, r: 4, role: "neutral" },
  { id: "srv3", x: 250, y: 90, r: 4, role: "neutral" },
  { id: "atk1", x: 60, y: 190, r: 7, role: "attack" },
  { id: "def1", x: 320, y: 210, r: 7, role: "defend" },
  { id: "srv4", x: 190, y: 160, r: 4.5, role: "neutral" },
  { id: "srv5", x: 350, y: 60, r: 4, role: "neutral" },
  { id: "atk2", x: 130, y: 280, r: 5.5, role: "attack" },
  { id: "def2", x: 250, y: 300, r: 5.5, role: "defend" },
  { id: "srv6", x: 30, y: 340, r: 4, role: "neutral" },
  { id: "srv7", x: 370, y: 320, r: 4, role: "neutral" },
] as const;

const LINKS: [string, string][] = [
  ["srv1", "srv2"],
  ["srv2", "srv3"],
  ["srv2", "srv4"],
  ["srv3", "srv5"],
  ["srv4", "def1"],
  ["srv1", "atk1"],
  ["atk1", "srv4"],
  ["atk1", "atk2"],
  ["atk2", "def2"],
  ["def2", "def1"],
  ["srv6", "atk2"],
  ["def1", "srv7"],
];

const PATHS: [string, string, "attack" | "defend"][] = [
  ["atk1", "srv4", "attack"],
  ["srv4", "def1", "attack"],
  ["def2", "atk2", "defend"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

const roleColor: Record<string, string> = {
  neutral: "var(--color-border-strong)",
  attack: "var(--color-attack)",
  defend: "var(--color-defend)",
};

export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 400 380"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hv-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="55%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="hv-mask">
          <rect width="400" height="380" fill="url(#hv-fade)" />
        </mask>
      </defs>

      <g mask="url(#hv-mask)" opacity="0.55">
        {LINKS.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={byId[a].x}
            y1={byId[a].y}
            x2={byId[b].x}
            y2={byId[b].y}
            stroke="var(--color-border-strong)"
            strokeWidth="1"
          />
        ))}

        {PATHS.map(([a, b, role], i) => (
          <line
            key={`path-${a}-${b}`}
            className="hv-path"
            x1={byId[a].x}
            y1={byId[a].y}
            x2={byId[b].x}
            y2={byId[b].y}
            stroke={roleColor[role]}
            strokeWidth="2"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.r + 5} fill={roleColor[n.role]} opacity="0.08" />
            <circle
              className={n.role !== "neutral" ? "hv-node" : undefined}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.role === "neutral" ? "var(--color-bg-surface-alt)" : roleColor[n.role]}
              stroke={roleColor[n.role]}
              strokeWidth="1.5"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
