'use client';

interface Step {
  label: string;
}

interface Props {
  steps: Step[];
}

export default function ProcessFlow({ steps }: Props) {
  return (
    <div className="mt-8 overflow-x-auto">
      <div className="flex items-center gap-0 min-w-max md:min-w-0 md:justify-between">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            {/* Step node */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-white shadow-sm">
                <span className="text-xs font-bold text-navy">{i + 1}</span>
              </div>
              <span className="w-20 text-center text-[11px] leading-tight text-slate-500">
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <svg
                className="mx-1 flex-shrink-0"
                width="40"
                height="8"
                viewBox="0 0 40 8"
              >
                <line
                  x1="0" y1="4" x2="32" y2="4"
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  className="animate-flow"
                />
                <polygon
                  points="32,0 40,4 32,8"
                  fill="#1e3a5f"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
