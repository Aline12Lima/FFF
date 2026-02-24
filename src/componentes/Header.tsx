import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // "fixed" mantém o header no topo ao rolar.
    <header className="fixed top-0 left-0 w-full z-50 font-sans shadow-md">
      {/* Barra Superior - Escondida no Mobile para poupar espaço */}
      <div className="bg-brand-blue/90 text-white py-2 px-6 hidden md:block backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between text-[11px] font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Mail size={12} className="text-brand-yellow" />{" "}
              contato@ffffundacoes.com.br
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={12} className="text-brand-yellow" /> Cajamar, SP
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-brand-yellow" /> (11) 44482361
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="bg-brand-blue/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white leading-none tracking-tighter">
                FFF{" "}
                <span className="text-brand-yellow text-sm block tracking-[0.2em]">
                  FUNDAÇÕES
                </span>
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-10 text-xs font-black uppercase text-white">
            <a href="#Hero" className="hover:text-brand-yellow transition">
              Home
            </a>
            <a href="#Services" className="hover:text-brand-yellow transition">
              Serviços
            </a>
            <a href="#Projects" className="hover:text-brand-yellow transition">
              Obras
            </a>
            <a href="#Footer" className="hover:text-brand-yellow transition">
              Contato
            </a>
          </div>

          {/* Botão Desktop */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-brand-yellow text-brand-blue font-black px-6 py-3 rounded-sm text-xs uppercase hover:bg-yellow-500 transition shadow-lg cursor-pointer inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Botão Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-brand-blue border-t border-white/10 flex flex-col p-6 gap-6 text-white font-bold uppercase text-sm animate-in slide-in-from-top duration-300">
            <a
              href="#Hero"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-yellow"
            >
              Home
            </a>
            <a
              href="#Services"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-yellow"
            >
              Serviços
            </a>
            <a
              href="#Projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-yellow"
            >
              Obras
            </a>
            <a
              href="#Footer"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-yellow"
            >
              Contato
            </a>
            <a
              href="#"
              className="bg-brand-yellow text-brand-blue text-center py-4 rounded-sm"
            >
              Orçamento
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
