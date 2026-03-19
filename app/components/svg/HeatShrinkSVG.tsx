'use client';

export default function HeatShrinkSVG() {
  return (
    <svg viewBox="0 0 300 180" fill="none" className="animate-float w-full max-w-[320px] mx-auto">
      <defs>
        <linearGradient id="copper-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="tube-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Busbar / conductor */}
      <rect x="30" y="78" width="240" height="24" rx="4" fill="url(#copper-grad)" />
      <rect x="30" y="78" width="240" height="6" rx="2" fill="#fbbf24" opacity="0.3" />

      {/* Heat shrink tube — animated */}
      <rect
        x="70" y="65" width="160" height="50" rx="10"
        fill="url(#tube-grad)"
        className="animate-shrink"
        style={{ transformOrigin: '150px 90px' }}
      />
      {/* Tube highlight */}
      <rect
        x="70" y="65" width="160" height="12" rx="6"
        fill="white"
        opacity="0.15"
        className="animate-shrink"
        style={{ transformOrigin: '150px 90px' }}
      />

      {/* Heat waves */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${100 + i * 40} 52 Q${110 + i * 40} 42 ${120 + i * 40} 52`}
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-heat-wave"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Heat arrows pointing down */}
      {[0, 1, 2].map((i) => (
        <g key={`arrow-${i}`} className="animate-heat-wave" style={{ animationDelay: `${i * 0.4 + 0.2}s` }}>
          <line
            x1={110 + i * 40} y1="38" x2={110 + i * 40} y2="48"
            stroke="#ef4444" strokeWidth="1.5" opacity="0.5"
          />
          <polygon
            points={`${106 + i * 40},45 ${110 + i * 40},52 ${114 + i * 40},45`}
            fill="#ef4444" opacity="0.5"
          />
        </g>
      ))}

      {/* End caps */}
      <rect x="60" y="72" width="12" height="36" rx="3" fill="#475569" />
      <rect x="228" y="72" width="12" height="36" rx="3" fill="#475569" />

      {/* Labels */}
      <text x="150" y="145" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
        HEAT SHRINK INSULATION
      </text>
      <text x="40" y="140" textAnchor="middle" fontSize="7" fill="#94a3b8">
        25kV
      </text>
      <text x="260" y="140" textAnchor="middle" fontSize="7" fill="#94a3b8">
        25kV
      </text>
    </svg>
  );
}
