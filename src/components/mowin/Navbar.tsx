import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-mowin.jpg";

const links = [
{ label: "Serviços", href: "#servicos" },
{ label: "Processo", href: "#processo" },
{ label: "Planos", href: "#planos" },
{ label: "Contato", href: "#contato" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
    scrolled ? "bg-m-black/90 backdrop-blur-xl border-b border-m-gold/5" : "bg-transparent"}`
    }>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src={logoImg} alt="Mowin" className="h-9 w-9 rounded-full ring-1 ring-m-gold/20 group-hover:ring-m-gold/40 transition-all duration-300" />
          
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) =>
          <a key={l.href} href={l.href} className="text-m-cream/50 hover:text-m-gold text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300">
              {l.label}
            </a>
          )}
          <a href="#contato" className="bg-m-gold/10 border border-m-gold/25 text-m-gold px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:bg-m-gold/20 hover:border-m-gold/40 transition-all duration-300 active:scale-[0.97]">
            Iniciar Projeto
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-m-cream/70 p-2 hover:text-m-gold transition-colors" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {open &&
      <div className="md:hidden bg-m-black/98 backdrop-blur-2xl animate-fade-in border-t border-m-gold/5">
          <div className="px-6 py-8 flex flex-col gap-1">
            {links.map((l) =>
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-m-cream/60 hover:text-m-gold text-base font-medium py-3 border-b border-white/3 transition-colors">
                {l.label}
              </a>
          )}
            <a href="#contato" onClick={() => setOpen(false)} className="mt-4 bg-m-gold text-m-black py-3.5 rounded-xl text-center font-bold text-sm active:scale-[0.97]">
              Iniciar Projeto
            </a>
          </div>
        </div>
      }
    </nav>);

}