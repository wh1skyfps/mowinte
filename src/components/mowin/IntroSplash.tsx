import { useState, useEffect } from "react";
import logoImg from "@/assets/logo-mowin.jpg";

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0); // 0=scanning, 1=text, 2=fade-out
  const titleWords = ["Dominamos", "o", "Digital"];
  const subtitle = "Posicionamento premium para empresas ambiciosas.";

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 3200);
    const t3 = setTimeout(() => onComplete(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-m-black flex items-center justify-center transition-opacity duration-700 ${
        phase === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-m-gold to-transparent opacity-80" />
        <div className="scan-line-glow absolute left-0 right-0 h-16 bg-gradient-to-r from-transparent via-m-gold/10 to-transparent blur-xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-m-gold/[0.04] rounded-full blur-[150px] animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-700 ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <img
            src={logoImg}
            alt="Mowin"
            className="w-16 h-16 rounded-full mx-auto ring-2 ring-m-gold/30 shadow-[0_0_40px_rgba(200,169,106,0.2)]"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
          <span className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 flex-wrap">
            {titleWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block text-m-cream transition-all duration-500 ${
                  phase >= 1
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-8 blur-sm"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                {word === "Digital" ? (
                  <span className="text-m-gold gold-text-glow">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-sm sm:text-base md:text-lg text-m-cream/50 font-medium tracking-wide transition-all duration-700 ${
            phase >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {subtitle}
        </p>

        {/* Scroll hint */}
        <div
          className={`mt-12 flex flex-col items-center gap-2 transition-all duration-500 ${
            phase >= 1 ? "opacity-60" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <span className="text-m-cream/40 text-[11px] tracking-[0.2em] uppercase font-medium">
            Role para explorar
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            className="text-m-gold animate-bounce"
          >
            <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes scan-move {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .scan-line, .scan-line-glow {
          animation: scan-move 2s ease-in-out infinite;
        }
        .scan-line-glow {
          animation-delay: 0s;
        }
      `}</style>
    </div>
  );
}
