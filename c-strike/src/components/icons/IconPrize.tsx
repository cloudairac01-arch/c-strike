export default function IconPrize({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id="prize-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-defend)" />
          <stop offset="100%" stopColor="var(--color-attack)" />
        </linearGradient>
      </defs>
      <path d="M20 10h24v14c0 8-5.4 14-12 14s-12-6-12-14z" fill="url(#prize-grad)" stroke="url(#prize-grad)" strokeWidth="3" />
      <path d="M20 14h-6c0 7 3 11 8 12" stroke="url(#prize-grad)" strokeWidth="3" />
      <path d="M44 14h6c0 7-3 11-8 12" stroke="url(#prize-grad)" strokeWidth="3" />
      <path d="M32 38v8" stroke="url(#prize-grad)" strokeWidth="3" />
      <path d="M22 50h20v4H22z" fill="url(#prize-grad)" stroke="url(#prize-grad)" strokeWidth="2" />
      <path d="M28 46h8" stroke="url(#prize-grad)" strokeWidth="3" />
      <path d="M32 16l2 4 4.4.6-3.2 3 .8 4.4-4-2.2-4 2.2.8-4.4-3.2-3 4.4-.6z" fill="#ffffff" />
    </svg>
  );
}
