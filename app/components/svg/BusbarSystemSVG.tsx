'use client';

export default function BusbarSystemSVG() {
  return (
    <svg viewBox="0 0 340 200" fill="none" className="animate-float w-full max-w-[360px] mx-auto">
      <defs>
        <linearGradient id="bus-housing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="bus-copper" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Segment 1 */}
      <g transform="translate(10, 30)">
        <rect x="0" y="0" width="95" height="55" rx="4" fill="url(#bus-housing)" stroke="#94a3b8" strokeWidth="1" />
        {/* Copper busbars inside */}
        {[0, 1, 2].map((i) => (
          <g key={`s1-${i}`}>
            <rect x="8" y={10 + i * 14} width="79" height="8" rx="1" fill="url(#bus-copper)" />
            {/* Power pulse overlay */}
            <rect
              x="8" y={10 + i * 14} width="25" height="8" rx="1"
              fill="#fbbf24" opacity="0.5"
              className="animate-power-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
        {/* Bolts */}
        <circle cx="6" cy="6" r="3" fill="#64748b" />
        <circle cx="89" cy="6" r="3" fill="#64748b" />
        <circle cx="6" cy="49" r="3" fill="#64748b" />
        <circle cx="89" cy="49" r="3" fill="#64748b" />
      </g>

      {/* Joint 1 */}
      <rect x="103" y="38" width="12" height="40" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
      <circle cx="109" cy="50" r="2" fill="#2563eb" className="animate-pulse-glow" />
      <circle cx="109" cy="66" r="2" fill="#2563eb" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

      {/* Segment 2 */}
      <g transform="translate(115, 30)">
        <rect x="0" y="0" width="95" height="55" rx="4" fill="url(#bus-housing)" stroke="#94a3b8" strokeWidth="1" />
        {[0, 1, 2].map((i) => (
          <g key={`s2-${i}`}>
            <rect x="8" y={10 + i * 14} width="79" height="8" rx="1" fill="url(#bus-copper)" />
            <rect
              x="8" y={10 + i * 14} width="25" height="8" rx="1"
              fill="#fbbf24" opacity="0.5"
              className="animate-power-pulse"
              style={{ animationDelay: `${0.8 + i * 0.3}s` }}
            />
          </g>
        ))}
        <circle cx="6" cy="6" r="3" fill="#64748b" />
        <circle cx="89" cy="6" r="3" fill="#64748b" />
        <circle cx="6" cy="49" r="3" fill="#64748b" />
        <circle cx="89" cy="49" r="3" fill="#64748b" />
      </g>

      {/* Joint 2 */}
      <rect x="208" y="38" width="12" height="40" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.5" />
      <circle cx="214" cy="50" r="2" fill="#2563eb" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <circle cx="214" cy="66" r="2" fill="#2563eb" className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Segment 3 */}
      <g transform="translate(220, 30)">
        <rect x="0" y="0" width="95" height="55" rx="4" fill="url(#bus-housing)" stroke="#94a3b8" strokeWidth="1" />
        {[0, 1, 2].map((i) => (
          <g key={`s3-${i}`}>
            <rect x="8" y={10 + i * 14} width="79" height="8" rx="1" fill="url(#bus-copper)" />
            <rect
              x="8" y={10 + i * 14} width="25" height="8" rx="1"
              fill="#fbbf24" opacity="0.5"
              className="animate-power-pulse"
              style={{ animationDelay: `${1.6 + i * 0.3}s` }}
            />
          </g>
        ))}
        <circle cx="6" cy="6" r="3" fill="#64748b" />
        <circle cx="89" cy="6" r="3" fill="#64748b" />
        <circle cx="6" cy="49" r="3" fill="#64748b" />
        <circle cx="89" cy="49" r="3" fill="#64748b" />
      </g>

      {/* Tap-off unit from segment 2 */}
      <rect x="155" y="85" width="24" height="50" rx="3" fill="url(#bus-housing)" stroke="#94a3b8" strokeWidth="1" />
      <rect x="161" y="92" width="5" height="35" rx="1" fill="url(#bus-copper)" />
      <rect x="168" y="92" width="5" height="35" rx="1" fill="url(#bus-copper)" />
      <text x="167" y="148" textAnchor="middle" fontSize="7" fill="#64748b">TAP-OFF</text>

      {/* Labels */}
      <text x="170" y="18" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
        BUSBAR TRUNKING SYSTEM
      </text>
      <text x="170" y="178" textAnchor="middle" fontSize="7" fill="#94a3b8">
        IP54 • Air Insulated • Modular
      </text>
    </svg>
  );
}
