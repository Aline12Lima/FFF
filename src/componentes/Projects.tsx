import { Plus } from "lucide-react";
import proj1 from "../assets/imgs/obraDi.jpeg";
import proj2 from "../assets/imgs/hero5.jpg";
import proj3 from "../assets/imgs/obra1.jpeg";
import proj4 from "../assets/imgs/obraCY.jpeg";
import proj5 from "../assets/imgs/obraCy.jpg";
import proj6 from "../assets/imgs/Fundaçoes.jpeg";

const projects = [
  { title: "BWDiase", location: "Extrema - MG", img: proj1 },
  { title: "Cyrella", location: "Extrema - MG", img: proj4 },
  { title: "Estacas Galpão", location: "São Paulo - SP", img: proj2 },
  { title: "eSPECIALIZADOS", location: "Jundiaí - SP", img: proj3 },
  { title: "Reforço Estrutural", location: "Campinas - SP", img: proj5 },
  { title: "Infraestrutura de Base", location: "Cajamar - SP", img: proj6 },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="py-20 bg-[#121212] relative overflow-hidden"
    >
      {/* Fundo com padrão sutil de marcas d'água (opcional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-black tracking-[0.4em] uppercase text-xs mb-2 block">
            Portfólio Técnico
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Nossos Projetos{" "}
            <span className="text-brand-yellow inline-block">em Obra</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-6"></div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[300px] overflow-hidden cursor-pointer border border-white/5"
            >
              {/* Imagem do Projeto */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Informações do Projeto (Aparecem no Hover) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">
                  {project.location}
                </span>
                <h3 className="text-xl font-black text-white uppercase leading-none mb-4">
                  {project.title}
                </h3>

                {/* Botão de Ver Mais/Plus */}
                <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center text-brand-blue self-end shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Plus size={24} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-medium mb-6">
            Temos mais de 200 obras executadas com 100% de aprovação técnica.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-brand-yellow text-brand-yellow font-black px-10 py-4 uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-blue transition-all"
          >
            Ver Galeria Completa
          </a>
        </div>
      </div>
    </section>
  );
}
