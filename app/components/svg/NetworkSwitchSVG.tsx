'use client';

export default function NetworkSwitchSVG() {
  return (
    <svg viewBox="0 0 340 220" fill="none" className="animate-float w-full max-w-[360px] mx-auto">
      <defs>
        <linearGradient id="switch-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>

      {/* Switch body */}
      <rect x="80" y="70" width="180" height="80" rx="6" fill="url(#switch-body)" stroke="#4b5563" strokeWidth="1" />

      {/* Ventilation lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="90" y1={80 + i * 8} x2="250" y2={80 + i * 8} stroke="#4b5563" strokeWidth="0.5" />
      ))}

      {/* Port row 1 */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`p1-${i}`}>
          <rect x={100 + i * 35} y="115" width="20" height="12" rx="2" fill="#111827" stroke="#4b5563" strokeWidth="0.5" />
          {/* LED */}
          <circle
            cx={110 + i * 35} cy="113"
            r="2"
            fill="#22c55e"
            className="animate-led-blink"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}

      {/* Port row 2 */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`p2-${i}`}>
          <rect x={100 + i * 35} y="132" width="20" height="12" rx="2" fill="#111827" stroke="#4b5563" strokeWidth="0.5" />
          <circle
            cx={110 + i * 35} cy="130"
            r="2"
            fill="#22c55e"
            className="animate-led-blink"
            style={{ animationDelay: `${0.15 + i * 0.3}s` }}
          />
        </g>
      ))}

      {/* Power LED */}
      <circle cx="92" cy="140" r="3" fill="#2563eb" className="animate-pulse-glow" />
      <text x="92" y="148" textAnchor="middle" fontSize="5" fill="#94a3b8">PWR</text>

      {/* Fiber connections to substations */}
      {/* Left substation */}
      <rect x="10" y="90" width="40" height="40" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="18" y="96" width="24" height="4" rx="1" fill="#1e3a5f" />
      <rect x="22" y="104" width="16" height="18" rx="1" fill="#cbd5e1" />
      <text x="30" y="130" textAnchor="middle" fontSize="6" fill="#64748b">SUB-1</text>
      {/* Connection line */}
      <line x1="50" y1="110" x2="100" y2="121" stroke="#0ea5e9" strokeWidth="1.5" />
      {/* Data packet */}
      <circle cx="75" cy="115" r="3" fill="#0ea5e9" className="animate-data-flow" />

      {/* Right substation */}
      <rect x="290" y="90" width="40" height="40" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="298" y="96" width="24" height="4" rx="1" fill="#1e3a5f" />
      <rect x="302" y="104" width="16" height="18" rx="1" fill="#cbd5e1" />
      <text x="310" y="130" textAnchor="middle" fontSize="6" fill="#64748b">SUB-2</text>
      <line x1="260" y1="121" x2="290" y2="110" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="275" cy="115" r="3" fill="#0ea5e9" className="animate-data-flow" style={{ animationDelay: '0.6s' }} />

      {/* Top substation */}
      <rect x="140" y="10" width="60" height="35" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="150" y="16" width="40" height="4" rx="1" fill="#1e3a5f" />
      <rect x="155" y="24" width="30" height="14" rx="1" fill="#cbd5e1" />
      <text x="170" y="52" textAnchor="middle" fontSize="6" fill="#64748b">CONTROL</text>
      <line x1="170" y1="45" x2="170" y2="70" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="170" cy="57" r="3" fill="#0ea5e9" className="animate-data-flow" style={{ animationDelay: '1.2s' }} />

      {/* Protocol labels */}
      <text x="65" y="108" textAnchor="middle" fontSize="6" fill="#0ea5e9" opacity="0.7">GOOSE</text>
      <text x="280" y="108" textAnchor="middle" fontSize="6" fill="#0ea5e9" opacity="0.7">MMS</text>

      {/* Switch label */}
      <text x="170" y="168" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
        IEC 61850 SWITCH
      </text>
      <text x="170" y="182" textAnchor="middle" fontSize="7" fill="#94a3b8">
        Ruggedized • Fiber Optic • CEA Priority
      </text>
    </svg>
  );
}
