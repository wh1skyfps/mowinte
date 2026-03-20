import { useReveal, stagger } from "./useScrollReveal";
import { AlertTriangle, Eye, UserX, Search, TrendingDown } from "lucide-react";

const problems = [
  { icon: Eye, text: "Sua empresa não transmite valor profissional" },
  { icon: AlertTriangle, text: "Seu site parece amador — ou nem existe" },
  { icon: UserX, text: "Você depende de indicação para vender" },
  { icon: Search, text: "Você não domina o Google no seu segmento" },
  { icon: TrendingDown, text: "Você não tem previsibilidade de vendas" },
];

export default function BeliefBreakSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-surface py-28 lg:py-36 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-m-gold/15 to-transparent" />
      
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Belief break */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">A verdade que ninguém te conta</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-m-cream leading-[1.15] text-balance max-w-3xl mx-auto">
            Postar no Instagram <span className="text-m-cream/30">não vai fazer</span> sua empresa crescer.
          </h2>
          <p className="mt-6 text-base text-m-cream/35 max-w-2xl mx-auto leading-relaxed text-pretty">
            Empresa sem posicionamento não escala. Aparência fraca transmite preço baixo.
            Enquanto isso, seu concorrente conquista seus clientes só porque parece mais profissional.
          </p>
        </div>

        {/* Problem list */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              {...stagger(visible, i, 200)}
            >
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-m-black/40 border border-red-500/5 hover:border-red-500/10 transition-all duration-500 group">
                <div className="w-11 h-11 rounded-xl bg-red-500/5 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors duration-300">
                  <p.icon className="w-5 h-5 text-red-400/60" />
                </div>
                <span className="text-m-cream/60 font-medium text-[15px]">{p.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
