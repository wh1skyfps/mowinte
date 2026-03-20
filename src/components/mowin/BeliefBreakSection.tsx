import { useReveal, stagger } from "./useScrollReveal";
import { useRef } from "react";

const scenes = [
  {
    number: "01",
    title: "O cliente pesquisa no Google",
    desc: "Ele procura pelo serviço que você oferece. Mas quem aparece é o concorrente — com site profissional, avaliações e presença forte.",
    emotion: "Invisibilidade",
  },
  {
    number: "02",
    title: "Ele encontra seu Instagram",
    desc: "Posts sem padrão, sem identidade visual, sem estratégia. Em 3 segundos, ele já decidiu que você não é a melhor opção.",
    emotion: "Desconfiança",
  },
  {
    number: "03",
    title: "Tenta achar seu site",
    desc: "Não existe. Ou pior — existe, mas parece de 2012. Lento, desatualizado, sem credibilidade nenhuma.",
    emotion: "Amadorismo",
  },
  {
    number: "04",
    title: "Ele compara você com o concorrente",
    desc: "Mesmo produto, mesmo preço. Mas o outro transmite profissionalismo, autoridade e confiança. A escolha é óbvia.",
    emotion: "Perda",
  },
  {
    number: "05",
    title: "Você perde a venda sem saber",
    desc: "Sem funil, sem dados, sem rastreamento. Você nem sabe quantos clientes está perdendo por dia — e para quem.",
    emotion: "Cegueira",
  },
];

export default function BeliefBreakSection() {
  const { ref, visible } = useReveal();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-m-surface py-28 lg:py-36 relative overflow-hidden">
      {/* Ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-red-400/70 text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            A verdade que ninguém te conta
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-m-cream leading-[1.15] text-balance max-w-3xl mx-auto">
            Postar no Instagram{" "}
            <span className="text-m-cream/30">não vai fazer</span> sua empresa crescer.
          </h2>
          <p className="mt-6 text-base text-m-cream/35 max-w-2xl mx-auto leading-relaxed text-pretty">
            Empresa sem posicionamento não escala. Aparência fraca transmite preço baixo.
            Enquanto isso, seu concorrente conquista seus clientes só porque parece mais profissional.
          </p>
        </div>

        {/* Storyboard timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/15 to-transparent md:-translate-x-px" />

          <div className="space-y-8 lg:space-y-12">
            {scenes.map((scene, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} {...stagger(visible, i, 200)}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Scene card */}
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 ${
                        isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      }`}
                    >
                      <div className="group">
                        <div
                          className={`inline-flex items-center gap-2 mb-3 ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-400/40">
                            Cena {scene.number}
                          </span>
                          <span className="w-6 h-px bg-red-500/20" />
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-m-cream/20">
                            {scene.emotion}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-m-cream mb-2 leading-tight">
                          {scene.title}
                        </h3>
                        <p className="text-sm text-m-cream/35 leading-relaxed text-pretty max-w-md inline-block">
                          {scene.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-2xl bg-m-black border border-red-500/15 flex items-center justify-center group-hover:border-red-500/30 transition-colors duration-300">
                        <span className="text-red-400/60 text-sm font-bold tabular-nums">
                          {scene.number}
                        </span>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div
            className={`mt-12 flex justify-center transition-all duration-700 delay-[1200ms] ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/10" />
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-red-400/30">
                Resultado: venda perdida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
