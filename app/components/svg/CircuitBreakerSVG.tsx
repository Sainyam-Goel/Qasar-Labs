'use client';

export default function CircuitBreakerSVG() {
  return (
    <svg viewBox="0 0 220 280" fill="none" className="animate-float w-full max-w-[240px] mx-auto">
      <defs>
        <linearGradient id="panel-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Panel cabinet */}
      <rect x="25" y="15" width="170" height="240" rx="8" fill="url(#panel-grad)" />
      <rect x="30" y="20" width="160" height="230" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />

      {/* Panel door outline */}
      <rect x="40" y="50" width="140" height="175" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.5" />

      {/* Phase indicators R Y B */}
      <circle cx="80" cy="35" r="5" fill="#ef4444" opacity="0.9" />
      <circle cx="110" cy="35" r="5" fill="#eab308" opacity="0.9" />
      <circle cx="140" cy="35" r="5" fill="#3b82f6" opacity="0.9" />

      {/* Status LED */}
      <circle cx="170" cy="35" r="4" fill="#22c55e" className="animate-led-blink" />

      {/* VCB mechanism housing */}
      <rect x="60" y="80" width="100" height="60" rx="4" fill="#1e3a5f" stroke="#475569" strokeWidth="0.5" />

      {/* Breaker contacts */}
      <rect x="85" y="90" width="8" height="20" rx="1" fill="#94a3b8" />
      <rect x="127" y="90" width="8" height="20" rx="1" fill="#94a3b8" />

      {/* Electrical arc between contacts */}
      <path
        d="M93 100 L100 97 L97 103 L104 100 L108 97 L112 103 L116 99 L120 103 L127 100"
        stroke="#38bdf8"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="animate-arc"
      />
      {/* Arc glow */}
      <path
        d="M93 100 L100 97 L97 103 L104 100 L108 97 L112 103 L116 99 L120 103 L127 100"
        stroke="#38bdf8"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.2"
        className="animate-arc"
      />

      {/* Meter display */}
      <rect x="70" y="155" width="80" height="30" rx="3" fill="#0f2440" stroke="#334155" strokeWidth="0.5" />
      <text x="110" y="174" textAnchor="middle" fontSize="12" fill="#22c55e" fontFamily="monospace">
        11.0 kV
      </text>

      {/* Handle */}
      <rect x="100" y="195" width="20" height="25" rx="3" fill="#475569" />
      <rect x="105" y="198" width="10" height="6" rx="1" fill="#64748b" />

      {/* Ventilation slots */}
      {[0, 1, 2].map((i) => (
        <line key={i} x1="55" y1={235 + i * 5} x2="165" y2={235 + i * 5} stroke="#334155" strokeWidth="0.5" />
      ))}

      {/* Label */}
      <text x="110" y="270" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">
        11kV VCB PANEL
      </text>
    </svg>
  );
}
