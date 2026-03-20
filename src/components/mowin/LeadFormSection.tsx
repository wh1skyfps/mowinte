import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "./useScrollReveal";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Criação de Sites",
  "Gestão de Tráfego Pago",
  "Social Media",
  "Branding e Design",
  "Landing Pages",
  "Consultoria Estratégica",
  "Pacote Completo",
];

export default function LeadFormSection() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", whatsapp: "", email: "", servico: "", mensagem: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.whatsapp.trim()) {
      toast({ title: "Preencha os campos obrigatórios", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Ready for Supabase integration
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const inputBase = "w-full bg-m-black/80 border border-white/[0.06] rounded-xl px-5 py-4 text-m-cream text-sm placeholder:text-m-cream/20 focus:outline-none focus:border-m-gold/30 focus:ring-1 focus:ring-m-gold/10 focus:bg-m-black transition-all duration-300";

  if (submitted) {
    return (
      <section id="contato" className="bg-m-surface py-28 lg:py-36">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-m-gold/10 border border-m-gold/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-m-gold" />
          </div>
          <h3 className="text-3xl font-bold text-m-cream mb-4">Proposta enviada!</h3>
          <p className="text-m-cream/40 leading-relaxed">Nossa equipe vai analisar seu projeto e entrar em contato em breve com uma proposta personalizada.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="bg-m-surface py-28 lg:py-36 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-m-gold/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-m-gold/[0.015] rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-m-gold text-[13px] font-semibold tracking-[0.2em] uppercase">Contato</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-m-cream text-balance">
            Pronto para subir de nível?
          </h2>
          <p className="mt-4 text-m-cream/30 text-sm">Preencha o formulário e receba uma proposta personalizada para o seu negócio.</p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-700 delay-[200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className={inputBase} placeholder="Seu nome *" value={form.nome} onChange={set("nome")} required />
            <input className={inputBase} placeholder="Empresa" value={form.empresa} onChange={set("empresa")} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className={inputBase} placeholder="WhatsApp *" value={form.whatsapp} onChange={set("whatsapp")} required />
            <input className={inputBase} type="email" placeholder="E-mail *" value={form.email} onChange={set("email")} required />
          </div>
          <select className={`${inputBase} ${!form.servico ? "text-m-cream/20" : ""}`} value={form.servico} onChange={set("servico")}>
            <option value="">Serviço de interesse</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea className={`${inputBase} min-h-[130px] resize-none`} placeholder="Conte um pouco sobre seu projeto e seus objetivos..." value={form.mensagem} onChange={set("mensagem")} />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-m-gold text-m-black py-4 rounded-xl font-bold text-[15px] hover:bg-m-gold-light transition-all duration-300 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-2.5 shadow-[0_8px_40px_rgba(200,169,106,0.2)] mt-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-m-black/30 border-t-m-black rounded-full animate-spin" />
            ) : (
              <><Send className="w-4 h-4" /> Enviar proposta</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
