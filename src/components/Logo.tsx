export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <clipPath id="logo-shield-clip">
          <path d="M50,4 L88,20 L88,50 C88,72 70,88 50,94 C30,88 12,72 12,50 L12,20 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-shield-clip)">
        <rect x="0" y="0" width="50" height="100" fill="var(--color-defend)" />
        <rect x="50" y="0" width="50" height="100" fill="var(--color-attack)" />
      </g>
      <path
        d="M50,4 L88,20 L88,50 C88,72 70,88 50,94 C30,88 12,72 12,50 L12,20 Z"
        fill="none"
        stroke="var(--color-bg-base)"
        strokeWidth="3"
      />
      <line x1="41" y1="30" x2="41" y2="70" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M41,35 L63,43 L41,51 Z" fill="white" strokeLinejoin="round" />
      <circle cx="41" cy="70" r="3.2" fill="white" />
    </svg>
  );
}
