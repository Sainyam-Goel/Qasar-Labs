'use client';

interface Props {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = '' }: Props) {
  const id = `logo-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-label="Qasar Labs logo"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Outer ring (bg circle) */}
      <circle cx="32" cy="32" r="30" fill={`url(#${id}-grad)`} />

      {/* Orbital 1 — tilted ellipse */}
      <ellipse
        cx="32" cy="32" rx="20" ry="9"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(-30 32 32)"
      />

      {/* Orbital 2 — opposite tilt */}
      <ellipse
        cx="32" cy="32" rx="20" ry="9"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(30 32 32)"
      />

      {/* Orbital 3 — vertical-ish */}
      <ellipse
        cx="32" cy="32" rx="20" ry="9"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(90 32 32)"
      />

      {/* Center nucleus — power dot */}
      <circle cx="32" cy="32" r="6" fill={`url(#${id}-accent)`} />
      <circle cx="32" cy="32" r="4" fill="white" opacity="0.9" />

      {/* Lightning bolt in center */}
      <path
        d="M33.5 28 L31 32.5 L33 32.5 L30.5 37 L34 31.5 L32 31.5 Z"
        fill={`url(#${id}-grad)`}
      />

      {/* Electron dots on orbitals */}
      <circle cx="15" cy="22" r="2.5" fill="#0ea5e9" />
      <circle cx="49" cy="42" r="2.5" fill="#0ea5e9" />
      <circle cx="32" cy="12" r="2.5" fill="#38bdf8" />
      <circle cx="32" cy="52" r="2" fill="#38bdf8" opacity="0.7" />
      <circle cx="48" cy="22" r="2" fill="#0ea5e9" opacity="0.7" />
    </svg>
  );
}
