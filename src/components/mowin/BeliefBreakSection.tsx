import { useReveal, stagger } from "./useScrollReveal";
import { useRef } from "react";
import storyboard01 from "@/assets/storyboard-01-google.jpg";
import storyboard02 from "@/assets/storyboard-02-instagram.jpg";
import storyboard03 from "@/assets/storyboard-03-site.jpg";
import storyboard04 from "@/assets/storyboard-04-compare.jpg";
import storyboard05 from "@/assets/storyboard-05-loss.jpg";

const scenes = [
  {
    number: "01",
    title: "O cliente pesquisa no Google",
    desc: "Ele procura pelo serviço que você oferece. Mas quem aparece é o concorrente — com site profissional, avaliações e presença forte.",
    emotion: "Invisibilidade",
    image: storyboard01,
  },
  {
    number: "02",
    title: "Ele encontra seu Instagram",
    desc: "Posts sem padrão, sem identidade visual, sem estratégia. Em 3 segundos, ele já decidiu que você não é a melhor opção.",
    emotion: "Desconfiança",
    image: storyboard02,
  },
  {
    number: "03",
    title: "Tenta achar seu site",
    desc: "Não existe. Ou pior — existe, mas parece de 2012. Lento, desatualizado, sem credibilidade nenhuma.",
    emotion: "Amadorismo",
    image: storyboard03,
  },
  {
    number: "04",
    title: "Ele compara você com o concorrente",
    desc: "Mesmo produto, mesmo preço. Mas o outro transmite profissionalismo, autoridade e confiança. A escolha é óbvia.",
    emotion: "Perda",
    image: storyboard04,
  },
  {
    number: "05",
    title: "Você perde a venda sem saber",
    desc: "Sem funil, sem dados, sem rastreamento. Você nem sabe quantos clientes está perdendo por dia — e para quem.",
    emotion: "Cegueira",
    image: storyboard05,
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

        {/* Storyboard */}
        <div ref={containerRef} className="space-y-16 lg:space-y-24">
          {scenes.map((scene, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} {...stagger(visible, i, 200)}>
                <div
                  className={`flex flex-col gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={scene.image}
                        alt={scene.title}
                        className="w-full aspect-[5/4] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark overlay for cinematic feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-m-black/60 via-transparent to-m-black/20 pointer-events-none" />
                      {/* Scene number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-m-black/70 backdrop-blur-sm border border-red-500/15 flex items-center justify-center">
                        <span className="text-red-400/70 text-xs font-bold tabular-nums">
                          {scene.number}
                        </span>
                      </div>
                      {/* Emotion tag */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-m-cream/40 bg-m-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-m-cream/5">
                          {scene.emotion}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-10" : "md:pr-10"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-400/40">
                        Cena {scene.number}
                      </span>
                      <span className="w-8 h-px bg-red-500/20" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-m-cream mb-3 leading-tight">
                      {scene.title}
                    </h3>
                    <p className="text-[15px] text-m-cream/35 leading-relaxed text-pretty max-w-md">
                      {scene.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End marker */}
        <div
          className={`mt-20 flex justify-center transition-all duration-700 delay-[1200ms] ${
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
    </section>
  );
}
