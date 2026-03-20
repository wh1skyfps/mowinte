import { useReveal, stagger } from "./useScrollReveal";
import { Zap, Shield, BarChart3, Crown } from "lucide-react";

const items = [
  { icon: Crown, title: "Presença digital forte", desc: "Sua marca transmite autoridade e confiança em cada ponto de contato." },
  { icon: Shield, title: "Posicionamento premium", desc: "Você deixa de competir por preço e começa a competir por valor." },
  { icon: BarChart3, title: "Estrutura de vendas", desc: "Funis, landing pages e campanhas que geram receita previsível." },
  { icon: Zap, title: "Crescimento previsível", desc: "Dados, estratégia e otimização contínua para escalar com segurança." },
];

export default function TurningPointSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-black py-28 lg:py-36 relative overflow-hidden">
      {/* Gold glow */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div key={i} {...stagger(visible, i, 150)}>
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-m-gold/[0.06] border border-m-gold/10 flex items-center justify-center mb-6 group-hover:bg-m-gold/[0.12] group-hover:border-m-gold/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-m-gold" />
                </div>
                <h3 className="text-xl font-bold text-m-cream mb-3">{item.title}</h3>
                <p className="text-sm text-m-cream/35 leading-relaxed text-pretty">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
