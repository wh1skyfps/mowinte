import { useReveal } from "./useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative bg-m-surface py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-m-gold/15 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-m-gold/[0.025] rounded-full blur-[200px] animate-glow-pulse" />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-m-cream leading-[1.15] text-balance transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Ou você continua igual…
          <br />
          <span className="text-m-gold gold-text-glow">ou começa a jogar em outro nível.</span>
        </h2>

        <p className={`mt-8 text-base text-m-cream/35 max-w-xl mx-auto leading-relaxed text-pretty transition-all duration-700 delay-[100ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          A Mowin cria presença, desejo e posicionamento para negócios que querem vender mais no digital.
        </p>

        <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="#contato" className="group bg-m-gold text-m-black px-10 py-4.5 rounded-xl font-bold text-base hover:bg-m-gold-light transition-all duration-300 active:scale-[0.97] shadow-[0_8px_50px_rgba(200,169,106,0.3)] flex items-center justify-center gap-2.5">
            Quero crescer de verdade
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener" className="border border-m-gold/20 text-m-gold px-10 py-4.5 rounded-xl font-semibold text-base hover:bg-m-gold/5 hover:border-m-gold/30 transition-all duration-300 active:scale-[0.97] text-center">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
