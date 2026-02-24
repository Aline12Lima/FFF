import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import logoFundações from "../assets/Black minimalist architect logo.png";

export default function Footer() {
  return (
    <footer id="Footer" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo e Sobre */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-md">
                <img
                  src={logoFundações}
                  alt="FFF Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                FFF <span className="text-brand-yellow">FUNDAÇÕES</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em fundações profundas e contenções em toda a região
              de São Paulo desde 2019. Segurança e precisão na base da sua obra.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-brand-yellow hover:text-brand-blue transition-all rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-brand-yellow hover:text-brand-blue transition-all rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-brand-yellow hover:text-brand-blue transition-all rounded-full"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-yellow pl-3">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>
                <a href="#" className="hover:text-brand-yellow transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-yellow transition">
                  A Empresa
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-yellow transition"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="hover:text-brand-yellow transition"
                >
                  Obras Recentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-yellow transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-yellow pl-3">
              CONTATO
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-yellow shrink-0" size={18} />
                <span className="text-gray-400">
                  Rua Exemplo, 123 - Centro <br /> Cajamar - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow shrink-0" size={18} />
                <span className="text-gray-400">(11) 99862-3585</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-yellow shrink-0" size={18} />
                <span className="text-gray-400">
                  contato@ffffundacoes.com.br
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-yellow pl-3">
              ORÇAMENTO
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Receba uma consultoria técnica para sua fundação.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-yellow transition"
              />
              <button className="bg-brand-yellow text-brand-blue font-black py-3 rounded-sm text-xs uppercase hover:bg-yellow-500 transition">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <p>© 2026 FFF Fundações - Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <span className="text-white">Genevieve Web Sites</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
