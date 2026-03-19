'use client';

interface Step {
  label: string;
}

interface Props {
  steps: Step[];
}

export default function ProcessFlow({ steps }: Props) {
  return (
    <div className="mt-10 flex justify-center overflow-x-auto">
      <div className="flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            {/* Step node */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy/70 dark:border-slate-500 bg-white dark:bg-slate-800 shadow-sm">
                <span className="text-xs font-bold text-navy dark:text-slate-200">{i + 1}</span>
              </div>
              <span className="w-[72px] text-center text-[11px] leading-tight text-slate-500 dark:text-slate-400">
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <svg
                className="mx-0.5 mt-[12px] flex-shrink-0 text-navy dark:text-slate-400"
                width="36"
                height="8"
                viewBox="0 0 36 8"
              >
                <line
                  x1="0" y1="4" x2="28" y2="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="animate-flow"
                />
                <polygon
                  points="28,1 36,4 28,7"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
