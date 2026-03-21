import { useReveal } from "./useScrollReveal";
import { Zap } from "lucide-react";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import beforeImg from "@/assets/portfolio-before-1.png";
import afterImg from "@/assets/portfolio-after-1.jpg";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.webp";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";

const showcases = [
  { before: beforeImg, after: afterImg, label: "Design para redes sociais" },
];

export default function TurningPointSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-black py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-m-gold/[0.02] rounded-full blur-[200px]" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
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
              <ImageComparison
                beforeImage={item.after}
                afterImage={item.before}
                altBefore="Design depois da Mowin"
                altAfter="Design antes da Mowin"
              />
            </div>
          ))}
        </div>

        <div className={`mt-20 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-center text-[13px] font-semibold tracking-[0.2em] uppercase text-m-gold/50 mb-8">
            Nosso portfólio
          </p>
          <ImageAutoSlider images={[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5]} speed={25} />
        </div>
      </div>
    </section>
  );
}
