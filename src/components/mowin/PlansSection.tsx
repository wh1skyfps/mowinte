import { Check, ArrowRight } from "lucide-react";
import { useReveal, stagger } from "./useScrollReveal";

const plans = [
  {
    name: "Start",
    desc: "Para quem está começando a construir presença digital profissional.",
    features: ["Site profissional", "Identidade visual", "Redes sociais (1 plataforma)", "Relatório mensal", "Suporte por email"],
    featured: false,
  },
  {
    name: "Growth",
    desc: "Para empresas que querem crescer com estratégia, tráfego e posicionamento.",
    features: ["Tudo do Start", "Gestão de tráfego pago", "Landing pages de conversão", "Social media completo", "Consultoria estratégica", "Relatórios semanais", "Suporte prioritário"],
    featured: true,
  },
  {
    name: "Premium",
    desc: "Para marcas que querem dominar o mercado digital com exclusividade total.",
    features: ["Tudo do Growth", "Design exclusivo", "Múltiplas campanhas", "Branding completo", "Reuniões semanais", "Otimização contínua", "Gestor dedicado", "Prioridade máxima"],
    featured: false,
  },
];

export default function PlansSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="planos" className="bg-m-black py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-m-gold/[0.02] rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase">Planos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-m-cream text-balance">
            Escolha o nível do seu crescimento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {plans.map((p, i) => (
            <div key={p.name} {...stagger(visible, i, 150)}>
              <div className={`relative rounded-2xl p-8 h-full transition-all duration-500 group ${
                p.featured
                  ? "glass-card border-m-gold/20 gold-glow-strong"
                  : "glass-card glass-card-hover"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-6 bg-m-gold text-m-black text-[10px] font-bold px-4 py-1 rounded-full tracking-[0.15em] uppercase">
                    Recomendado
                  </div>
                )}

                <h3 className="text-2xl font-bold text-m-cream">{p.name}</h3>
                <p className="mt-3 text-sm text-m-cream/30 leading-relaxed">{p.desc}</p>

                <div className="mt-6 mb-8 py-4 border-y border-m-gold/8">
                  <span className="text-m-gold text-sm font-medium">Valor sob consulta</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px] text-m-cream/50">
                      <Check className="w-4 h-4 text-m-gold flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.97] ${
                    p.featured
                      ? "bg-m-gold text-m-black hover:bg-m-gold-light shadow-[0_6px_30px_rgba(200,169,106,0.2)]"
                      : "border border-m-gold/20 text-m-gold hover:bg-m-gold/5 hover:border-m-gold/30"
                  }`}
                >
                  Começar agora <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
