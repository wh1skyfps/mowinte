import { useReveal } from "./useScrollReveal";
import { Zap } from "lucide-react";
import beforeImg from "@/assets/portfolio-before-1.png";
import afterImg from "@/assets/portfolio-after-1.jpg";

const showcases = [
  { before: beforeImg, after: afterImg, label: "Design para redes sociais" },
];

export default function TurningPointSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-black py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-m-gold/[0.02] rounded-full blur-[200px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-m-gold/[0.06] border border-m-gold/10 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-m-gold" />
            <span className="text-m-gold/80 text-[11px] font-semibold tracking-[0.15em] uppercase">A solução</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-m-cream leading-[1.1] text-balance">
            É aqui que a <span className="text-m-gold gold-text-glow">Mowin</span> entra.
          </h2>
        </div>

        <div className="space-y-16">
          {showcases.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-center text-[13px] font-semibold tracking-[0.2em] uppercase text-m-gold/50 mb-8">
                {item.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                {/* Before */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10 bg-m-black/70 backdrop-blur-sm border border-red-500/15 rounded-lg px-3 py-1.5">
                    <span className="text-red-400/80 text-[11px] font-bold tracking-[0.15em] uppercase">Antes</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/5 bg-white">
                    <img src={item.before} alt="Antes" className="w-full aspect-[4/5] object-contain" />
                  </div>
                </div>

                {/* After */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 z-10 bg-m-black/70 backdrop-blur-sm border border-m-gold/20 rounded-lg px-3 py-1.5">
                    <span className="text-m-gold text-[11px] font-bold tracking-[0.15em] uppercase">Depois</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-m-gold/10 group-hover:border-m-gold/25 transition-all duration-500">
                    <img src={item.after} alt="Depois" className="w-full aspect-[4/5] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
