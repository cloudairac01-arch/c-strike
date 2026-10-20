export default function TitleIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ width: "clamp(38px, 6vw, 76px)", height: "clamp(38px, 6vw, 76px)" }}
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="ti-clip">
          <path d="M50,4 L88,20 L88,50 C88,72 70,88 50,94 C30,88 12,72 12,50 L12,20 Z" />
        </clipPath>
        <linearGradient id="ti-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-defend)" />
          <stop offset="48%" stopColor="var(--color-defend-dark)" />
          <stop offset="52%" stopColor="var(--color-attack-dark)" />
          <stop offset="100%" stopColor="var(--color-attack)" />
        </linearGradient>
      </defs>

      <g clipPath="url(#ti-clip)">
        <rect width="100" height="100" fill="url(#ti-grad)" />
      </g>
      <path
        d="M50,4 L88,20 L88,50 C88,72 70,88 50,94 C30,88 12,72 12,50 L12,20 Z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2.5"
      />
      <path d="M50,8 L50,90" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />

      <line x1="50" y1="28" x2="50" y2="72" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M50,33 L70,41 L50,49 Z" fill="white" />
      <circle cx="50" cy="72" r="3.5" fill="white" />
    </svg>
  );
}
