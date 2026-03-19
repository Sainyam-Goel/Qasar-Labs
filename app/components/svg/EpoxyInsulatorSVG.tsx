'use client';

export default function EpoxyInsulatorSVG() {
  return (
    <svg viewBox="0 0 200 280" fill="none" className="animate-float w-full max-w-[240px] mx-auto">
      {/* Outer shell with ribs */}
      <defs>
        <linearGradient id="shell-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#2a5080" />
        </linearGradient>
        <linearGradient id="conductor-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="resin-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Base plate */}
      <rect x="55" y="245" width="90" height="12" rx="3" fill="#94a3b8" />
      <rect x="60" y="250" width="80" height="8" rx="2" fill="#64748b" />

      {/* Main body */}
      <path
        d="M65 245 L60 50 Q60 35 75 30 L125 30 Q140 35 140 50 L135 245 Z"
        fill="url(#shell-grad)"
        opacity="0.9"
      />

      {/* Ribbed fins */}
      {[70, 105, 140, 175, 210].map((y, i) => (
        <ellipse
          key={i}
          cx="100"
          cy={y}
          rx={42 - i * 2}
          ry="8"
          fill="#1e3a5f"
          opacity="0.7"
          stroke="#2a5080"
          strokeWidth="0.5"
        />
      ))}

      {/* Inner resin fill */}
      <rect x="82" y="40" width="36" height="200" rx="8" fill="url(#resin-grad)" />

      {/* Central conductor */}
      <rect x="94" y="20" width="12" height="235" rx="3" fill="url(#conductor-grad)" />

      {/* Conductor glow */}
      <rect
        x="94" y="20" width="12" height="235" rx="3"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1"
        opacity="0.4"
        className="animate-pulse-glow"
      />

      {/* Resin flow particles */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={90 + i * 10}
          cy="60"
          r="2.5"
          fill="#f59e0b"
          opacity="0.7"
          className="animate-resin-drip"
          style={{ animationDelay: `${i * 0.8}s` }}
        />
      ))}

      {/* Top cap */}
      <rect x="85" y="20" width="30" height="10" rx="3" fill="#64748b" />
      <rect x="88" y="15" width="24" height="8" rx="2" fill="#94a3b8" />

      {/* HV indicator */}
      <text x="100" y="275" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">
        HV INSULATOR
      </text>
    </svg>
  );
}
