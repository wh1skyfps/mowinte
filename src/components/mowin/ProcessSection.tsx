import { useReveal, stagger } from "./useScrollReveal";

const steps = [
  { num: "01", title: "Diagnóstico profundo", desc: "Analisamos seu negócio, mercado, concorrentes e oportunidades para criar uma estratégia certeira." },
  { num: "02", title: "Construção de autoridade", desc: "Desenvolvemos toda a estrutura visual e de conteúdo que posiciona sua marca acima da concorrência." },
  { num: "03", title: "Estrutura de aquisição", desc: "Criamos funis, campanhas e páginas que transformam visitantes em clientes pagantes." },
  { num: "04", title: "Escala e domínio", desc: "Otimizamos, escalamos e dominamos seu mercado com dados e performance contínua." },
];

export default function ProcessSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="processo" className="bg-m-black py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-m-gold/10 to-transparent hidden lg:block" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase">Nosso processo</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-m-cream text-balance">
            Do diagnóstico ao domínio
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-0 relative">
          {steps.map((s, i) => (
            <div key={s.num} {...stagger(visible, i, 200)}>
              <div className={`lg:grid lg:grid-cols-2 lg:gap-20 items-center ${i % 2 === 0 ? "" : "lg:direction-rtl"} ${i > 0 ? "lg:mt-16" : ""}`}>
                <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:text-left lg:pl-16"} relative`}>
                  {/* Dot on timeline */}
                  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? "-right-[2.6rem]" : "-left-[2.6rem]"} w-5 h-5 rounded-full border-2 border-m-gold/30 bg-m-black z-10`}>
                    <div className="w-2 h-2 rounded-full bg-m-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  <div className="glass-card rounded-2xl p-8 hover:border-m-gold/15 transition-all duration-500">
                    <span className="text-m-gold/30 text-5xl font-black">{s.num}</span>
                    <h3 className="mt-3 text-xl font-bold text-m-cream">{s.title}</h3>
                    <p className="mt-3 text-sm text-m-cream/35 leading-relaxed text-pretty">{s.desc}</p>
                  </div>
                </div>
                <div className={`hidden lg:block ${i % 2 === 0 ? "" : "lg:order-1"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
