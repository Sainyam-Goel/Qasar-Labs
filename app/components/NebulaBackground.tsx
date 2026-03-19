'use client';

export default function NebulaBackground() {
  return (
    <>
      <style>{`
        @keyframes nebula-drift-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.45; }
          40%       { transform: translate(4%, -3%) scale(1.06); opacity: 0.55; }
          70%       { transform: translate(-3%, 4%) scale(0.96); opacity: 0.40; }
        }
        @keyframes nebula-drift-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.50; }
          35%       { transform: translate(-4%, 3%) scale(0.94); opacity: 0.40; }
          65%       { transform: translate(3%, -4%) scale(1.05); opacity: 0.58; }
        }
        @keyframes nebula-drift-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.35; }
          50%       { transform: translate(3%, 3%) scale(1.04); opacity: 0.45; }
        }
        @keyframes stars-twinkle {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 0.9; }
        }
        .nebula-blob-1 { animation: nebula-drift-1 20s ease-in-out infinite; }
        .nebula-blob-2 { animation: nebula-drift-2 26s ease-in-out infinite; }
        .nebula-blob-3 { animation: nebula-drift-3 32s ease-in-out infinite; }
        .nebula-stars  { animation: stars-twinkle 6s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black">
        {/* Sky-blue blob */}
        <div
          className="nebula-blob-1 absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 28% 42%, rgba(14,165,233,0.48) 0%, transparent 68%)',
          }}
        />
        {/* Violet blob */}
        <div
          className="nebula-blob-2 absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 80% at 72% 62%, rgba(168,85,247,0.55) 0%, transparent 65%)',
          }}
        />
        {/* Rose bloom */}
        <div
          className="nebula-blob-3 absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 52% 18%, rgba(251,113,133,0.40) 0%, transparent 68%)',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)',
          }}
        />
        {/* Stars */}
        <div
          className="nebula-stars absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 15% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.5) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 58% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 88% 14%, rgba(255,255,255,0.7) 0%, transparent 100%),' +
              'radial-gradient(1.5px 1.5px at 44% 72%, rgba(255,255,255,0.5) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 63% 48%, rgba(255,255,255,0.6) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 91% 61%, rgba(255,255,255,0.4) 0%, transparent 100%),' +
              'radial-gradient(1.5px 1.5px at 22% 88%, rgba(255,255,255,0.5) 0%, transparent 100%),' +
              'radial-gradient(1px 1px at 79% 38%, rgba(255,255,255,0.6) 0%, transparent 100%)',
          }}
        />
      </div>
    </>
  );
}
