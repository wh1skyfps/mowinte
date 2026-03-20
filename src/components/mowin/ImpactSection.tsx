import { useReveal } from "./useScrollReveal";

export default function ImpactSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-m-surface py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-m-gold/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-m-gold/[0.01] to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-m-cream leading-[1.15] text-balance">
            Empresas pequenas{" "}
            <span className="text-m-cream/20">parecem pequenas.</span>
          </h2>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.15]">
            <span className="text-m-gold gold-text-glow">Empresas posicionadas</span>{" "}
            <span className="text-m-cream">dominam o mercado.</span>
          </h2>
          <div className="mt-10 w-16 h-0.5 bg-m-gold/30 mx-auto" />
        </div>
      </div>
    </section>
  );
}
