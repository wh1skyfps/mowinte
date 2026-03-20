import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "./useScrollReveal";

const faqs = [
  { q: "Em quanto tempo meu projeto fica pronto?", a: "Depende do escopo. Sites institucionais ficam prontos em 7 a 15 dias. Projetos mais complexos com funis e campanhas integradas podem levar de 15 a 30 dias. Sempre alinhamos prazos antes de começar." },
  { q: "A Mowin trabalha com quais tipos de empresa?", a: "Empresas de todos os portes que querem crescer no digital com profissionalismo — de negócios locais a empresas com faturamento alto que querem escalar sua presença online." },
  { q: "Posso contratar apenas um serviço?", a: "Sim, cada serviço pode ser contratado individualmente. Porém, uma estratégia integrada potencializa os resultados de forma significativa." },
  { q: "O pagamento poderá ser feito online?", a: "Sim, estamos implementando pagamento online seguro para facilitar a contratação dos nossos planos e serviços." },
  { q: "Vocês fazem sites e tráfego pago juntos?", a: "Sim, e é uma das combinações mais poderosas. Criamos o site otimizado para conversão e direcionamos tráfego qualificado, maximizando seus resultados." },
];

export default function FAQSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-black py-28 lg:py-36 relative">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-m-cream text-balance">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className={`space-y-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-white/[0.04] overflow-hidden data-[state=open]:border-m-gold/10 transition-colors duration-300">
              <AccordionTrigger className="text-m-cream text-left font-medium text-[15px] hover:no-underline hover:text-m-gold transition-colors py-5 [&>svg]:text-m-gold/50">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-m-cream/35 text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
