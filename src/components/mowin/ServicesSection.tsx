import { useReveal } from "./useScrollReveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const services = [
  {
    title: "Sites de alto impacto",
    desc: "Criamos sites que não apenas existem — eles posicionam, convertem e fazem sua empresa parecer exatamente o que ela quer ser. Cada pixel pensado para transmitir valor e gerar resultado.",
    img: p1,
    reverse: false,
  },
  {
    title: "Tráfego pago estratégico",
    desc: "Nada de impulsionar post. Construímos campanhas completas no Google, Meta e TikTok com funis de aquisição, retargeting inteligente e otimização constante para multiplicar seu investimento.",
    img: p4,
    reverse: true,
  },
  {
    title: "Social media profissional",
    desc: "Conteúdo estratégico que constrói autoridade, gera engajamento real e posiciona sua marca como referência no seu segmento. Nada de template genérico — tudo com identidade própria.",
    img: p2,
    reverse: false,
  },
  {
    title: "Branding e design premium",
    desc: "Identidade visual que faz sua empresa ser lembrada. Do logotipo ao material completo, criamos uma marca com presença visual de alto padrão que comunica valor antes de qualquer palavra.",
    img: p3,
    reverse: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-m-surface py-28 lg:py-36 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-m-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ServiceHeader />
        <div className="mt-20 space-y-20 lg:space-y-32">
          {services.map((s, i) => (
            <ServiceBlock key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceHeader() {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <span className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase">O que fazemos</span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-m-cream text-balance">
        Serviços que transformam negócios
      </h2>
    </div>
  );
}

function ServiceBlock({ title, desc, img, reverse, index }: { title: string; desc: string; img: string; reverse: boolean; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
      <div className={`${reverse ? "lg:order-2" : ""} transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-m-gold/40 text-[13px] font-bold tracking-[0.2em] uppercase">0{index + 1}</span>
        <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-m-cream leading-tight">{title}</h3>
        <p className="mt-5 text-m-cream/35 leading-[1.8] text-pretty">{desc}</p>
        <a href="#contato" className="inline-flex items-center gap-2 mt-8 text-m-gold text-sm font-semibold hover:gap-3 transition-all duration-300">
          Saber mais <span>→</span>
        </a>
      </div>
      <div className={`${reverse ? "lg:order-1" : ""} transition-all duration-800 delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-m-gold/[0.03] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-m-gold/15 transition-all duration-500">
            <img src={img} alt={title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-m-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
