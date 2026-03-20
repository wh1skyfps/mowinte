import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo-mowin.jpg";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-m-black border-t border-white/[0.04] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Mowin" className="h-10 w-10 rounded-full ring-1 ring-m-gold/15" />
              <span className="text-m-cream font-bold text-lg tracking-[0.12em] uppercase">Mowin</span>
            </div>
            <p className="text-m-cream/25 text-sm leading-relaxed max-w-sm">
              Estratégia, posicionamento e performance digital para empresas que querem dominar seu mercado.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:border-m-gold/20 hover:bg-m-gold/5 transition-all duration-300">
                  <Icon className="w-4 h-4 text-m-cream/40" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-m-cream/50 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Navegação</h4>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-m-cream/30 hover:text-m-gold text-sm transition-colors duration-300">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-m-cream/50 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@mowin.com.br" className="text-m-cream/30 hover:text-m-gold text-sm transition-colors flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-m-gold/40" /> contato@mowin.com.br
              </a>
              <a href="https://wa.me/5500000000000" className="text-m-cream/30 hover:text-m-gold text-sm transition-colors flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-m-gold/40" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.03]">
          <p className="text-m-cream/15 text-xs text-center tracking-wide">
            © {new Date().getFullYear()} Mowin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
