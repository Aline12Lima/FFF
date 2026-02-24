import { Users, HardHat } from "lucide-react";
import imageEquipe from "../assets/imgs/equipe.jpeg";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Coluna da Esquerda: Imagem ou Composição Visual */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border-l-8 border-brand-yellow">
              <img
                src={imageEquipe}
                alt="Equipe FFF Fundações em obra"
                className="w-full h-full object-cover  transition-all duration-700"
              />
            </div>
            {/* Box de Experiência flutuando */}
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 shadow-xl hidden md:block">
              <span className="text-brand-yellow text-4xl font-black block leading-none">
                6+
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Anos de <br />
                Experiência
              </span>
            </div>
          </div>

          {/* Coluna da Direita: Texto */}
          <div>
            <span className="text-brand-yellow font-black tracking-[0.3em] uppercase text-sm mb-4 block">
              Nossa História
            </span>
            <h2 className="text-4xl font-black text-brand-blue mb-6 uppercase leading-tight">
              Excelência em Fundações <br /> desde 2019
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>
                Fundada em <strong>Cajamar - SP</strong> pelos sócios e irmãos{" "}
                <strong>Matheus e Jefferson</strong>, a FFF Fundações nasceu com
                o propósito de elevar o padrão técnico na execução de bases
                estruturais.
              </p>
              <p>
                O que começou com a união de forças entre irmãos hoje se
                consolidou em uma estrutura robusta. Contamos com um corpo
                técnico de <strong>3 engenheiros especializados</strong>, além
                de mestres de obras e colaboradores experientes.
              </p>
              <p>
                Atualmente, nossa equipe de{" "}
                <strong>16 profissionais qualificados</strong> atua com precisão
                técnica e compromisso, garantindo que cada obra, seja ela
                residencial ou industrial, tenha a base sólida que o seu projeto
                exige.
              </p>
            </div>

            {/* Ícones de Destaque */}
            <div className="grid grid-cols-2 gap-8 mt-10 border-t border-gray-100 pt-10">
              <div className="flex items-center gap-4">
                <div className="text-brand-yellow bg-gray-50 p-3">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-blue leading-none">
                    16
                  </h4>
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    Colaboradores
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-brand-yellow bg-gray-50 p-3">
                  <HardHat size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-blue leading-none">
                    03
                  </h4>
                  <p className="text-[10px] uppercase font-bold text-gray-400">
                    Engenheiros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
