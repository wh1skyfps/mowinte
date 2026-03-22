import { useReveal } from "./useScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo-mowin.jpg";
import logoClient1 from "@/assets/logo-client-1.png";
import logoClient2 from "@/assets/logo-client-2.png";
import logoClient3 from "@/assets/logo-client-3.png";
import logoClient4 from "@/assets/logo-client-4.png";
import { ArrowRight, Star } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Globe from "@/components/ui/globe";

export default function HeroSection() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-m-black">
      {/* Animated background paths */}
      <BackgroundPaths />

      {/* Ambient glows */}
      <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-m-gold/[0.03] rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-m-gold/[0.02] rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Micro badge */}
            <div className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2.5 bg-m-gold/[0.06] border border-m-gold/10 rounded-full px-4 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-m-gold animate-glow-pulse" />
                <span className="text-m-gold/80 text-[11px] font-semibold tracking-[0.2em] uppercase">Posicionamento digital premium</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className={`text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-m-cream leading-[1.08] tracking-[-0.02em] text-balance transition-all duration-700 delay-[100ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Sua empresa não precisa de mais clientes.
              <br />
              <span className="text-m-gold gold-text-glow">Precisa parecer maior do que realmente é.</span>
            </h1>

            {/* Sub */}
            <p className={`mt-8 text-base lg:text-lg text-m-cream/40 max-w-xl leading-relaxed text-pretty transition-all duration-700 delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Criamos presença, autoridade e estrutura digital para transformar sua empresa em uma máquina de vendas.
            </p>

            {/* CTAs */}
            <div className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[300ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a href="#contato" className="group bg-m-gold text-m-black px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-m-gold-light transition-all duration-300 active:scale-[0.97] text-center shadow-[0_8px_40px_rgba(200,169,106,0.25)] flex items-center justify-center gap-2.5">
                Quero dominar meu mercado
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#processo" className="text-m-cream/50 px-8 py-4 rounded-xl font-medium text-[15px] hover:text-m-gold transition-colors duration-300 text-center">
                Ver como funciona
              </a>
            </div>

            {/* Social proof */}
            <div className={`mt-14 flex items-center gap-6 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex -space-x-1.5">
                {[logoClient1, logoClient2, logoClient3, logoClient4].map((logo, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-m-gold/20 overflow-hidden shadow-lg shadow-black/30">
                    <img src={logo} alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 text-m-gold fill-m-gold" />
                  ))}
                </div>
                <p className="text-m-cream/30 text-[11px] font-medium">Empresas que já subiram de nível</p>
              </div>
            </div>
          </div>

          {/* Right globe */}
          <div className={`hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center relative transition-all duration-1000 delay-[500ms] ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="animate-float-slow">
              <Globe />
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-m-surface to-transparent" />
    </section>
  );
}
